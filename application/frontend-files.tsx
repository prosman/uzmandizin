import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function FrontendFiles() {
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
          <CardTitle className="text-xl">Frontend Dosyaları</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Aşağıda, frontend uygulaması için gerekli temel dosyaların içerikleri bulunmaktadır. 
            Bu dosyaları frontend klasörünüzde oluşturmanız gerekiyor.
          </p>
          
          <Tabs defaultValue="package">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="package">package.json</TabsTrigger>
              <TabsTrigger value="app">App.js</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="pages">Pages</TabsTrigger>
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
            
            <TabsContent value="app" className="mt-4">
              <div className="bg-muted p-4 rounded-md relative">
                <Button 
                  size="sm" 
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(appJsContent, "App.js içeriği kopyalandı!")}
                >
                  <Copy className="h-4 w-4 mr-1" /> Kopyala
                </Button>
                <pre className="text-xs md:text-sm overflow-x-auto">{appJsContent}</pre>
              </div>
            </TabsContent>
            
            <TabsContent value="components" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    src/components/Header.js
                  </h3>
                  <div className="bg-muted p-4 rounded-md relative">
                    <Button 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(headerComponentContent, "Header.js içeriği kopyalandı!")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Kopyala
                    </Button>
                    <pre className="text-xs md:text-sm overflow-x-auto">{headerComponentContent}</pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    src/components/TherapistCard.js
                  </h3>
                  <div className="bg-muted p-4 rounded-md relative">
                    <Button 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(therapistCardContent, "TherapistCard.js içeriği kopyalandı!")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Kopyala
                    </Button>
                    <pre className="text-xs md:text-sm overflow-x-auto">{therapistCardContent}</pre>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pages" className="mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    src/pages/Home.js
                  </h3>
                  <div className="bg-muted p-4 rounded-md relative">
                    <Button 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(homePageContent, "Home.js içeriği kopyalandı!")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Kopyala
                    </Button>
                    <pre className="text-xs md:text-sm overflow-x-auto">{homePageContent}</pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    src/pages/TherapistProfile.js
                  </h3>
                  <div className="bg-muted p-4 rounded-md relative">
                    <Button 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(therapistProfileContent, "TherapistProfile.js içeriği kopyalandı!")}
                    >
                      <Copy className="h-4 w-4 mr-1" /> Kopyala
                    </Button>
                    <pre className="text-xs md:text-sm overflow-x-auto">{therapistProfileContent}</pre>
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
  "name": "psikoloji-uzman-dizini-frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.3.6",
    "date-fns": "^2.29.3",
    "formik": "^2.2.9",
    "react": "^18.2.0",
    "react-datepicker": "^4.11.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0",
    "react-query": "^3.39.3",
    "react-router-dom": "^6.10.0",
    "react-scripts": "5.0.1",
    "react-select": "^5.7.2",
    "react-toastify": "^9.1.2",
    "web-vitals": "^2.1.4",
    "yup": "^1.1.1",
    "zustand": "^4.3.7"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.23",
    "tailwindcss": "^3.3.1"
  }
}`;

const appJsContent = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Home from './pages/Home';
import TherapistProfile from './pages/TherapistProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import TherapistRegister from './pages/TherapistRegister';
import AdminDashboard from './pages/admin/AdminDashboard';
import TherapistDashboard from './pages/therapist/TherapistDashboard';
import NotFound from './pages/NotFound';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/uzman/:slug" element={<TherapistProfile />} />
              <Route path="/sehir/:citySlug" element={<Home />} />
              <Route path="/uzmanlik/:specialtySlug" element={<Home />} />
              <Route path="/giris" element={<Login />} />
              <Route path="/kayit" element={<Register />} />
              <Route path="/uzman-kayit" element={<TherapistRegister />} />
              
              {/* Admin Routes */}
              <Route 
                path="/admin/*" 
                element={
                  <PrivateRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </PrivateRoute>
                } 
              />
              
              {/* Therapist Routes */}
              <Route 
                path="/uzman-panel/*" 
                element={
                  <PrivateRoute allowedRoles={['therapist']}>
                    <TherapistDashboard />
                  </PrivateRoute>
                } 
              />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ToastContainer position="bottom-right" />
      </Router>
    </QueryClientProvider>
  );
}

export default App;`;

const headerComponentContent = `import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FaUser, FaSignOutAlt, FaUserMd, FaUserShield } from 'react-icons/fa';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Psikoloji Uzman Dizini
          </Link>
          
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-200">
                  Ana Sayfa
                </Link>
              </li>
              
              {!user ? (
                <>
                  <li>
                    <Link to="/giris" className="hover:text-gray-200">
                      Giriş Yap
                    </Link>
                  </li>
                  <li>
                    <Link to="/uzman-kayit" className="hover:text-gray-200">
                      Uzman Kaydı
                    </Link>
                  </li>
                </>
              ) : (
                <li className="relative group">
                  <button className="flex items-center hover:text-gray-200">
                    <FaUser className="mr-1" />
                    {user.email}
                  </button>
                  
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    {user.role === 'admin' && (
                      <Link 
                        to="/admin" 
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                      >
                        <FaUserShield className="mr-2" />
                        Admin Paneli
                      </Link>
                    )}
                    
                    {user.role === 'therapist' && (
                      <Link 
                        to="/uzman-panel" 
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                      >
                        <FaUserMd className="mr-2" />
                        Uzman Paneli
                      </Link>
                    )}
                    
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
                    >
                      <FaSignOutAlt className="mr-2" />
                      Çıkış Yap
                    </button>
                  </div>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;`;

const therapistCardContent = `import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const TherapistCard = ({ therapist }) => {
  const { id, name, title, slug, city, specialties, profileImage } = therapist;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={profileImage || '/images/default-profile.jpg'} 
            alt={name}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        
        <div className="p-4 md:w-2/3">
          <Link 
            to={\`/uzman/\${slug}\`}
            className="text-xl font-semibold text-primary hover:text-primary-dark transition"
          >
            {title && <span>{title} </span>}
            {name}
          </Link>
          
          <div className="mt-2 flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-1" />
            <Link 
              to={\`/sehir/\${city.slug}\`}
              className="hover:text-primary transition"
            >
              {city.name}
            </Link>
          </div>
          
          <div className="mt-3">
            <h4 className="text-sm font-medium text-gray-700">Uzmanlık Alanları:</h4>
            <div className="mt-1 flex flex-wrap gap-1">
              {specialties.map(specialty => (
                <Link
                  key={specialty.id}
                  to={\`/uzmanlik/\${specialty.slug}\`}
                  className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded hover:bg-primary hover:text-white transition"
                >
                  {specialty.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <Link
              to={\`/uzman/\${slug}\`}
              className="text-primary hover:text-primary-dark transition flex items-center"
            >
              <FaEnvelope className="mr-1" />
              İletişim
            </Link>
            
            <Link
              to={\`/uzman/\${slug}?tab=appointment\`}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            >
              Randevu Al
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard;`;

const homePageContent = `import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import { FaFilter, FaTimes } from 'react-icons/fa';

import TherapistCard from '../components/TherapistCard';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

const Home = () => {
  const { citySlug, specialtySlug } = useParams();
  const navigate = useNavigate();
  
  const [page, setPage] = useState(1);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  
  // Fetch cities
  const { data: citiesData } = useQuery('cities', async () => {
    const response = await axios.get(\`\${process.env.REACT_APP_API_URL}/api/therapists/cities/all\`);
    return response.data.cities;
  });
  
  // Fetch specialties
  const { data: specialtiesData } = useQuery('specialties', async () => {
    const response = await axios.get(\`\${process.env.REACT_APP_API_URL}/api/therapists/specialties/all\`);
    return response.data.specialties;
  });
  
  // Fetch therapists based on filters
  const fetchTherapists = async () => {
    let url = \`\${process.env.REACT_APP_API_URL}/api/therapists?page=\${page}\`;
    
    if (citySlug) {
      url = \`\${process.env.REACT_APP_API_URL}/api/therapists/city/\${citySlug}?page=\${page}\`;
    } else if (specialtySlug) {
      url = \`\${process.env.REACT_APP_API_URL}/api/therapists/specialty/\${specialtySlug}?page=\${page}\`;
    } else {
      if (selectedCity) {
        url += \`&cityId=\${selectedCity.value}\`;
      }
      
      if (selectedSpecialty) {
        url += \`&specialtyId=\${selectedSpecialty.value}\`;
      }
    }
    
    const response = await axios.get(url);
    return response.data;
  };
  
  const { data: therapistsData, isLoading, refetch } = useQuery(
    ['therapists', page, citySlug, specialtySlug, selectedCity, selectedSpecialty],
    fetchTherapists
  );
  
  // Update selected filters when URL params change
  useEffect(() => {
    if (citySlug && citiesData) {
      const city = citiesData.find(city => city.slug === citySlug);
      if (city) {
        setSelectedCity({ value: city.id, label: city.name });
        setSelectedSpecialty(null);
      }
    } else if (specialtySlug && specialtiesData) {
      const specialty = specialtiesData.find(specialty => specialty.slug === specialtySlug);
      if (specialty) {
        setSelectedSpecialty({ value: specialty.id, label: specialty.name });
        setSelectedCity(null);
      }
    } else {
      setSelectedCity(null);
      setSelectedSpecialty(null);
    }
    
    setPage(1);
  }, [citySlug, specialtySlug, citiesData, specialtiesData]);
  
  // Handle filter changes
  const handleCityChange = (option) => {
    if (option) {
      const city = citiesData.find(city => city.id === option.value);
      navigate(\`/sehir/\${city.slug}\`);
    } else {
      navigate('/');
    }
  };
  
  const handleSpecialtyChange = (option) => {
    if (option) {
      const specialty = specialtiesData.find(specialty => specialty.id === option.value);
      navigate(\`/uzmanlik/\${specialty.slug}\`);
    } else {
      navigate('/');
    }
  };
  
  const clearFilters = () => {
    navigate('/');
  };
  
  // Format options for select components
  const cityOptions = citiesData?.map(city => ({
    value: city.id,
    label: city.name
  })) || [];
  
  const specialtyOptions = specialtiesData?.map(specialty => ({
    value: specialty.id,
    label: specialty.name
  })) || [];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FaFilter className="mr-2" />
          Uzman Filtrele
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şehir
            </label>
            <Select
              value={selectedCity}
              onChange={handleCityChange}
              options={cityOptions}
              isClearable
              placeholder="Şehir seçin..."
              className="text-sm"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Uzmanlık Alanı
            </label>
            <Select
              value={selectedSpecialty}
              onChange={handleSpecialtyChange}
              options={specialtyOptions}
              isClearable
              placeholder="Uzmanlık alanı seçin..."
              className="text-sm"
            />
          </div>
        </div>
        
        {(selectedCity || selectedSpecialty) && (
          <div className="mt-4 flex items-center">
            <span className="text-sm text-gray-600 mr-2">Aktif Filtreler:</span>
            
            {selectedCity && (
              <span className="bg-primary text-white text-xs px-2 py-1 rounded flex items-center mr-2">
                {selectedCity.label}
                <button 
                  onClick={() => navigate('/')}
                  className="ml-1"
                >
                  <FaTimes />
                </button>
              </span>
            )}
            
            {selectedSpecialty && (
              <span className="bg-primary text-white text-xs px-2 py-1 rounded flex items-center mr-2">
                {selectedSpecialty.label}
                <button 
                  onClick={() => navigate('/')}
                  className="ml-1"
                >
                  <FaTimes />
                </button>
              </span>
            )}
            
            <button 
              onClick={clearFilters}
              className="text-sm text-gray-600 hover:text-primary"
            >
              Tümünü Temizle
            </button>
          </div>
        )}
      </div>
      
      <div className="mb-4">
        <h1 className="text-2xl font-bold">
          {citySlug && selectedCity 
            ? \`\${selectedCity.label} Şehrindeki Uzmanlar\`
            : specialtySlug && selectedSpecialty
              ? \`\${selectedSpecialty.label} Alanında Uzmanlar\`
              : 'Tüm Uzmanlar'}
        </h1>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center py-8">
          <Spinner />
        </div>
      ) : therapistsData?.therapists?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 mb-8">
            {therapistsData.therapists.map(therapist => (
              <TherapistCard key={therapist.id} therapist={therapist} />
            ))}
          </div>
          
          <Pagination
            currentPage={page}
            totalPages={therapistsData.pages}
            onPageChange={setPage}
          />
        </>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
          <p className="text-yellow-800">
            Aradığınız kriterlere uygun uzman bulunamadı. Lütfen farklı filtreler deneyin.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;`;

const therapistProfileContent = `import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaGraduationCap,
  FaShare,
  FaClipboard,
  FaCheck
} from 'react-icons/fa';

import Spinner from '../components/Spinner';
import AppointmentForm from '../components/AppointmentForm';
import { Tabs, TabList, Tab, TabPanel } from '../components/Tabs';

const TherapistProfile = () => {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('about');
  const [copied, setCopied] = useState(false);
  
  // Get the tab from URL query params
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);
  
  // Fetch therapist data
  const { data, isLoading } = useQuery(['therapist', slug], async () => {
    const response = await axios.get(\`\${process.env.REACT_APP_API_URL}/api/therapists/\${slug}\`);
    return response.data.therapist;
  });
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };
  
  // Handle share button click
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success('Profil linki kopyalandı!');
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <Spinner />
      </div>
    );
  }
  
  if (!data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 p-4 rounded-md">
          <p className="text-red-800">
            Uzman bulunamadı. Lütfen geçerli bir uzman profili ziyaret edin.
          </p>
          <Link to="/" className="text-primary hover:underline mt-2 inline-block">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }
  
  const { 
    name, 
    title, 
    city, 
    phone, 
    about, 
    approach, 
    profileImage, 
    specialties, 
    education 
  } = data;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 lg:w-1/4">
            <img 
              src={profileImage || '/images/default-profile.jpg'} 
              alt={name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:w-2/3 lg:w-3/4">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-gray-800">
                {title && <span>{title} </span>}
                {name}
              </h1>
              
              <button 
                onClick={handleShare}
                className="flex items-center text-gray-600 hover:text-primary"
              >
                {copied ? <FaCheck className="mr-1" /> : <FaShare className="mr-1" />}
                {copied ? 'Kopyalandı!' : 'Profili Paylaş'}
              </button>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {specialties.map(specialty => (
                <Link
                  key={specialty.id}
                  to={\`/uzmanlik/\${specialty.slug}\`}
                  className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full hover:bg-primary hover:text-white transition"
                >
                  {specialty.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-primary" />
                <Link 
                  to={\`/sehir/\${city.slug}\`}
                  className="hover:text-primary transition"
                >
                  {city.name}
                </Link>
              </div>
              
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-2 text-primary" />
                <a href={\`tel:\${phone}\`}>{phone}</a>
              </div>
            </div>
            
            <div className="mt-6 flex gap-2">
              <button
                onClick={() => handleTabChange('appointment')}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition flex items-center"
              >
                <FaCalendarAlt className="mr-2" />
                Randevu Al
              </button>
              
              <button
                onClick={handleShare}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition flex items-center"
              >
                <FaClipboard className="mr-2" />
                Profil Linkini Kopyala
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Tabs activeTab={activeTab} onChange={handleTabChange}>
        <TabList>
          <Tab id="about">Hakkında</Tab>
          <Tab id="approach">Yaklaşım</Tab>
          <Tab id="education">Eğitim</Tab>
          <Tab id="appointment">Randevu Al</Tab>
        </TabList>
        
        <TabPanel id="about">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Hakkında</h2>
            <div className="prose max-w-none">
              {about.split('\\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </TabPanel>
        
        <TabPanel id="approach">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Terapi Yaklaşımı</h2>
            <div className="prose max-w-none">
              {approach.split('\\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </TabPanel>
        
        <TabPanel id="education">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaGraduationCap className="mr-2" />
              Eğitim Bilgileri
            </h2>
            
            {education && education.length > 0 ? (
              <ul className="space-y-4">
                {education.map(item => (
                  <li key={item.id} className="border-l-4 border-primary pl-4 py-1">
                    <div className="prose">
                      {item.description.split('\\n').map((paragraph, index) => (
                        <p key={index} className="mb-2">{paragraph}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">Henüz eğitim bilgisi eklenmemiş.</p>
            )}
          </div>
        </TabPanel>
        
        <TabPanel id="appointment">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaCalendarAlt className="mr-2" />
              Randevu Talebi Oluştur
            </h2>
            
            <AppointmentForm therapistId={data.id} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TherapistProfile;`;