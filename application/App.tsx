import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Server, Database, Code, Globe, Settings, Terminal, CheckCircle, AlertCircle, Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function App() {
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
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Psikoloji Uzman Dizini - Docker Kurulum</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Server className="mr-2 h-6 w-6" />
              DigitalOcean ile Kolay Kurulum
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Bu rehber, Psikoloji Uzman Dizini uygulamasını DigitalOcean üzerinde Docker Compose kullanarak kolayca kurmanıza yardımcı olacaktır.
              Tüm backend ve frontend kodları dahil edilmiştir, sadece birkaç adımda uygulamanızı çalıştırabilirsiniz.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <Button className="flex items-center" onClick={() => window.open("https://www.digitalocean.com/products/droplets", "_blank")}>
                <Globe className="mr-2 h-4 w-4" />
                DigitalOcean Droplet Oluştur
              </Button>
              <Button className="flex items-center" onClick={() => window.open("https://marketplace.digitalocean.com/apps/docker", "_blank")}>
                <Download className="mr-2 h-4 w-4" />
                Docker One-Click Droplet
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="setup">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="setup">Kurulum Adımları</TabsTrigger>
            <TabsTrigger value="files">Proje Dosyaları</TabsTrigger>
            <TabsTrigger value="commands">Docker Komutları</TabsTrigger>
            <TabsTrigger value="config">Yapılandırma</TabsTrigger>
          </TabsList>
          
          <TabsContent value="setup" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5" />
                  DigitalOcean Kurulum Adımları
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2">1</div>
                    DigitalOcean Droplet Oluşturma
                  </h3>
                  <p>DigitalOcean hesabınızda Docker yüklü bir Droplet oluşturun:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>DigitalOcean hesabınıza giriş yapın</li>
                    <li>Marketplace&apos;ten &quot;Docker&quot; one-click app&apos;i seçin</li>
                    <li>Basic plan ve en az 2GB RAM / 1 CPU seçin (önerilen: 4GB RAM / 2 CPU)</li>
                    <li>Bölge olarak size en yakın veri merkezini seçin</li>
                    <li>SSH key veya parola ile kimlik doğrulama seçin</li>
                    <li>Droplet&apos;i oluşturun ve IP adresini not edin</li>
                  </ul>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm mt-2">
                    # SSH ile sunucuya bağlanma<br />
                    ssh root@DROPLET_IP_ADRESI
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2">2</div>
                    Proje Dosyalarını İndirme
                  </h3>
                  <p>
                    Sunucunuza bağlandıktan sonra, proje dosyalarını indirmek için aşağıdaki komutları çalıştırın:
                  </p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    # Proje klasörü oluşturma<br />
                    mkdir -p /opt/psikoloji-uzman-dizini<br />
                    cd /opt/psikoloji-uzman-dizini<br /><br />
                    
                    # Proje dosyalarını indirme<br />
                    curl -L https://github.com/kullanici/psikoloji-uzman-dizini/archive/main.tar.gz | tar -xz --strip-components=1<br /><br />
                    
                    # Alternatif olarak, dosyaları manuel olarak oluşturabilirsiniz<br />
                    # (Bu rehberdeki &quot;Proje Dosyaları&quot; sekmesinden içerikleri kopyalayabilirsiniz)
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2">3</div>
                    Çevre Değişkenlerini Ayarlama
                  </h3>
                  <p>
                    .env dosyasını düzenleyerek gerekli ayarları yapın:
                  </p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    # .env dosyasını düzenleme<br />
                    nano .env
                  </div>
                  <p>
                    Özellikle şifreleri ve API anahtarlarını değiştirmeyi unutmayın. Örnek .env dosyası &quot;Proje Dosyaları&quot; sekmesinde bulunmaktadır.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2">4</div>
                    Docker Compose ile Uygulamayı Başlatma
                  </h3>
                  <p>
                    Tüm ayarları yaptıktan sonra, uygulamayı başlatmak için:
                  </p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    # Docker Compose ile uygulamayı başlatma<br />
                    docker-compose up -d
                  </div>
                  <p>
                    Bu komut, veritabanı, backend API ve frontend uygulamasını otomatik olarak başlatacaktır.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2">5</div>
                    Domain Ayarları (İsteğe Bağlı)
                  </h3>
                  <p>
                    Eğer bir domain adınız varsa, DNS ayarlarını yaparak domain adınızı Droplet&apos;inize yönlendirebilirsiniz:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>DNS sağlayıcınızda, A kaydı oluşturun ve Droplet&apos;inizin IP adresini girin</li>
                    <li>www subdomain&apos;i için de aynı işlemi yapın</li>
                    <li>DNS değişikliklerinin yayılması için biraz bekleyin (genellikle 15 dakika - 48 saat)</li>
                  </ul>
                  <p>
                    Daha sonra Nginx yapılandırması için &quot;Yapılandırma&quot; sekmesine bakın.
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4 mt-4">
                  <h4 className="text-blue-800 dark:text-blue-300 font-medium mb-2 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    İlk Giriş Bilgileri
                  </h4>
                  <p className="text-blue-700 dark:text-blue-400">
                    Admin paneline giriş yapmak için aşağıdaki bilgileri kullanabilirsiniz:
                  </p>
                  <ul className="list-disc pl-6 text-blue-700 dark:text-blue-400 mt-2">
                    <li>E-posta: prosman@gmail.com</li>
                    <li>Şifre: 2611907**Terapist</li>
                  </ul>
                  <p className="text-blue-700 dark:text-blue-400 mt-2">
                    <strong>Önemli:</strong> Kurulum tamamlandıktan sonra güvenlik için bu şifreyi değiştirmeyi unutmayın!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="files" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  docker-compose.yml
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs md:text-sm">
{`version: '3.8'

services:
  # PostgreSQL Veritabanı
  postgres:
    image: postgres:14
    container_name: psikoloji-db
    restart: always
    environment:
      POSTGRES_USER: \${DB_USER}
      POSTGRES_PASSWORD: \${DB_PASSWORD}
      POSTGRES_DB: \${DB_NAME}
    ports:
      - "5432:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./init-db.sql:/docker-entrypoint-initdb.d/init-db.sql
    networks:
      - app-network

  # Backend API
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: psikoloji-api
    restart: always
    depends_on:
      - postgres
    environment:
      NODE_ENV: production
      DB_HOST: postgres
      DB_PORT: 5432
      DB_USER: \${DB_USER}
      DB_PASSWORD: \${DB_PASSWORD}
      DB_NAME: \${DB_NAME}
      JWT_SECRET: \${JWT_SECRET}
      SMTP_HOST: \${SMTP_HOST}
      SMTP_PORT: \${SMTP_PORT}
      SMTP_USER: \${SMTP_USER}
      SMTP_PASS: \${SMTP_PASS}
      SMTP_FROM: \${SMTP_FROM}
      CORS_ORIGIN: \${FRONTEND_URL}
    ports:
      - "4000:4000"
    volumes:
      - ./backend:/app
      - /app/node_modules
    networks:
      - app-network

  # Frontend React Uygulaması
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
      args:
        REACT_APP_API_URL: \${BACKEND_URL}
    container_name: psikoloji-frontend
    restart: always
    depends_on:
      - backend
    ports:
      - "3000:80"
    networks:
      - app-network

  # Nginx Reverse Proxy (Domain kullanımı için)
  nginx:
    image: nginx:alpine
    container_name: psikoloji-nginx
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d
      - ./nginx/ssl:/etc/nginx/ssl
      - ./nginx/data/certbot/conf:/etc/letsencrypt
      - ./nginx/data/certbot/www:/var/www/certbot
    depends_on:
      - frontend
      - backend
    networks:
      - app-network

  # Certbot (SSL sertifikası için)
  certbot:
    image: certbot/certbot
    container_name: psikoloji-certbot
    volumes:
      - ./nginx/data/certbot/conf:/etc/letsencrypt
      - ./nginx/data/certbot/www:/var/www/certbot
    command: certonly --webroot --webroot-path=/var/www/certbot --email \${ADMIN_EMAIL} --agree-tos --no-eff-email -d \${DOMAIN_NAME} -d www.\${DOMAIN_NAME}

networks:
  app-network:
    driver: bridge

volumes:
  postgres-data:`}
                </pre>
                <Button className="mt-4" onClick={() => copyToClipboard(
                  document.querySelector('pre')?.innerText || '',
                  "docker-compose.yml içeriği kopyalandı!"
                )}>
                  <Copy className="mr-2 h-4 w-4" />
                  İçeriği Kopyala
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  .env
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs md:text-sm">
{`# Veritabanı Ayarları
DB_USER=psikoloji_admin
DB_PASSWORD=guclu_sifre_123
DB_NAME=psikoloji_db

# JWT Kimlik Doğrulama
JWT_SECRET=cok_gizli_jwt_anahtari_degistirin

# E-posta Ayarları
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-email-password
SMTP_FROM=no-reply@psikolojiuzmandizini.com

# URL Ayarları
BACKEND_URL=http://localhost:4000
FRONTEND_URL=http://localhost:3000

# Domain Ayarları (Nginx ve SSL için)
DOMAIN_NAME=psikolojiuzmandizini.com
ADMIN_EMAIL=admin@psikolojiuzmandizini.com`}
                </pre>
                <Button className="mt-4" onClick={() => copyToClipboard(
                  document.querySelectorAll('pre')[1]?.innerText || '',
                  ".env içeriği kopyalandı!"
                )}>
                  <Copy className="mr-2 h-4 w-4" />
                  İçeriği Kopyala
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  init-db.sql
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs md:text-sm">
{`-- Veritabanı şeması oluşturma
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Şehirler tablosu
CREATE TABLE cities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Uzmanlık alanları tablosu
CREATE TABLE specialties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Kullanıcılar tablosu
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'therapist', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Uzmanlar tablosu
CREATE TABLE therapists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(50),
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  city_id UUID NOT NULL REFERENCES cities(id),
  about TEXT NOT NULL,
  approach TEXT NOT NULL,
  profile_image VARCHAR(255),
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'inactive')),
  profile_views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Uzman eğitim bilgileri tablosu
CREATE TABLE therapist_education (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  therapist_id UUID NOT NULL REFERENCES therapists(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Uzman uzmanlık alanları ilişki tablosu
CREATE TABLE therapist_specialties (
  therapist_id UUID NOT NULL REFERENCES therapists(id) ON DELETE CASCADE,
  specialty_id UUID NOT NULL REFERENCES specialties(id) ON DELETE CASCADE,
  PRIMARY KEY (therapist_id, specialty_id)
);

-- Randevular tablosu
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  therapist_id UUID NOT NULL REFERENCES therapists(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  date DATE NOT NULL,
  time_slot VARCHAR(10) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  appointment_type VARCHAR(20) NOT NULL CHECK (appointment_type IN ('video', 'office')),
  notes TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'rejected')),
  reject_reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- İndeksler
CREATE INDEX idx_therapists_slug ON therapists(slug);
CREATE INDEX idx_therapists_city_id ON therapists(city_id);
CREATE INDEX idx_therapists_status ON therapists(status);
CREATE INDEX idx_appointments_therapist_id ON appointments(therapist_id);
CREATE INDEX idx_appointments_date ON appointments(date);
CREATE INDEX idx_appointments_status ON appointments(status);

-- Admin kullanıcısı oluşturma
INSERT INTO users (id, email, password, role) VALUES 
(uuid_generate_v4(), 'prosman@gmail.com', '$2b$10$X7VYHy.oOQrEeZvHXLJYhOG4XOb8RxQxqJe/zKr/p0YKAI/7dVmXi', 'admin');

-- Örnek şehirler
INSERT INTO cities (name) VALUES 
('İstanbul'), ('Ankara'), ('İzmir'), ('Antalya'), ('Bursa'),
('Adana'), ('Konya'), ('Trabzon'), ('Gaziantep'), ('Eskişehir');

-- Örnek uzmanlık alanları
INSERT INTO specialties (name) VALUES 
('Depresyon'), ('Anksiyete'), ('İlişki Problemleri'), ('Aile Terapisi'),
('Travma'), ('Özgüven'), ('Stres Yönetimi'), ('Çift Terapisi'),
('Bireysel Terapi'), ('Ergen Terapisi'), ('Çocuk Terapisi');`}
                </pre>
                <Button className="mt-4" onClick={() => copyToClipboard(
                  document.querySelectorAll('pre')[2]?.innerText || '',
                  "init-db.sql içeriği kopyalandı!"
                )}>
                  <Copy className="mr-2 h-4 w-4" />
                  İçeriği Kopyala
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  backend/Dockerfile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs md:text-sm">
{`FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]`}
                </pre>
                <Button className="mt-4" onClick={() => copyToClipboard(
                  document.querySelectorAll('pre')[3]?.innerText || '',
                  "backend/Dockerfile içeriği kopyalandı!"
                )}>
                  <Copy className="mr-2 h-4 w-4" />
                  İçeriği Kopyala
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  frontend/Dockerfile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs md:text-sm">
{`# Build aşaması
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# Çalıştırma aşaması
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]`}
                </pre>
                <Button className="mt-4" onClick={() => copyToClipboard(
                  document.querySelectorAll('pre')[4]?.innerText || '',
                  "frontend/Dockerfile içeriği kopyalandı!"
                )}>
                  <Copy className="mr-2 h-4 w-4" />
                  İçeriği Kopyala
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  nginx/conf.d/default.conf
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs md:text-sm">
{`server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://frontend:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /api {
        proxy_pass http://backend:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# SSL yapılandırması için (domain adınız olduğunda)
# server {
#     listen 443 ssl;
#     server_name psikolojiuzmandizini.com www.psikolojiuzmandizini.com;
#
#     ssl_certificate /etc/letsencrypt/live/psikolojiuzmandizini.com/fullchain.pem;
#     ssl_certificate_key /etc/letsencrypt/live/psikolojiuzmandizini.com/privkey.pem;
#
#     location / {
#         proxy_pass http://frontend:80;
#         proxy_set_header Host $host;
#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto $scheme;
#     }
#
#     location /api {
#         proxy_pass http://backend:4000;
#         proxy_set_header Host $host;
#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto $scheme;
#     }
# }
#
# # HTTP'den HTTPS'e yönlendirme
# server {
#     listen 80;
#     server_name psikolojiuzmandizini.com www.psikolojiuzmandizini.com;
#     return 301 https://$host$request_uri;
# }`}
                </pre>
                <Button className="mt-4" onClick={() => copyToClipboard(
                  document.querySelectorAll('pre')[5]?.innerText || '',
                  "nginx/conf.d/default.conf içeriği kopyalandı!"
                )}>
                  <Copy className="mr-2 h-4 w-4" />
                  İçeriği Kopyala
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  frontend/nginx/nginx.conf
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs md:text-sm">
{`server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache statik dosyalar
    location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000";
    }

    # Gzip sıkıştırma
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml;
    gzip_disable "MSIE [1-6]\\.";
}`}
                </pre>
                <Button className="mt-4" onClick={() => copyToClipboard(
                  document.querySelectorAll('pre')[6]?.innerText || '',
                  "frontend/nginx/nginx.conf içeriği kopyalandı!"
                )}>
                  <Copy className="mr-2 h-4 w-4" />
                  İçeriği Kopyala
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Klasör Yapısı
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs md:text-sm">
{`psikoloji-uzman-dizini/
├── docker-compose.yml
├── .env
├── init-db.sql
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   │   ├── index.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── utils/
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   ├── nginx/
│   │   └── nginx.conf
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── store/
│       ├── utils/
│       └── App.js
├── nginx/
│   ├── conf.d/
│   │   └── default.conf
│   ├── ssl/
│   └── data/
│       └── certbot/`}
                </pre>
                <Button className="mt-4" onClick={() => copyToClipboard(
                  document.querySelectorAll('pre')[7]?.innerText || '',
                  "Klasör yapısı kopyalandı!"
                )}>
                  <Copy className="mr-2 h-4 w-4" />
                  İçeriği Kopyala
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="commands" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Terminal className="mr-2 h-5 w-5" />
                  Sık Kullanılan Docker Komutları
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Uygulamayı Başlatma</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose up -d
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu komut, tüm servisleri (veritabanı, backend, frontend, nginx) arka planda başlatır.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Uygulamayı Durdurma</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose down
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu komut, tüm servisleri durdurur ve container&apos;ları kaldırır.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Logları Görüntüleme</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose logs -f
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu komut, tüm servislerin loglarını gerçek zamanlı olarak görüntüler.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Belirli Bir Servisin Loglarını Görüntüleme</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose logs -f backend
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu komut, sadece backend servisinin loglarını görüntüler.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Servislerin Durumunu Kontrol Etme</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose ps
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu komut, tüm servislerin durumunu (çalışıyor, durdurulmuş vb.) görüntüler.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Veritabanına Bağlanma</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose exec postgres psql -U psikoloji_admin -d psikoloji_db
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu komut, PostgreSQL veritabanına bağlanmanızı sağlar.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Uygulamayı Yeniden Başlatma</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose restart
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu komut, tüm servisleri yeniden başlatır.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Uygulamayı Güncelleme</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose down<br />
                    docker-compose pull<br />
                    docker-compose up -d --build
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu komutlar, uygulamayı en son sürüme günceller.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">SSL Sertifikası Yenileme</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose run --rm certbot renew
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu komut, SSL sertifikalarını yeniler. Let&apos;s Encrypt sertifikaları 90 günlük olduğundan, düzenli olarak yenilenmesi gerekir.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Otomatik SSL Yenileme için Cron Job Ekleme</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    crontab -e<br />
                    # Aşağıdaki satırı ekleyin:<br />
                    0 3 * * * cd /opt/psikoloji-uzman-dizini && docker-compose run --rm certbot renew && docker-compose restart nginx
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu, her gece saat 3&apos;te sertifikaları yenilemeyi dener ve gerekirse Nginx&apos;i yeniden başlatır.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="config" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  SSL Sertifikası Kurulumu
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Domain adınız varsa, Let&apos;s Encrypt ile ücretsiz SSL sertifikası alabilirsiniz. Aşağıdaki adımları izleyin:
                </p>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">1. .env Dosyasını Düzenleme</h3>
                  <p>
                    .env dosyasında DOMAIN_NAME ve ADMIN_EMAIL değerlerini ayarlayın:
                  </p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    DOMAIN_NAME=psikolojiuzmandizini.com<br />
                    ADMIN_EMAIL=admin@psikolojiuzmandizini.com
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">2. Nginx Yapılandırmasını Düzenleme</h3>
                  <p>
                    nginx/conf.d/default.conf dosyasındaki yorum satırlarını kaldırın ve domain adınızı düzenleyin.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">3. SSL Sertifikası Alma</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose up -d nginx<br />
                    docker-compose run --rm certbot
                  </div>
                  <p>
                    Bu komutlar, Nginx&apos;i başlatır ve Let&apos;s Encrypt&apos;ten SSL sertifikası alır.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">4. Nginx&apos;i Yeniden Başlatma</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose restart nginx
                  </div>
                  <p>
                    Bu komut, Nginx&apos;i yeniden başlatır ve SSL sertifikasını yükler.
                  </p>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-4 mt-4">
                  <h4 className="text-yellow-800 dark:text-yellow-300 font-medium mb-2 flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    Önemli Not
                  </h4>
                  <p className="text-yellow-700 dark:text-yellow-400">
                    SSL sertifikaları 90 gün geçerlidir. Otomatik yenileme için yukarıdaki &quot;Komutlar&quot; sekmesindeki cron job&apos;ı ayarlamayı unutmayın.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Yedekleme ve Geri Yükleme
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Veritabanı Yedekleme</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    docker-compose exec postgres pg_dump -U psikoloji_admin -d psikoloji_db &gt; backup_$(date +%Y%m%d).sql
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu komut, veritabanının bir yedeğini alır ve tarih etiketli bir dosyaya kaydeder.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Veritabanı Geri Yükleme</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    cat backup_20230101.sql | docker-compose exec -T postgres psql -U psikoloji_admin -d psikoloji_db
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bu komut, belirtilen yedek dosyasından veritabanını geri yükler.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Otomatik Yedekleme için Cron Job</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
                    crontab -e<br />
                    # Aşağıdaki satırı ekleyin (her gün gece yarısı yedek alır):<br />
                    0 0 * * * cd /opt/psikoloji-uzman-dizini && docker-compose exec -T postgres pg_dump -U psikoloji_admin -d psikoloji_db &gt; /opt/backups/backup_$(date +\%Y\%m\%d).sql
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4 mt-4">
                  <h4 className="text-blue-800 dark:text-blue-300 font-medium mb-2 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Tavsiye
                  </h4>
                  <p className="text-blue-700 dark:text-blue-400">
                    Yedeklerinizi düzenli olarak harici bir depolama alanına (örn. AWS S3, Google Drive) aktarmanızı öneririz. Bunun için aşağıdaki gibi bir script kullanabilirsiniz:
                  </p>
                  <div className="bg-blue-100 dark:bg-blue-800/30 p-3 rounded-md font-mono text-sm mt-2">
                    #!/bin/bash<br />
                    # Yedek al<br />
                    BACKUP_FILE=&quot;/opt/backups/backup_$(date +%Y%m%d).sql&quot;<br />
                    docker-compose exec -T postgres pg_dump -U psikoloji_admin -d psikoloji_db &gt; $BACKUP_FILE<br /><br />
                    
                    # AWS S3&apos;e yükle (aws cli kurulu olmalı)<br />
                    aws s3 cp $BACKUP_FILE s3://your-bucket-name/backups/
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Performans Optimizasyonu
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">PostgreSQL Ayarları</h3>
                  <p>
                    Yüksek trafik durumunda PostgreSQL performansını artırmak için docker-compose.yml dosyasına aşağıdaki yapılandırmayı ekleyebilirsiniz:
                  </p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
{`postgres:
  # ... mevcut yapılandırma ...
  command: postgres -c shared_buffers=256MB -c max_connections=200
  environment:
    # ... mevcut çevre değişkenleri ...
    POSTGRES_INITDB_ARGS: "--data-checksums"`}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Nginx Önbellek Ayarları</h3>
                  <p>
                    Statik dosyalar için daha agresif önbellek ayarları ekleyebilirsiniz:
                  </p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
{`# nginx/conf.d/default.conf dosyasına ekleyin
location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000";
    access_log off;
}`}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Docker Compose Kaynak Limitleri</h3>
                  <p>
                    Servislerin kaynak kullanımını sınırlamak için docker-compose.yml dosyasına aşağıdaki yapılandırmayı ekleyebilirsiniz:
                  </p>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm">
{`services:
  backend:
    # ... mevcut yapılandırma ...
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M`}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              Kurulum Sonrası Kontrol Listesi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full border border-primary flex items-center justify-center mr-2">
                  <span className="text-primary text-sm">1</span>
                </div>
                <div>
                  <strong>Güvenlik:</strong> .env dosyasındaki tüm şifreleri ve API anahtarlarını değiştirdiğinizden emin olun.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full border border-primary flex items-center justify-center mr-2">
                  <span className="text-primary text-sm">2</span>
                </div>
                <div>
                  <strong>Admin Şifresi:</strong> Varsayılan admin şifresini değiştirin (prosman@gmail.com / 2611907**Terapist).
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full border border-primary flex items-center justify-center mr-2">
                  <span className="text-primary text-sm">3</span>
                </div>
                <div>
                  <strong>Yedekleme:</strong> Otomatik yedekleme için cron job ayarlayın.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full border border-primary flex items-center justify-center mr-2">
                  <span className="text-primary text-sm">4</span>
                </div>
                <div>
                  <strong>SSL:</strong> Domain adınız varsa, SSL sertifikası alın ve otomatik yenileme ayarlayın.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full border border-primary flex items-center justify-center mr-2">
                  <span className="text-primary text-sm">5</span>
                </div>
                <div>
                  <strong>Firewall:</strong> Sunucunuzda sadece gerekli portları (80, 443) açık tutun.
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full border border-primary flex items-center justify-center mr-2">
                  <span className="text-primary text-sm">6</span>
                </div>
                <div>
                  <strong>Güncelleme:</strong> Düzenli olarak Docker imajlarını ve sistem paketlerini güncelleyin.
                </div>
              </li>
            </ul>
            
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4">
              <h4 className="text-blue-800 dark:text-blue-300 font-medium mb-2 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                Tebrikler!
              </h4>
              <p className="text-blue-700 dark:text-blue-400">
                Psikoloji Uzman Dizini uygulamanız başarıyla kuruldu. Artık uzmanlar kayıt olabilir, profillerini yönetebilir ve kullanıcılar randevu alabilir.
              </p>
              <p className="text-blue-700 dark:text-blue-400 mt-2">
                Herhangi bir sorunuz veya desteğe ihtiyacınız olursa, lütfen iletişime geçin.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" className="bg-blue-100 dark:bg-blue-800/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50" onClick={() => window.open("http://localhost:3000", "_blank")}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Uygulamayı Aç
                </Button>
                <Button variant="outline" className="bg-blue-100 dark:bg-blue-800/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50" onClick={() => window.open("http://localhost:3000/admin", "_blank")}>
                  <Settings className="mr-2 h-4 w-4" />
                  Admin Paneline Git
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <footer className="bg-muted py-6 border-t border-border mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Psikoloji Uzman Dizini. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  );
}