import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Mountain } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS, getContent } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const fullContent = getContent(language);
  const content = fullContent.ui;
  const departureDates = fullContent.departureDates;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    season: '',
    people: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message, season, people } = formData;

    // Localization for WhatsApp message content
    const isZh = language === 'zh';
    const labels = isZh 
      ? { name: '姓名', phone: '电话', email: '邮箱', message: '留言', season: '出行日期', people: '人数' }
      : { name: 'Name', phone: 'Phone', email: 'Email', message: 'Message', season: 'Preferred Trip Date', people: 'Total People' };

    const intro = isZh 
      ? '来自网站的新的咨询：'
      : 'New enquiry from website:';

    const body = `${intro}

${labels.name}: ${name}
${labels.phone}: ${phone}
${labels.email}: ${email}
${labels.season}: ${season}
${labels.people}: ${people}

${labels.message}:
${message}`;

    const baseUrl = 'https://api.whatsapp.com/send/?phone=923557175521&text=';
    const whatsappUrl = `${baseUrl}${encodeURIComponent(body)}&type=phone_number&app_absent=0`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <header className="relative min-h-[50vh] md:h-[50vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1590861057279-8b8393526107?q=80&w=2000&auto=format&fit=crop" 
          alt="Skardu Valley" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center text-white px-4 pt-32 md:pt-0">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 drop-shadow-lg">{content.contact}</h1>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-4"></div>
          <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto font-sans">
            {language === 'en' ? "We'd love to hear from you. Start your journey with us today." : "我们期待听到您的声音。今天就开始您的旅程。"}
          </p>
        </div>
      </header>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column: Info & Form */}
            <div className="space-y-12">
              
              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition group">
                  <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-red transition">
                    <Mail size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 font-serif">{content.emailUs}</h3>
                  <p className="text-sm text-gray-600 break-words font-sans">{SOCIAL_LINKS.email}</p>
                </a>

                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-50 p-6 rounded-xl border border-green-100 hover:shadow-md transition group">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mb-4 group-hover:bg-green-700 transition">
                    <Phone size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 font-serif">WhatsApp</h3>
                  <p className="text-sm text-gray-600 font-sans">{language === 'en' ? "Chat with our team" : "与我们团队聊天"}</p>
                </a>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition group sm:col-span-2">
                  <div className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center mb-4">
                    <MapPin size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 font-serif">{content.ourLocation}</h3>
                  <p className="text-sm text-gray-600 mb-2 font-sans">{COMPANY_INFO.address}</p>
                  <p className="text-xs text-gray-500 font-mono font-sans">
                    {COMPANY_INFO.license} | {COMPANY_INFO.registration}
                  </p>
                </div>
              </div>

              {/* Contact Form (Visual) */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 font-serif">
                  {content.sendMessage} <Send className="text-brand-red" size={20} />
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1 font-sans">{content.name}</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue bg-gray-50 font-sans" 
                        placeholder={content.name} 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1 font-sans">{content.phone}</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue bg-gray-50 font-sans" 
                        placeholder={content.phone} 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1 font-sans">
                        {language === 'zh' ? '出行日期' : 'Preferred Trip Date'}
                      </label>
                      <select
                        name="season"
                        value={formData.season}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue bg-gray-50 font-sans"
                      >
                        <option value="">
                          {language === 'zh' ? '请选择日期' : 'Select trip date'}
                        </option>
                        {departureDates.map((date) => (
                          <option key={date} value={date}>
                            {date}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1 font-sans">
                        {language === 'zh' ? '总人数' : 'Total People'}
                      </label>
                      <input
                        type="number"
                        name="people"
                        min={1}
                        value={formData.people}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue bg-gray-50 font-sans"
                        placeholder={language === 'zh' ? '例如：4' : 'e.g. 4'}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1 font-sans">{content.email}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue bg-gray-50 font-sans" 
                      placeholder={content.email} 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1 font-sans">{content.message}</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue bg-gray-50 font-sans" 
                      placeholder="..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-blue-900 transition shadow-md font-sans">
                    {content.sendBtn}
                  </button>
                </form>
              </div>

            </div>

            {/* Right Column: Map */}
            <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 relative">
               <iframe 
                 src="https://maps.google.com/maps?q=2.879289,101.794342&z=15&output=embed"
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 w-full h-full"
                 title="Map Location"
               ></iframe>
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-gray-800 pointer-events-none">
                  <div className="flex items-center gap-2 font-sans">
                     <MapPin className="text-brand-red" size={16} />
                     Kajang, Selangor
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;