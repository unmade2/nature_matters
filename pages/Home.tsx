import React, { useState } from 'react';
import { 
  Calendar, 
  DollarSign, 
  Clock, 
  Users, 
  User, 
  CloudSun, 
  CheckSquare, 
  Download, 
  Facebook,
  Phone,
  Mail,
  Instagram,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Star,
  ShieldCheck,
  Award,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOWNLOAD_LINK, SOCIAL_LINKS, getContent, COMPANY_INFO, GALLERY_IMAGES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import ImageGallery from '../components/ImageGallery';
import heroImage from '../assets/hero.jpg';
import highlightsImage from '../assets/highlights.jpg';

const Home: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const content = getContent(language);
  const [openDay, setOpenDay] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(content.departureDates[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Reset selected date when language changes (to update displayed text)
  React.useEffect(() => {
    setSelectedDate(content.departureDates[0]);
  }, [language]);

  const toggleDay = (day: string) => {
    setOpenDay(openDay === day ? null : day);
  };

  const bookingMessage = `Hi, I am interested in the ${content.tripDetails.title}. I would like to book/inquire for the date: ${selectedDate}. Please provide more details.`;
  const bookingUrl = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(bookingMessage)}`;

  const BookNowSection = () => (
    <div className="flex flex-col items-center justify-start">
       <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-8 py-3 rounded text-lg font-bold shadow-md hover:bg-red-600 transition transform hover:-translate-y-1 flex items-center gap-2 w-full justify-center md:w-auto font-sans">
         <CheckSquare size={20} />
         {content.ui.bookNow}
       </a>
       <p className="mt-4 text-xs text-gray-500 text-center max-w-xs">
         {content.ui.selectDate}
       </p>
    </div>
  );

  // Testimonials Slideshow Logic
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(content.testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleTestimonials = content.testimonials.slice(
    currentSlide * itemsPerSlide, 
    (currentSlide + 1) * itemsPerSlide
  );

  // Mobile swipe for testimonials (left/right)
  const handleTestimonialsTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTestimonialsTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTestimonialsTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const threshold = 40; // px

    if (distance > threshold) {
      nextSlide();
    } else if (distance < -threshold) {
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <header className="relative min-h-[85vh] md:h-[80vh] flex items-center justify-center bg-gray-800 overflow-hidden">
        <img 
          src={heroImage}
          alt="Northern Pakistan landscape" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/30"></div>
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
          
          <h2 className="text-lg md:text-xl tracking-[0.2em] mb-2 uppercase font-serif">{content.hero.eyebrow}</h2>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-lg leading-tight">
            {content.hero.title}
          </h1>
          <div className="w-24 h-1 bg-brand-red mx-auto mb-4"></div>
          <h3 className="text-lg md:text-xl font-light tracking-widest max-w-3xl mx-auto font-sans drop-shadow-md">
             {content.hero.description}
          </h3>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">{content.intro.title}</h2>
        <div className="space-y-6 text-brand-red font-medium text-sm md:text-base max-w-4xl mx-auto leading-relaxed mt-6 font-sans">
          <p className="text-gray-700">
            {content.intro.text1}
          </p>
          <p className="text-xl font-bold font-serif text-brand-red">
            {content.intro.highlight}
          </p>
          <p className="text-gray-700">
            {content.intro.text2}
          </p>
        </div>
        <div className="w-full h-px bg-gray-300 my-12"></div>
      </section>

      {/* Trip Details Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl font-bold uppercase tracking-wide flex items-center gap-2 font-serif">
            <span className="w-8 h-px bg-black"></span>
            {content.headers.tripDetails}
            <span className="w-8 h-px bg-black"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 text-sm md:text-base">
            
            {/* Confirmed Dates Section */}
            <div className="flex gap-4 items-start">
              <Calendar className="text-gray-700 shrink-0 mt-1" size={20} />
              <div className="w-full">
                <span className="font-bold block text-gray-900 mb-2 font-serif">{content.headers.confirmedDepartures}</span>
                <div className="relative">
                  <select 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-blue-50 border border-blue-200 text-brand-blue text-sm rounded-lg focus:ring-brand-lightBlue focus:border-brand-lightBlue block p-3 pr-8 shadow-sm font-medium appearance-none cursor-pointer hover:bg-blue-100 transition"
                  >
                    {content.departureDates.map((date, idx) => (
                      <option key={idx} value={date}>
                        {idx + 1}. {date}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-blue">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <DollarSign className="text-gray-700 shrink-0" size={20} />
              <div>
                <span className="font-bold block text-gray-900 font-serif">{content.headers.packageCost}</span>
                <span className="text-brand-lightBlue font-medium">For Solo/Couples: {content.tripDetails.price}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-gray-700 shrink-0" size={20} />
              <div>
                <span className="font-bold block text-gray-900 font-serif">{content.headers.daysTraveled}</span>
                <span className="text-brand-lightBlue font-medium">{content.tripDetails.duration}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="text-gray-700 shrink-0" size={20} />
              <div>
                <span className="font-bold block text-gray-900 font-serif">{content.headers.members}</span>
                <span className="text-brand-lightBlue font-medium">{content.tripDetails.groupSize}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <User className="text-gray-700 shrink-0" size={20} />
              <div>
                <span className="font-bold block text-gray-900 font-serif">{content.headers.ageAppropriate}</span>
                <span className="text-brand-lightBlue font-medium">{content.tripDetails.age}</span>
              </div>
            </div>
             
             <div className="flex gap-4">
               <div className="shrink-0 w-5 flex justify-center"><span className="font-bold text-lg leading-none">👤</span></div>
               <div>
                  <span className="font-bold block text-gray-900 font-serif">{content.tripDetails.soloTravelerTitle}</span>
                  <p className="text-brand-lightBlue text-xs md:text-sm">
                    {content.tripDetails.soloTravelerDesc}
                  </p>
               </div>
             </div>

             <div className="flex gap-4">
               <Users className="text-gray-700 shrink-0" size={20} />
               <div>
                 <span className="font-bold block text-gray-900 font-serif">{content.tripDetails.privateGroupTitle}</span>
                 <span className="text-brand-lightBlue font-medium">{content.tripDetails.privateGroupDesc}</span>
               </div>
             </div>

             {/* Mobile Book Now Section */}
             <div className="md:hidden py-6 border-t border-b border-gray-100 my-4">
                <BookNowSection />
             </div>

             <div className="pt-4">
               <div className="flex items-center gap-2 mb-4">
                  <CloudSun className="text-gray-700 shrink-0" size={20} />
                  <span className="font-bold text-gray-900 text-lg font-serif">{content.headers.weatherForecast}</span>
               </div>
               <div className="grid grid-cols-1 gap-6"> 
                 {content.weatherSeasons.map((season) => (
                   <div key={season.title} className="bg-gray-50 border border-blue-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                     <h4 className="font-bold text-brand-blue mb-4 border-b border-blue-200 pb-2 flex items-center gap-2 font-serif">
                       <CloudSun size={18} /> {season.title}
                     </h4>
                     <div className="space-y-4">
                       {season.data.map((loc) => (
                          <div key={loc.city} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-4 text-sm">
                             <div className="font-semibold text-gray-800 flex flex-col">
                               <span className="text-base font-serif">{loc.city}</span>
                               <span className="text-brand-red text-sm font-bold">{loc.temp}</span>
                             </div>
                             <div className="text-gray-600 text-sm leading-relaxed">{loc.desc}</div>
                          </div>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
               <p className="text-gray-500 text-xs mt-3 italic">{content.ui.weatherNote}</p>
             </div>
          </div>

          {/* Desktop Book Now Section */}
          <div className="hidden md:flex flex-col items-center justify-start pt-0">
             <BookNowSection />
          </div>
        </div>
        
        <div className="w-full h-px bg-gray-300 my-12"></div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
             <img 
               src={highlightsImage}
               alt="Attabad Lake, Gilgit, PAKISTAN" 
               className="w-full h-auto object-cover rounded shadow-lg"
             />
             <p className="text-center text-xs text-gray-400 mt-2 tracking-widest uppercase font-sans">
               ATTABAD LAKE, GILGIT, PAKISTAN
             </p>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold uppercase tracking-wide flex items-center gap-2 mb-6 justify-end md:justify-start font-serif">
              <span className="hidden md:block w-8 h-px bg-black"></span>
              {content.headers.highlights}
              <span className="md:hidden w-8 h-px bg-black"></span>
            </h2>
            <ul className="space-y-4">
              {content.highlights.map((item) => (
                <li key={item.id} className="flex gap-3 items-start">
                  <div className="bg-brand-lightBlue text-white p-1 rounded-sm shrink-0 mt-1">
                    <CheckSquare size={16} />
                  </div>
                  <span className="font-bold text-gray-800 text-sm md:text-base leading-snug font-sans">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 my-12"></div>
      </section>

      {/* Downloads */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
          <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="bg-brand-lightBlue text-white p-4 rounded-full mb-2 shadow-lg group-hover:bg-blue-600 transition">
              <Download size={32} />
            </div>
            <span className="text-brand-red font-bold border-b border-brand-red pb-0.5 group-hover:text-red-700 font-sans">{content.ui.downloadItinerary}</span>
          </a>
        </div>
        <div className="w-full h-px bg-gray-300 my-12"></div>
      </section>

      {/* Important Notices */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="text-center mb-8">
           <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-900 leading-snug font-serif">
             {content.headers.notices}
           </h2>
        </div>
        <div className="text-xs md:text-sm text-brand-lightBlue space-y-3 leading-relaxed bg-blue-50 p-6 rounded-lg border border-blue-100 font-sans">
          {content.notices.map((notice, idx) => (
            <p key={idx} className="flex gap-2">
              <span className="font-bold min-w-[15px]">{idx + 1}.</span>
              <span>{notice}</span>
            </p>
          ))}
        </div>
        <div className="w-full h-px bg-gray-300 my-12"></div>
      </section>

      {/* Itinerary */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
           <h2 className="text-2xl font-bold uppercase tracking-wide flex justify-center items-center gap-2 font-serif">
            <span className="w-6 h-px bg-black"></span>
            {content.headers.itinerary} ({content.tripDetails.duration})
            <span className="w-6 h-px bg-black"></span>
           </h2>
        </div>
        
        <div className="space-y-2">
          {content.itinerary.map((item) => (
            <div key={item.day} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleDay(item.day)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold bg-gray-800 text-white px-2 py-1 rounded w-16 text-center font-sans">{item.day}</span>
                  <span className="font-bold text-gray-800 font-serif">{item.title}</span>
                </div>
                {openDay === item.day ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openDay === item.day && (
                <div className="p-4 bg-white text-sm text-gray-600 border-t border-gray-100 animate-fadeIn font-sans">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-red-100 p-3 rounded text-center text-xs text-red-800 font-sans">
           For a more comprehensive itinerary, accommodation, and meals, please download the complete itinerary PDF above!
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inclusions */}
          <div className="border-2 border-brand-blue/30 rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold text-center mb-6 pb-2 border-b-2 border-brand-blue/20 font-serif">{content.headers.inclusions}</h3>
            <ul className="space-y-3">
              {content.inclusions.map((item, idx) => (
                <li key={item.id} className="flex gap-2 text-sm text-brand-lightBlue font-sans">
                  <span className="text-brand-lightBlue mt-0.5 font-bold">{idx + 1}.</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center">
               <span className="inline-flex items-center gap-1 bg-white border border-yellow-400 text-gray-700 px-3 py-1 text-sm font-medium rounded-full shadow-sm font-sans">
                 ⭐ The tour leader records the whole journey ⭐
               </span>
            </div>
          </div>

          {/* Exclusions */}
          <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50/50">
            <h3 className="text-xl font-bold text-center mb-6 pb-2 border-b-2 border-gray-200 font-serif">{content.headers.exclusions}</h3>
            <ul className="space-y-3">
              {content.exclusions.map((item, idx) => (
                <li key={item.id} className="flex gap-2 text-sm text-brand-lightBlue font-sans">
                   <span className="text-brand-lightBlue mt-0.5 font-bold">{idx + 1}.</span>
                   <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-yellow-50 p-3 rounded border border-yellow-200 flex gap-2 items-start">
               <AlertTriangle size={16} className="text-yellow-600 shrink-0 mt-0.5" />
               <p className="text-xs text-yellow-800 font-sans">
                 <b>Note:</b> {content.ui.depositNote}
               </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-brand-blue/10 rounded text-center text-xs md:text-sm font-medium text-gray-800 font-sans">
           {content.ui.depositNote}
        </div>

        <div className="mt-8 flex justify-center">
          <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-6 py-2 rounded shadow-md flex items-center gap-2 hover:bg-red-700 transition font-sans">
            {content.ui.downloadItineraryBtn} <Download size={16} />
          </a>
        </div>
      </section>
      
      {/* Image Gallery */}
      <ImageGallery 
        images={GALLERY_IMAGES} 
        title={content.headers.gallery}
        subtitle={content.ui.gallerySubtitle}
      />

      {/* Testimonials - Slideshow */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold uppercase tracking-wide flex justify-center items-center gap-2 font-serif">
              <span className="w-8 h-px bg-black"></span>
              {content.headers.testimonials}
              <span className="w-8 h-px bg-black"></span>
            </h2>
            <p className="text-brand-blue mt-2 font-medium font-sans">Real stories from our unforgettable journeys</p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 z-10">
              <button 
                onClick={prevSlide}
                className="bg-white hover:bg-brand-blue hover:text-white text-brand-blue p-4 rounded-full shadow-lg border border-gray-200 transition-all transform hover:scale-110 focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft size={28} />
              </button>
          </div>
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 z-10">
              <button 
                onClick={nextSlide}
                className="bg-white hover:bg-brand-blue hover:text-white text-brand-blue p-4 rounded-full shadow-lg border border-gray-200 transition-all transform hover:scale-110 focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight size={28} />
              </button>
          </div>

          {/* Mobile Navigation Arrows (Visible on smaller screens) */}
          <div className="md:hidden flex justify-between absolute top-[55%] left-0 right-0 w-full px-1 z-10 pointer-events-none">
             <button 
                onClick={prevSlide}
                className="pointer-events-auto bg-white/90 p-2 rounded-full shadow border border-gray-200 text-brand-blue"
              >
                <ChevronLeft size={24} />
             </button>
             <button 
                onClick={nextSlide}
                className="pointer-events-auto bg-white/90 p-2 rounded-full shadow border border-gray-200 text-brand-blue"
              >
                <ChevronRight size={24} />
             </button>
          </div>

          <div
            className="px-2 md:px-12 overflow-hidden"
            onTouchStart={handleTestimonialsTouchStart}
            onTouchMove={handleTestimonialsTouchMove}
            onTouchEnd={handleTestimonialsTouchEnd}
          >
            <div 
                key={currentSlide} 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn"
            >
              {visibleTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100 flex flex-col h-full">
                  {testimonial.image && (
                    <div className="w-full aspect-square bg-black flex items-center justify-center overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={`Photo by ${testimonial.name}`} 
                        className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3">
                       <div>
                         <h4 className="font-bold text-gray-900 font-serif">{testimonial.name}</h4>
                         <span className="text-xs text-gray-400 font-sans">{testimonial.date}</span>
                       </div>
                       <div className="flex text-yellow-400">
                         {[...Array(testimonial.rating)].map((_, i) => (
                           <Star key={i} size={14} fill="currentColor" />
                         ))}
                       </div>
                    </div>
                    <p className="text-gray-600 text-sm italic leading-relaxed flex-1 font-sans">
                      "{testimonial.text}"
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-brand-red font-semibold uppercase flex items-center gap-1 font-sans">
                       <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                       {content.ui.recommends}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-brand-blue w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
        <div className="w-full h-px bg-gray-300 my-12 max-w-6xl mx-auto"></div>
      </section>

      {/* Why Choose Us - Home Version */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{content.headers.whyChooseUs}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-sans">
              {content.about.storyText2}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Expertly Guided */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-blue-100 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <User size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{content.whyChooseCards.expert.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-sans">
                    {content.whyChooseCards.expert.desc}
                  </p>
              </div>

              {/* Card 2: Licensed & Trusted */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-blue-100 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{content.whyChooseCards.licensed.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm font-sans">
                    {content.whyChooseCards.licensed.desc}
                  </p>
                  <div className="text-xs bg-gray-50 px-3 py-2 rounded text-gray-500 font-mono border border-gray-200 font-sans">
                      <div className="mb-1">{COMPANY_INFO.license}</div>
                      <div>{COMPANY_INFO.registration}</div>
                  </div>
              </div>

              {/* Card 3: Proven Experience */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-blue-100 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <Award size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{content.whyChooseCards.proven.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-sans">
                    {content.whyChooseCards.proven.desc}
                  </p>
              </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold uppercase mb-8 flex justify-center items-center gap-2 font-serif">
            <span className="w-8 h-px bg-black"></span>
            {content.headers.contact}
            <span className="w-8 h-px bg-black"></span>
          </h2>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-4">
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
                 <Mail size={18} /> {content.ui.emailUs}
               </a>
            </div>

            <Link to="/contact" className="bg-brand-blue text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-blue-900 transition transform hover:-translate-y-1 flex items-center gap-3 font-sans">
               <Mail size={22} /> {content.ui.viewContact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;