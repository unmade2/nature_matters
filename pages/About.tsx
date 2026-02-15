import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  Leaf, 
  Heart, 
  Users, 
  CheckSquare, 
  Target, 
  Award,
  Trophy,
  Newspaper,
  Globe,
  Facebook,
  Phone,
  Mail,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SOCIAL_LINKS, getContent, GALLERY_IMAGES } from '../constants';
import exploringImage from '../assets/exploring.jpeg';
import { useLanguage } from '../contexts/LanguageContext';
import ImageGallery from '../components/ImageGallery';

/** Simple auto-advance image slideshow, no controls */
const AchievementSlideshow: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div className="relative w-full aspect-[16/10] bg-gray-200 overflow-hidden">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: i === index ? 1 : 0 }}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  );
};

const About: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const content = getContent(language).about;
  const uiContent = getContent(language).ui;
  const headers = getContent(language).headers;

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <header className="relative min-h-[50vh] md:h-[50vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1596489390237-77dc2f4a569a?q=80&w=2000&auto=format&fit=crop" 
          alt="Karakoram Mountains" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center pt-32 md:pt-0">
          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-full border border-white transition flex items-center gap-2 text-sm font-semibold tracking-wide ${language === 'en' ? 'bg-white text-gray-900' : 'bg-transparent text-white hover:bg-white/10'}`}
            >
              <Globe size={16} /> English
            </button>
            <button 
              onClick={() => setLanguage('zh')}
              className={`px-4 py-2 rounded-full border border-white transition flex items-center gap-2 text-sm font-semibold tracking-wide ${language === 'zh' ? 'bg-white text-gray-900' : 'bg-transparent text-white hover:bg-white/10'}`}
            >
              <Globe size={16} /> 中文
            </button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4 drop-shadow-lg">{content.heroTitle}</h1>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-4"></div>
          <p className="text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto font-sans text-white/95">
            {content.heroSubtitle}
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
<p className="text-xl md:text-2xl text-gray-700 font-serif italic max-w-4xl mx-auto leading-relaxed">
              {content.quote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
             <div>
                <h3 className="text-heading-card font-bold text-brand-blue mb-4 font-serif">{content.storyTitle}</h3>
                <p className="text-body-sm text-gray-600 mb-4 leading-relaxed font-sans">{content.storyText1}</p>
                <p className="text-body-sm text-gray-600 leading-relaxed font-sans">{content.storyText2}</p>
             </div>
             <div className="relative h-80 rounded-xl overflow-hidden shadow-xl group">
                <img 
                  src={exploringImage}
                  alt="Exploring together since 2018" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                   <p className="text-base font-bold font-serif whitespace-pre-line">{content.imageCaption}</p>
                </div>
             </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
             {/* Who We Are */}
             <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mb-6">
                   <MapPin size={28} />
                </div>
                <h4 className="text-heading-card font-bold text-gray-900 mb-4 font-serif">{content.whoWeAreTitle}</h4>
                <p className="text-body-sm text-gray-600 mb-4 leading-relaxed font-sans">{content.whoWeAreText}</p>
                <ul className="space-y-3 text-body-sm text-gray-700 font-medium font-sans">
                   {content.locations.map((loc, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-white p-2 rounded border border-gray-200">
                        <span className="w-2 h-2 bg-brand-red rounded-full"></span> {loc}
                      </li>
                   ))}
                </ul>
             </div>

             {/* Trusted */}
             <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mb-6">
                   <ShieldCheck size={28} />
                </div>
                <h4 className="text-heading-card font-bold text-gray-900 mb-4 font-serif">{content.trustedTitle}</h4>
                <p className="text-body-sm text-gray-600 mb-6 leading-relaxed font-sans">{content.trustedText}</p>
                <div className="text-caption bg-white p-4 rounded-lg border border-gray-200 text-gray-600 font-mono shadow-sm font-sans">
                   <div className="font-bold text-gray-800 mb-1">{COMPANY_INFO.name}</div>
                   <div className="mb-1">{COMPANY_INFO.license}</div>
                   <div>{COMPANY_INFO.registration}</div>
                </div>
             </div>

             {/* Eco Friendly */}
             <div className="bg-green-50 p-8 rounded-xl border border-green-100 hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                   <Leaf size={28} />
                </div>
                <h4 className="text-heading-card font-bold text-gray-900 mb-4 font-serif">{content.ecoTitle}</h4>
                <p className="text-body-sm text-gray-600 mb-4 font-sans">{content.ecoText}</p>
                <ul className="space-y-3 text-body-sm text-gray-700 font-sans">
                   <li className="flex items-start gap-3">
                      <Heart size={18} className="text-green-600 shrink-0 mt-0.5" />
                      <span>{content.ecoList[0]}</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <Users size={18} className="text-green-600 shrink-0 mt-0.5" />
                      <span>{content.ecoList[1]}</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <Leaf size={18} className="text-green-600 shrink-0 mt-0.5" />
                      <span>{content.ecoList[2]}</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* Why Us & Vision Split */}
          <div className="bg-brand-blue rounded-2xl overflow-hidden text-white shadow-2xl mb-20">
             <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 md:p-14">
                   <h3 className="text-heading-card font-bold text-white mb-8 flex items-center gap-3 font-serif">
                     <Award className="text-yellow-400" /> {content.whyUsTitle}
                   </h3>
                   <ul className="space-y-6">
                      {content.whyUsList.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="bg-blue-700/50 p-1 rounded mt-0.5">
                            <CheckSquare className="text-yellow-400 shrink-0" size={16} />
                          </div>
                          <span className="text-blue-50 leading-snug font-light text-base font-sans">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-900 to-black p-10 md:p-14 flex flex-col justify-center relative overflow-hidden border-l border-blue-800">
                   <div className="relative z-10">
                     <div className="flex items-center gap-3 mb-6 text-yellow-400 font-bold uppercase tracking-[0.2em] text-body-sm font-sans">
                       <Target size={18} /> {content.visionTitle}
                     </div>
                     <blockquote className="text-xl md:text-2xl font-serif leading-relaxed text-white border-l-4 border-yellow-400 pl-6 py-2">
                       {content.visionText}
                     </blockquote>
                   </div>
                   {/* Decorative background element */}
                   <Leaf className="absolute -bottom-10 -right-10 w-80 h-80 text-white opacity-5 rotate-12" />
                </div>
             </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-900 mb-10 flex justify-center items-center gap-2 font-serif">
              <span className="w-8 h-px bg-gray-900 shrink-0"></span>
              {content.achievementsTitle}
              <span className="w-8 h-px bg-gray-900 shrink-0"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.achievements.map((achievement, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
                  <AchievementSlideshow images={achievement.images} alt={achievement.title} />
                  <div className="p-8">
                    <div className="w-14 h-14 bg-brand-lightBlue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                      {idx === 0 ? <Trophy size={28} strokeWidth={2} /> : <Newspaper size={28} strokeWidth={2} />}
                    </div>
                    <h4 className="text-heading-card font-bold text-gray-900 mb-4 font-serif">{achievement.title}</h4>
                    <p className="text-body-sm text-gray-600 leading-relaxed font-sans whitespace-pre-line">{achievement.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gallery Section */}
          <div className="mb-20">
            <ImageGallery 
              images={GALLERY_IMAGES} 
              title={headers.gallery}
              subtitle={uiContent.gallerySubtitle}
            />
          </div>
          
          {/* Contact Section within About */}
          <div className="text-center bg-gray-50 rounded-2xl p-10 border border-gray-100">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-900 mb-8 flex justify-center items-center gap-2 font-serif">
              <span className="w-8 h-px bg-gray-900"></span>
              {content.ctaTitle}
              <span className="w-8 h-px bg-gray-900"></span>
            </h2>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center gap-4 text-body-sm">
                 <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition shadow-sm font-sans">
                   <Facebook size={18} /> Facebook
                 </a>
                 <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition shadow-sm font-sans">
                   <Phone size={18} /> WhatsApp
                 </a>
                 <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition shadow-sm font-sans">
                   <Instagram size={18} /> Instagram
                 </a>
                 {/* Added Email Button */}
                 <a href={`mailto:${SOCIAL_LINKS.email}`} className="bg-brand-blue text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-900 transition shadow-sm font-sans">
                   <Mail size={18} /> {uiContent.emailUs}
                 </a>
              </div>

              <Link to="/contact" className="bg-brand-blue text-white px-10 py-4 rounded-full text-base font-bold shadow-xl hover:bg-blue-900 transition transform hover:-translate-y-1 flex items-center gap-3 mt-4 font-sans">
                 <Mail size={22} /> {uiContent.viewContact}
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;