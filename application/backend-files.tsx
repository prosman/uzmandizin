import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function BackendFiles() {
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
          <CardTitle className="text-xl">Backend Dosyaları</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Aşağıda, backend uygulaması için gerekli temel dosyaların içerikleri bulunmaktadır. 
            Bu dosyaları backend klasörünüzde oluşturmanız gerekiyor.
          </p>
          
          <Tabs defaultValue="package">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="package">package.json</TabsTrigger>
              <TabsTrigger value="index">index.js</TabsTrigger>
              <TabsTrigger value="routes">routes</TabsTrigger>
              <TabsTrigger value="controllers">controllers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="package" className="mt-4">
              <div className="bg-muted p-4 rounded-md relative">
                <Button 
                  size="sm" 
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(packageJsonContent, "package.json içeriği kopyalandı!")}
                >
                  <Copy className="h-4 w-4 mr-1" /> Kopyala
                </Button>
                <pre className="text-xs md:text-sm overflow-x-auto">{packageJsonContent}</pre>
              </div>
            </TabsContent>
            
            <TabsContent value="index" className="mt-4">
              <div className="bg-muted p-4 rounded-md relative">
                <Button 
                  size="sm" 
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(indexJsContent, "index.js içeriği kopyalandı!")}
                >
                  <Copy className="h-4 w-4 mr-1" /> Kopyala
                </Button>
                <pre className="text-xs md:text-sm overflow-x-auto">{indexJsContent}</pre>
              </div>
            </TabsContent>
            
            <TabsContent value="routes" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    src/routes/index.js
                  </h3>
                  <div className="bg-muted p-4 rounded-md relative">
                    <Button 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(routesIndexContent, "routes/index.js içeriği kopyalandı!")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Kopyala
                    </Button>
                    <pre className="text-xs md:text-sm overflow-x-auto">{routesIndexContent}</pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    src/routes/auth.routes.js
                  </h3>
                  <div className="bg-muted p-4 rounded-md relative">
                    <Button 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(authRoutesContent, "auth.routes.js içeriği kopyalandı!")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Kopyala
                    </Button>
                    <pre className="text-xs md:text-sm overflow-x-auto">{authRoutesContent}</pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    src/routes/therapist.routes.js
                  </h3>
                  <div className="bg-muted p-4 rounded-md relative">
                    <Button 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(therapistRoutesContent, "therapist.routes.js içeriği kopyalandı!")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Kopyala
                    </Button>
                    <pre className="text-xs md:text-sm overflow-x-auto">{therapistRoutesContent}</pre>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="controllers" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    src/controllers/auth.controller.js
                  </h3>
                  <div className="bg-muted p-4 rounded-md relative">
                    <Button 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(authControllerContent, "auth.controller.js içeriği kopyalandı!")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Kopyala
                    </Button>
                    <pre className="text-xs md:text-sm overflow-x-auto">{authControllerContent}</pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    src/controllers/therapist.controller.js
                  </h3>
                  <div className="bg-muted p-4 rounded-md relative">
                    <Button 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(therapistControllerContent, "therapist.controller.js içeriği kopyalandı!")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Kopyala
                    </Button>
                    <pre className="text-xs md:text-sm overflow-x-auto">{therapistControllerContent}</pre>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

const packageJsonContent = `{
  "name": "psikoloji-uzman-dizini-backend",
  "version": "1.0.0",
  "description": "Psikoloji Uzman Dizini Backend API",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "build": "echo 'No build step required for Node.js'"
  },
  "dependencies": {
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "jsonwebtoken": "^9.0.0",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.9.1",
    "pg": "^8.10.0",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.31.0",
    "slugify": "^1.6.6",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}`;

const indexJsContent = `require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const routes = require('./routes');

// Veritabanı bağlantısı
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Express uygulaması
const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Statik dosyalar için klasör
app.use('/uploads', express.static('uploads'));

// API rotaları
app.use('/api', routes);

// Hata yakalama middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Sunucu hatası',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Sunucuyu başlat
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Veritabanı bağlantısı başarılı.');
    console.log(\`Sunucu http://localhost:\${PORT} adresinde çalışıyor\`);
  } catch (error) {
    console.error('Veritabanı bağlantısı başarısız:', error);
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM sinyali alındı, sunucu kapatılıyor...');
  sequelize.close().then(() => {
    console.log('Veritabanı bağlantısı kapatıldı.');
    process.exit(0);
  });
});`;

const routesIndexContent = `const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routes');
const therapistRoutes = require('./therapist.routes');
const appointmentRoutes = require('./appointment.routes');
const adminRoutes = require('./admin.routes');

// Ana rotalar
router.use('/auth', authRoutes);
router.use('/therapists', therapistRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/admin', adminRoutes);

// Temel API bilgisi
router.get('/', (req, res) => {
  res.json({
    message: 'Psikoloji Uzman Dizini API',
    version: '1.0.0',
    endpoints: [
      '/api/auth',
      '/api/therapists',
      '/api/appointments',
      '/api/admin'
    ]
  });
});

module.exports = router;`;

const authRoutesContent = `const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Kullanıcı kaydı
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Geçerli bir e-posta adresi giriniz'),
    body('password').isLength({ min: 6 }).withMessage('Şifre en az 6 karakter olmalıdır'),
    body('role').isIn(['therapist', 'user']).withMessage('Geçersiz kullanıcı rolü')
  ],
  authController.register
);

// Kullanıcı girişi
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Geçerli bir e-posta adresi giriniz'),
    body('password').isLength({ min: 6 }).withMessage('Şifre en az 6 karakter olmalıdır')
  ],
  authController.login
);

// Kullanıcı bilgilerini getir
router.get('/me', authMiddleware.verifyToken, authController.getProfile);

// Şifre sıfırlama isteği
router.post(
  '/forgot-password',
  [
    body('email').isEmail().withMessage('Geçerli bir e-posta adresi giriniz')
  ],
  authController.forgotPassword
);

// Şifre sıfırlama
router.post(
  '/reset-password',
  [
    body('token').isString().withMessage('Geçersiz token'),
    body('password').isLength({ min: 6 }).withMessage('Şifre en az 6 karakter olmalıdır')
  ],
  authController.resetPassword
);

module.exports = router;`;

const therapistRoutesContent = `const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const therapistController = require('../controllers/therapist.controller');
const authMiddleware = require('../middleware/auth.middleware');
const uploadMiddleware = require('../middleware/upload.middleware');

// Tüm uzmanları listele
router.get('/', therapistController.getAllTherapists);

// Şehire göre uzmanları filtrele
router.get('/city/:citySlug', therapistController.getTherapistsByCity);

// Uzmanlık alanına göre uzmanları filtrele
router.get('/specialty/:specialtySlug', therapistController.getTherapistsBySpecialty);

// Uzman detaylarını getir
router.get('/:slug', therapistController.getTherapistBySlug);

// Uzman profili oluştur (kimlik doğrulama gerekli)
router.post(
  '/',
  authMiddleware.verifyToken,
  authMiddleware.isTherapist,
  uploadMiddleware.single('profileImage'),
  [
    body('name').isString().notEmpty().withMessage('İsim gereklidir'),
    body('title').isString().optional(),
    body('phone').isString().notEmpty().withMessage('Telefon numarası gereklidir'),
    body('cityId').isUUID().withMessage('Geçerli bir şehir ID\'si gereklidir'),
    body('about').isString().notEmpty().withMessage('Hakkında bilgisi gereklidir'),
    body('approach').isString().notEmpty().withMessage('Yaklaşım bilgisi gereklidir'),
    body('specialties').isArray().withMessage('Uzmanlık alanları bir dizi olmalıdır')
  ],
  therapistController.createTherapist
);

// Uzman profilini güncelle (kimlik doğrulama gerekli)
router.put(
  '/:id',
  authMiddleware.verifyToken,
  authMiddleware.isTherapistOwner,
  uploadMiddleware.single('profileImage'),
  therapistController.updateTherapist
);

// Uzman eğitim bilgisi ekle
router.post(
  '/:id/education',
  authMiddleware.verifyToken,
  authMiddleware.isTherapistOwner,
  [
    body('description').isString().notEmpty().withMessage('Eğitim bilgisi gereklidir')
  ],
  therapistController.addEducation
);

// Uzman eğitim bilgisi güncelle
router.put(
  '/:id/education/:educationId',
  authMiddleware.verifyToken,
  authMiddleware.isTherapistOwner,
  therapistController.updateEducation
);

// Uzman eğitim bilgisi sil
router.delete(
  '/:id/education/:educationId',
  authMiddleware.verifyToken,
  authMiddleware.isTherapistOwner,
  therapistController.deleteEducation
);

// Tüm şehirleri listele
router.get('/cities/all', therapistController.getAllCities);

// Tüm uzmanlık alanlarını listele
router.get('/specialties/all', therapistController.getAllSpecialties);

module.exports = router;`;

const authControllerContent = `const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { User, Therapist } = require('../models');
const emailService = require('../utils/email.service');
const { v4: uuidv4 } = require('uuid');

// Kullanıcı kaydı
exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password, role } = req.body;

    // E-posta adresi kontrolü
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Bu e-posta adresi zaten kullanılıyor'
      });
    }

    // Şifre hashleme
    const hashedPassword = await bcrypt.hash(password, 10);

    // Kullanıcı oluşturma
    const user = await User.create({
      email,
      password: hashedPassword,
      role
    });

    // JWT token oluşturma
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Hoş geldiniz e-postası gönderme
    await emailService.sendWelcomeEmail(email, role);

    res.status(201).json({
      success: true,
      message: 'Kullanıcı başarıyla oluşturuldu',
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Kayıt hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Kayıt işlemi sırasında bir hata oluştu'
    });
  }
};

// Kullanıcı girişi
exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;

    // Kullanıcı kontrolü
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Geçersiz e-posta veya şifre'
      });
    }

    // Şifre kontrolü
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Geçersiz e-posta veya şifre'
      });
    }

    // Uzman hesabı kontrolü
    if (user.role === 'therapist') {
      const therapist = await Therapist.findOne({ where: { userId: user.id } });
      
      // Uzman hesabı onaylanmamışsa
      if (therapist && therapist.status !== 'active') {
        return res.status(403).json({
          success: false,
          message: 'Hesabınız henüz onaylanmamış. Lütfen admin onayını bekleyin.'
        });
      }
    }

    // JWT token oluşturma
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      success: true,
      message: 'Giriş başarılı',
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Giriş hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Giriş işlemi sırasında bir hata oluştu'
    });
  }
};

// Kullanıcı profili
exports.getProfile = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Kullanıcı bulunamadı'
      });
    }

    // Uzman bilgilerini getir
    let therapistData = null;
    if (user.role === 'therapist') {
      therapistData = await Therapist.findOne({
        where: { userId },
        include: [
          { model: City, as: 'city' },
          { model: Specialty, as: 'specialties' },
          { model: Education, as: 'education' }
        ]
      });
    }

    res.status(200).json({
      success: true,
      user: {
        ...user.toJSON(),
        therapist: therapistData
      }
    });
  } catch (error) {
    console.error('Profil getirme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Profil bilgileri getirilirken bir hata oluştu'
    });
  }
};

// Şifre sıfırlama isteği
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Bu e-posta adresiyle kayıtlı bir kullanıcı bulunamadı'
      });
    }

    // Şifre sıfırlama token'ı oluştur
    const resetToken = uuidv4();
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 saat geçerli

    // Token'ı kullanıcıya kaydet
    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;
    await user.save();

    // Şifre sıfırlama e-postası gönder
    await emailService.sendPasswordResetEmail(email, resetToken);

    res.status(200).json({
      success: true,
      message: 'Şifre sıfırlama bağlantısı e-posta adresinize gönderildi'
    });
  } catch (error) {
    console.error('Şifre sıfırlama hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Şifre sıfırlama işlemi sırasında bir hata oluştu'
    });
  }
};

// Şifre sıfırlama
exports.resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    const user = await User.findOne({
      where: {
        resetToken: token,
        resetTokenExpiry: { [Op.gt]: new Date() }
      }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Geçersiz veya süresi dolmuş token'
      });
    }

    // Yeni şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Kullanıcı şifresini güncelle ve token'ı temizle
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Şifreniz başarıyla güncellendi'
    });
  } catch (error) {
    console.error('Şifre sıfırlama hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Şifre sıfırlama işlemi sırasında bir hata oluştu'
    });
  }
};`;

const therapistControllerContent = `const { validationResult } = require('express-validator');
const { Therapist, User, City, Specialty, Education, TherapistSpecialty } = require('../models');
const slugify = require('slugify');
const { Op } = require('sequelize');
const emailService = require('../utils/email.service');

// Tüm uzmanları listele
exports.getAllTherapists = async (req, res) => {
  try {
    const { cityId, specialtyId, page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    
    // Filtreleme koşulları
    const whereConditions = {
      status: 'active'
    };
    
    if (cityId) {
      whereConditions.cityId = cityId;
    }
    
    // Uzmanlık alanı filtresi için ilişkili sorgu
    let specialtyFilter = {};
    if (specialtyId) {
      specialtyFilter = {
        id: specialtyId
      };
    }
    
    const { count, rows: therapists } = await Therapist.findAndCountAll({
      where: whereConditions,
      include: [
        {
          model: City,
          as: 'city'
        },
        {
          model: Specialty,
          as: 'specialties',
          where: specialtyFilter,
          required: specialtyId ? true : false
        }
      ],
      offset,
      limit: parseInt(limit),
      distinct: true,
      order: [['createdAt', 'DESC']]
    });
    
    res.status(200).json({
      success: true,
      count,
      pages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      therapists
    });
  } catch (error) {
    console.error('Uzmanları listeleme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Uzmanlar listelenirken bir hata oluştu'
    });
  }
};

// Şehire göre uzmanları filtrele
exports.getTherapistsByCity = async (req, res) => {
  try {
    const { citySlug } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    
    // Şehri bul
    const city = await City.findOne({
      where: {
        slug: citySlug
      }
    });
    
    if (!city) {
      return res.status(404).json({
        success: false,
        message: 'Şehir bulunamadı'
      });
    }
    
    const { count, rows: therapists } = await Therapist.findAndCountAll({
      where: {
        cityId: city.id,
        status: 'active'
      },
      include: [
        {
          model: City,
          as: 'city'
        },
        {
          model: Specialty,
          as: 'specialties'
        }
      ],
      offset,
      limit: parseInt(limit),
      distinct: true,
      order: [['createdAt', 'DESC']]
    });
    
    res.status(200).json({
      success: true,
      city,
      count,
      pages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      therapists
    });
  } catch (error) {
    console.error('Şehire göre uzmanları listeleme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Uzmanlar listelenirken bir hata oluştu'
    });
  }
};

// Uzmanlık alanına göre uzmanları filtrele
exports.getTherapistsBySpecialty = async (req, res) => {
  try {
    const { specialtySlug } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    
    // Uzmanlık alanını bul
    const specialty = await Specialty.findOne({
      where: {
        slug: specialtySlug
      }
    });
    
    if (!specialty) {
      return res.status(404).json({
        success: false,
        message: 'Uzmanlık alanı bulunamadı'
      });
    }
    
    // Uzmanlık alanına sahip terapistleri bul
    const { count, rows: therapists } = await Therapist.findAndCountAll({
      include: [
        {
          model: City,
          as: 'city'
        },
        {
          model: Specialty,
          as: 'specialties',
          where: {
            id: specialty.id
          }
        }
      ],
      where: {
        status: 'active'
      },
      offset,
      limit: parseInt(limit),
      distinct: true,
      order: [['createdAt', 'DESC']]
    });
    
    res.status(200).json({
      success: true,
      specialty,
      count,
      pages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      therapists
    });
  } catch (error) {
    console.error('Uzmanlık alanına göre uzmanları listeleme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Uzmanlar listelenirken bir hata oluştu'
    });
  }
};

// Uzman detaylarını getir
exports.getTherapistBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    
    const therapist = await Therapist.findOne({
      where: {
        slug,
        status: 'active'
      },
      include: [
        {
          model: City,
          as: 'city'
        },
        {
          model: Specialty,
          as: 'specialties'
        },
        {
          model: Education,
          as: 'education'
        }
      ]
    });
    
    if (!therapist) {
      return res.status(404).json({
        success: false,
        message: 'Uzman bulunamadı'
      });
    }
    
    // Görüntülenme sayısını artır
    therapist.profileViews += 1;
    await therapist.save();
    
    res.status(200).json({
      success: true,
      therapist
    });
  } catch (error) {
    console.error('Uzman detayları getirme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Uzman detayları getirilirken bir hata oluştu'
    });
  }
};

// Uzman profili oluştur
exports.createTherapist = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    
    const userId = req.userId;
    const { name, title, phone, cityId, about, approach, specialties } = req.body;
    
    // Kullanıcının zaten bir uzman profili var mı kontrol et
    const existingTherapist = await Therapist.findOne({ where: { userId } });
    if (existingTherapist) {
      return res.status(400).json({
        success: false,
        message: 'Bu kullanıcı için zaten bir uzman profili mevcut'
      });
    }
    
    // Profil resmi kontrolü
    let profileImage = null;
    if (req.file) {
      profileImage = \`/uploads/\${req.file.filename}\`;
    }
    
    // Slug oluştur
    const baseSlug = slugify(\`\${title || ''} \${name}\`, {
      lower: true,
      strict: true,
      locale: 'tr'
    });
    
    // Slug benzersiz mi kontrol et
    let slug = baseSlug;
    let counter = 1;
    while (await Therapist.findOne({ where: { slug } })) {
      slug = \`\${baseSlug}-\${counter}\`;
      counter++;
    }
    
    // Uzman profili oluştur
    const therapist = await Therapist.create({
      userId,
      slug,
      title,
      name,
      phone,
      cityId,
      about,
      approach,
      profileImage,
      status: 'pending' // Admin onayı bekliyor
    });
    
    // Uzmanlık alanlarını ekle
    if (specialties && specialties.length > 0) {
      await Promise.all(
        specialties.map(specialtyId =>
          TherapistSpecialty.create({
            therapistId: therapist.id,
            specialtyId
          })
        )
      );
    }
    
    // Admin'e bildirim e-postası gönder
    await emailService.sendNewTherapistNotification(name, title);
    
    res.status(201).json({
      success: true,
      message: 'Uzman profili başarıyla oluşturuldu ve onay için gönderildi',
      therapist
    });
  } catch (error) {
    console.error('Uzman profili oluşturma hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Uzman profili oluşturulurken bir hata oluştu'
    });
  }
};

// Uzman profilini güncelle
exports.updateTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, title, phone, cityId, about, approach, specialties } = req.body;
    
    const therapist = await Therapist.findByPk(id);
    if (!therapist) {
      return res.status(404).json({
        success: false,
        message: 'Uzman bulunamadı'
      });
    }
    
    // Profil resmi kontrolü
    let profileImage = therapist.profileImage;
    if (req.file) {
      profileImage = \`/uploads/\${req.file.filename}\`;
    }
    
    // Uzman profilini güncelle
    await therapist.update({
      title,
      name,
      phone,
      cityId,
      about,
      approach,
      profileImage
    });
    
    // Uzmanlık alanlarını güncelle
    if (specialties && specialties.length > 0) {
      // Mevcut uzmanlık alanlarını temizle
      await TherapistSpecialty.destroy({
        where: { therapistId: id }
      });
      
      // Yeni uzmanlık alanlarını ekle
      await Promise.all(
        specialties.map(specialtyId =>
          TherapistSpecialty.create({
            therapistId: id,
            specialtyId
          })
        )
      );
    }
    
    // Güncellenmiş uzman bilgilerini getir
    const updatedTherapist = await Therapist.findByPk(id, {
      include: [
        {
          model: City,
          as: 'city'
        },
        {
          model: Specialty,
          as: 'specialties'
        },
        {
          model: Education,
          as: 'education'
        }
      ]
    });
    
    res.status(200).json({
      success: true,
      message: 'Uzman profili başarıyla güncellendi',
      therapist: updatedTherapist
    });
  } catch (error) {
    console.error('Uzman profili güncelleme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Uzman profili güncellenirken bir hata oluştu'
    });
  }
};

// Uzman eğitim bilgisi ekle
exports.addEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    
    const therapist = await Therapist.findByPk(id);
    if (!therapist) {
      return res.status(404).json({
        success: false,
        message: 'Uzman bulunamadı'
      });
    }
    
    const education = await Education.create({
      therapistId: id,
      description
    });
    
    res.status(201).json({
      success: true,
      message: 'Eğitim bilgisi başarıyla eklendi',
      education
    });
  } catch (error) {
    console.error('Eğitim bilgisi ekleme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Eğitim bilgisi eklenirken bir hata oluştu'
    });
  }
};

// Uzman eğitim bilgisi güncelle
exports.updateEducation = async (req, res) => {
  try {
    const { id, educationId } = req.params;
    const { description } = req.body;
    
    const education = await Education.findOne({
      where: {
        id: educationId,
        therapistId: id
      }
    });
    
    if (!education) {
      return res.status(404).json({
        success: false,
        message: 'Eğitim bilgisi bulunamadı'
      });
    }
    
    await education.update({ description });
    
    res.status(200).json({
      success: true,
      message: 'Eğitim bilgisi başarıyla güncellendi',
      education
    });
  } catch (error) {
    console.error('Eğitim bilgisi güncelleme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Eğitim bilgisi güncellenirken bir hata oluştu'
    });
  }
};

// Uzman eğitim bilgisi sil
exports.deleteEducation = async (req, res) => {
  try {
    const { id, educationId } = req.params;
    
    const education = await Education.findOne({
      where: {
        id: educationId,
        therapistId: id
      }
    });
    
    if (!education) {
      return res.status(404).json({
        success: false,
        message: 'Eğitim bilgisi bulunamadı'
      });
    }
    
    await education.destroy();
    
    res.status(200).json({
      success: true,
      message: 'Eğitim bilgisi başarıyla silindi'
    });
  } catch (error) {
    console.error('Eğitim bilgisi silme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Eğitim bilgisi silinirken bir hata oluştu'
    });
  }
};

// Tüm şehirleri listele
exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.findAll({
      order: [['name', 'ASC']]
    });
    
    res.status(200).json({
      success: true,
      cities
    });
  } catch (error) {
    console.error('Şehirleri listeleme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Şehirler listelenirken bir hata oluştu'
    });
  }
};

// Tüm uzmanlık alanlarını listele
exports.getAllSpecialties = async (req, res) => {
  try {
    const specialties = await Specialty.findAll({
      order: [['name', 'ASC']]
    });
    
    res.status(200).json({
      success: true,
      specialties
    });
  } catch (error) {
    console.error('Uzmanlık alanlarını listeleme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Uzmanlık alanları listelenirken bir hata oluştu'
    });
  }
};`;