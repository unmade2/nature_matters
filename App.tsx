import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X,
  MapPin,
  Facebook,
  Phone,
  Mail,
  Instagram,
  Download
} from 'lucide-react';
import logo from './assets/nature-matters-logo.PNG';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ChatWidget from './components/ChatWidget';
import { SOCIAL_LINKS, COMPANY_INFO, DOWNLOAD_LINK, getContent } from './constants';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();
  const content = getContent(language).ui;

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
  <>
      <nav className="absolute top-0 left-0 w-full z-20 bg-white/95 text-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Representation */}
          <Link to="/" className="flex items-center gap-3 select-none hover:opacity-80 transition">
             <img 
               src={logo} 
               alt="Nature Matters logo" 
               className="h-10 w-auto object-contain"
             />
          </Link>
          
          <div className="hidden md:flex space-x-6 text-sm uppercase font-medium tracking-wide font-sans">
            <Link 
              to="/" 
              className={`transition hover:text-brand-red ${location.pathname === '/' ? 'text-brand-red' : 'text-gray-800'}`}
            >
              {content.home}
            </Link>
            <Link 
              to="/about" 
              className={`transition hover:text-brand-red ${location.pathname === '/about' ? 'text-brand-red' : 'text-gray-800'}`}
            >
              {content.about}
            </Link>
            <Link 
              to="/contact" 
              className={`transition hover:text-brand-red ${location.pathname === '/contact' ? 'text-brand-red' : 'text-gray-800'}`}
            >
              {content.contact}
            </Link>
          </div>

          <button 
            className="md:hidden text-gray-800" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 absolute top-full w-full py-4 flex flex-col items-center space-y-4 text-gray-800 font-sans shadow-md">
            <Link 
              to="/" 
              className={`hover:text-brand-red ${location.pathname === '/' ? 'text-brand-red' : ''}`}
            >
              {content.home}
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-brand-red ${location.pathname === '/about' ? 'text-brand-red' : ''}`}
            >
              {content.about}
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-brand-red ${location.pathname === '/contact' ? 'text-brand-red' : ''}`}
            >
              {content.contact}
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const content = getContent(language).ui;

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand & Info */}
        <div className="space-y-6">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center select-none hover:opacity-95 transition w-fit"
          >
            <div className="bg-white rounded-xl px-4 py-3 shadow-md flex items-center">
              <img 
                src={logo} 
                alt="Nature Matters logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>
          <div className="text-sm leading-relaxed text-gray-400 space-y-1 font-sans">
            <p className="font-semibold text-white text-lg mb-2 font-serif">{COMPANY_INFO.name}</p>
            <p>{COMPANY_INFO.license}</p>
            <p>{COMPANY_INFO.registration}</p>
            <p className="pt-2 flex items-start gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5 text-brand-red" />
              {COMPANY_INFO.address}
            </p>
          </div>
          <div className="flex gap-3 pt-2">
             <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full hover:bg-[#1877F2] hover:text-white transition text-gray-400 hover:shadow-lg hover:-translate-y-1 transform duration-200"><Facebook size={18} /></a>
             <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full hover:bg-[#E1306C] hover:text-white transition text-gray-400 hover:shadow-lg hover:-translate-y-1 transform duration-200"><Instagram size={18} /></a>
             <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full hover:bg-[#25D366] hover:text-white transition text-gray-400 hover:shadow-lg hover:-translate-y-1 transform duration-200"><Phone size={18} /></a>
             <a href={`mailto:${SOCIAL_LINKS.email}`} className="bg-gray-800 p-2.5 rounded-full hover:bg-brand-blue hover:text-white transition text-gray-400 hover:shadow-lg hover:-translate-y-1 transform duration-200"><Mail size={18} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:pl-10">
          <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2 font-serif">
            <span className="w-8 h-0.5 bg-brand-red"></span> {content.explore}
          </h3>
          <ul className="space-y-4 text-sm font-medium font-sans">
            <li><Link to="/" className="flex items-center gap-3 hover:text-brand-lightBlue transition group"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-brand-lightBlue transition-colors"></span> {content.home}</Link></li>
            <li><Link to="/about" className="flex items-center gap-3 hover:text-brand-lightBlue transition group"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-brand-lightBlue transition-colors"></span> {content.about}</Link></li>
            <li><Link to="/contact" className="flex items-center gap-3 hover:text-brand-lightBlue transition group"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-brand-lightBlue transition-colors"></span> {content.contact}</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2 font-serif">
            <span className="w-8 h-0.5 bg-brand-red"></span> {content.resources}
          </h3>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed font-sans">
            {language === 'en' 
              ? "Planning your trip? Download our detailed itinerary PDF to get all the daily schedules, accommodations, and packing lists offline."
              : "正在计划您的旅行？下载我们的详细行程单PDF，离线获取所有每日日程、住宿和打包清单。"}
          </p>
          <a 
            href={DOWNLOAD_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-900/30 hover:-translate-y-0.5 duration-200 w-full md:w-auto justify-center font-sans"
          >
            <Download size={20} /> {content.downloadItineraryBtn}
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 font-sans">
        <p>© {new Date().getFullYear()} Nature Matters Travel and Tours Sdn Bhd. {content.rights}</p>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const MainApp: React.FC = () => {
  return (
      <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <ChatWidget />
      </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <MainApp />
      </Router>
    </LanguageProvider>
  );
}

export default App;
