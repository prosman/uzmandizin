import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Terminal, Server, AlertCircle, CheckCircle, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function DigitalOceanSetup() {
  const { toast } = useToast();

  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Kopyalandı!",
      description: message,
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Server className="mr-2 h-5 w-5" />
            DigitalOcean Kurulum Rehberi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Bu rehber, Psikoloji Uzman Dizini uygulamasını DigitalOcean üzerinde kurmanız için adım adım talimatlar içerir.
          </p>
          
          <Tabs defaultValue="droplet">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="droplet">Droplet Oluşturma</TabsTrigger>
              <TabsTrigger value="setup">Kurulum</TabsTrigger>
              <TabsTrigger value="domain">Domain Ayarları</TabsTrigger>
            </TabsList>
            
            <TabsContent value="droplet" className="mt-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">1. DigitalOcean Hesabı Oluşturma</h3>
                <p>
                  Eğer henüz bir DigitalOcean hesabınız yoksa, <a href="https://cloud.digitalocean.com/registrations/new" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DigitalOcean'dan</a> bir hesap oluşturun.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">2. Docker One-Click Droplet Oluşturma</h3>
                <p>
                  DigitalOcean kontrol panelinde, Docker yüklü bir Droplet oluşturmak için şu adımları izleyin:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>DigitalOcean kontrol panelinde "Create" düğmesine tıklayın ve "Droplets" seçeneğini seçin.</li>
                  <li>"Marketplace" sekmesine geçin ve arama kutusuna "Docker" yazın.</li>
                  <li>"Docker" one-click app'i seçin.</li>
                  <li>
                    <strong>Plan seçimi:</strong> Basic plan ve en az 2GB RAM / 1 CPU seçin (önerilen: 4GB RAM / 2 CPU).
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-3 mt-2">
                      <p className="text-yellow-800 dark:text-yellow-300 text-sm flex items-center">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        2GB RAM'den daha az RAM ile PostgreSQL ve Node.js uygulamaları performans sorunları yaşayabilir.
                      </p>
                    </div>
                  </li>
                  <li>Bölge olarak size en yakın veri merkezini seçin (örn. Frankfurt, Amsterdam).</li>
                  <li>
                    <strong>Kimlik doğrulama:</strong> SSH key (önerilen) veya parola ile kimlik doğrulama seçin.
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-3 mt-2">
                      <p className="text-blue-800 dark:text-blue-300 text-sm">
                        SSH key kullanmak daha güvenlidir. Eğer SSH key oluşturmayı bilmiyorsanız, DigitalOcean'ın <a href="https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">SSH key rehberini</a> takip edebilirsiniz.
                      </p>
                    </div>
                  </li>
                  <li>Droplet'e bir isim verin (örn. "psikoloji-uzman-dizini").</li>
                  <li>"Create Droplet" düğmesine tıklayın.</li>
                </ol>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">3. Droplet'e Bağlanma</h3>
                <p>
                  Droplet oluşturulduktan sonra, SSH kullanarak bağlanabilirsiniz:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm relative">
                  <Button 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard("ssh root@DROPLET_IP_ADRESI", "SSH komutu kopyalandı!")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  ssh root@DROPLET_IP_ADRESI
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Not:</strong> DROPLET_IP_ADRESI yerine Droplet'inizin gerçek IP adresini yazın.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 mt-4">
                <h4 className="text-green-800 dark:text-green-300 font-medium mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Droplet Hazır!
                </h4>
                <p className="text-green-700 dark:text-green-400">
                  Artık Docker yüklü bir Droplet'iniz var. Bir sonraki adımda, uygulama dosyalarını yükleyecek ve uygulamayı başlatacaksınız.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="setup" className="mt-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">1. Proje Klasörü Oluşturma</h3>
                <p>
                  Droplet'e bağlandıktan sonra, proje dosyalarını saklamak için bir klasör oluşturun:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm relative">
                  <Button 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard("mkdir -p /opt/psikoloji-uzman-dizini\ncd /opt/psikoloji-uzman-dizini", "Klasör oluşturma komutları kopyalandı!")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  mkdir -p /opt/psikoloji-uzman-dizini<br />
                  cd /opt/psikoloji-uzman-dizini
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">2. Proje Dosyalarını Oluşturma</h3>
                <p>
                  Gerekli dosyaları oluşturmak için aşağıdaki komutları kullanın:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm relative">
                  <Button 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(createFilesScript, "Dosya oluşturma komutları kopyalandı!")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  {createFilesScript}
                </div>
                <p className="text-sm text-muted-foreground">
                  Bu komutlar, gerekli klasörleri ve temel dosyaları oluşturacaktır. Daha sonra her dosyanın içeriğini düzenlemeniz gerekecek.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">3. Dosya İçeriklerini Düzenleme</h3>
                <p>
                  Her dosyanın içeriğini düzenlemek için nano editörünü kullanabilirsiniz:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm">
                  nano docker-compose.yml<br />
                  # İçeriği yapıştırın, kaydetmek için CTRL+O, çıkmak için CTRL+X<br /><br />
                  
                  nano .env<br />
                  # İçeriği yapıştırın, kaydetmek için CTRL+O, çıkmak için CTRL+X<br /><br />
                  
                  nano init-db.sql<br />
                  # İçeriği yapıştırın, kaydetmek için CTRL+O, çıkmak için CTRL+X
                </div>
                <p className="text-sm text-muted-foreground">
                  Her dosya için, "Proje Dosyaları" sekmesindeki içerikleri kopyalayıp yapıştırın.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">4. Backend ve Frontend Dosyalarını Oluşturma</h3>
                <p>
                  Backend ve frontend klasörlerindeki dosyaları oluşturmak için:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm">
                  # Backend dosyaları<br />
                  nano backend/Dockerfile<br />
                  nano backend/package.json<br />
                  mkdir -p backend/src/routes backend/src/controllers backend/src/models backend/src/middleware backend/src/utils<br />
                  nano backend/src/index.js<br /><br />
                  
                  # Frontend dosyaları<br />
                  nano frontend/Dockerfile<br />
                  mkdir -p frontend/nginx<br />
                  nano frontend/nginx/nginx.conf<br />
                  nano frontend/package.json
                </div>
                <p className="text-sm text-muted-foreground">
                  Her dosya için, "Backend Dosyaları" ve "Frontend Dosyaları" sekmelerindeki içerikleri kopyalayıp yapıştırın.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">5. Nginx Yapılandırması</h3>
                <p>
                  Nginx yapılandırma dosyasını oluşturun:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm relative">
                  <Button 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard("mkdir -p nginx/conf.d nginx/ssl nginx/data/certbot/conf nginx/data/certbot/www\nnano nginx/conf.d/default.conf", "Nginx komutları kopyalandı!")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  mkdir -p nginx/conf.d nginx/ssl nginx/data/certbot/conf nginx/data/certbot/www<br />
                  nano nginx/conf.d/default.conf
                </div>
                <p className="text-sm text-muted-foreground">
                  "Proje Dosyaları" sekmesindeki nginx/conf.d/default.conf içeriğini kopyalayıp yapıştırın.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">6. Docker Compose ile Uygulamayı Başlatma</h3>
                <p>
                  Tüm dosyaları oluşturduktan sonra, uygulamayı başlatmak için:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm relative">
                  <Button 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard("docker-compose up -d", "Docker Compose komutu kopyalandı!")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  docker-compose up -d
                </div>
                <p className="text-sm text-muted-foreground">
                  Bu komut, tüm servisleri (veritabanı, backend, frontend, nginx) arka planda başlatacaktır.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">7. Logları Kontrol Etme</h3>
                <p>
                  Uygulamanın düzgün çalıştığından emin olmak için logları kontrol edin:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm relative">
                  <Button 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard("docker-compose logs -f", "Log komutu kopyalandı!")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  docker-compose logs -f
                </div>
                <p className="text-sm text-muted-foreground">
                  Logları izlemeyi durdurmak için CTRL+C tuşlarına basın.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 mt-4">
                <h4 className="text-green-800 dark:text-green-300 font-medium mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Uygulama Hazır!
                </h4>
                <p className="text-green-700 dark:text-green-400">
                  Artık uygulamanız çalışıyor olmalı. Tarayıcınızda <strong>http://DROPLET_IP_ADRESI</strong> adresine giderek uygulamayı test edebilirsiniz.
                </p>
                <p className="text-green-700 dark:text-green-400 mt-2">
                  Admin paneline giriş yapmak için:<br />
                  E-posta: prosman@gmail.com<br />
                  Şifre: 2611907**Terapist
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="domain" className="mt-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">1. Domain Adı Satın Alma</h3>
                <p>
                  Eğer henüz bir domain adınız yoksa, Namecheap, GoDaddy veya benzeri bir domain sağlayıcısından bir domain adı satın alabilirsiniz.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">2. DNS Ayarları</h3>
                <p>
                  Domain adınızı Droplet'inize yönlendirmek için DNS ayarlarını yapın:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Domain sağlayıcınızın kontrol paneline gidin.</li>
                  <li>DNS ayarları veya Name Server ayarları bölümünü bulun.</li>
                  <li>
                    A kaydı ekleyin:
                    <ul className="list-disc pl-6 mt-1">
                      <li>Host: @ (veya boş bırakın)</li>
                      <li>Value/Points to: DROPLET_IP_ADRESI</li>
                      <li>TTL: Automatic veya 3600</li>
                    </ul>
                  </li>
                  <li>
                    www için de bir A kaydı ekleyin:
                    <ul className="list-disc pl-6 mt-1">
                      <li>Host: www</li>
                      <li>Value/Points to: DROPLET_IP_ADRESI</li>
                      <li>TTL: Automatic veya 3600</li>
                    </ul>
                  </li>
                </ol>
                <p className="text-sm text-muted-foreground">
                  DNS değişikliklerinin yayılması biraz zaman alabilir (genellikle 15 dakika - 48 saat).
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">3. .env Dosyasını Güncelleme</h3>
                <p>
                  .env dosyasını düzenleyerek domain adınızı ve e-posta adresinizi ekleyin:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm relative">
                  <Button 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard("nano /opt/psikoloji-uzman-dizini/.env", "Nano komutu kopyalandı!")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  nano /opt/psikoloji-uzman-dizini/.env
                </div>
                <p className="text-sm text-muted-foreground">
                  Aşağıdaki satırları düzenleyin:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm">
                  DOMAIN_NAME=psikolojiuzmandizini.com<br />
                  ADMIN_EMAIL=admin@psikolojiuzmandizini.com<br />
                  FRONTEND_URL=https://psikolojiuzmandizini.com<br />
                  BACKEND_URL=https://psikolojiuzmandizini.com/api
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">4. Nginx Yapılandırmasını Güncelleme</h3>
                <p>
                  nginx/conf.d/default.conf dosyasını düzenleyerek SSL yapılandırmasını etkinleştirin:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm relative">
                  <Button 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard("nano /opt/psikoloji-uzman-dizini/nginx/conf.d/default.conf", "Nano komutu kopyalandı!")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  nano /opt/psikoloji-uzman-dizini/nginx/conf.d/default.conf
                </div>
                <p className="text-sm text-muted-foreground">
                  SSL yapılandırması için yorum satırlarını kaldırın ve domain adınızı düzenleyin.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">5. SSL Sertifikası Alma</h3>
                <p>
                  Let's Encrypt'ten ücretsiz bir SSL sertifikası almak için:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm relative">
                  <Button 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard("cd /opt/psikoloji-uzman-dizini\ndocker-compose up -d nginx\ndocker-compose run --rm certbot", "SSL komutları kopyalandı!")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  cd /opt/psikoloji-uzman-dizini<br />
                  docker-compose up -d nginx<br />
                  docker-compose run --rm certbot
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">6. Nginx'i Yeniden Başlatma</h3>
                <p>
                  SSL sertifikasını yüklemek için Nginx'i yeniden başlatın:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm relative">
                  <Button 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard("docker-compose restart nginx", "Restart komutu kopyalandı!")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  docker-compose restart nginx
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">7. Otomatik SSL Yenileme</h3>
                <p>
                  SSL sertifikalarını otomatik olarak yenilemek için bir cron job ekleyin:
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm relative">
                  <Button 
                    size="sm" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard("crontab -e\n# Aşağıdaki satırı ekleyin:\n0 3 * * * cd /opt/psikoloji-uzman-dizini && docker-compose run --rm certbot renew && docker-compose restart nginx", "Cron komutu kopyalandı!")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  crontab -e<br />
                  # Aşağıdaki satırı ekleyin:<br />
                  0 3 * * * cd /opt/psikoloji-uzman-dizini && docker-compose run --rm certbot renew && docker-compose restart nginx
                </div>
                <p className="text-sm text-muted-foreground">
                  Bu, her gece saat 3'te sertifikaları yenilemeyi dener ve gerekirse Nginx'i yeniden başlatır.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 mt-4">
                <h4 className="text-green-800 dark:text-green-300 font-medium mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Domain Ayarları Tamamlandı!
                </h4>
                <p className="text-green-700 dark:text-green-400">
                  Artık uygulamanız domain adınız üzerinden güvenli bir şekilde (HTTPS) erişilebilir olmalı. Tarayıcınızda <strong>https://psikolojiuzmandizini.com</strong> adresine giderek uygulamayı test edebilirsiniz.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

const createFilesScript = `# Ana klasörleri oluştur
mkdir -p backend/src/{routes,controllers,models,middleware,utils}
mkdir -p frontend/src/{components,pages,store,utils}
mkdir -p frontend/nginx
mkdir -p nginx/conf.d nginx/ssl nginx/data/certbot/{conf,www}

# Temel dosyaları oluştur
touch docker-compose.yml .env init-db.sql
touch backend/Dockerfile frontend/Dockerfile
touch backend/package.json frontend/package.json
touch backend/src/index.js
touch frontend/nginx/nginx.conf
touch nginx/conf.d/default.conf`;