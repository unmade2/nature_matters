import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Phone } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { SOCIAL_LINKS, getContent } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const ChatWidget: React.FC = () => {
  const { language } = useLanguage();
  const content = getContent(language);
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize or update the welcome message when language changes, IF the chat is empty or only has initial message
  useEffect(() => {
    if (messages.length <= 1) {
      setMessages([{ role: 'model', text: content.ui.tripAssistantIntro }]);
    }
  }, [language, content.ui.tripAssistantIntro]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Pass history excluding the latest user message which is passed as current message
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      // Pass the current system instruction (which changes with language)
      const responseText = await sendMessageToGemini(userMessage.text, history, content.systemInstruction);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: content.ui.somethingWrong }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden border border-gray-200 transition-all duration-300 transform origin-bottom-right">
          <div className="bg-brand-blue p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-semibold">{content.ui.tripAssistant}</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-800 p-1 rounded transition">
              <X size={18} />
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-lightBlue text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg rounded-bl-none border border-gray-100 shadow-sm flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={content.ui.askAbout}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-brand-lightBlue focus:ring-1 focus:ring-brand-lightBlue"
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()}
              className="bg-brand-lightBlue text-white p-2 rounded-full hover:bg-blue-600 disabled:opacity-50 transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center group relative"
        aria-label="Contact on WhatsApp"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {content.ui.whatappUs}
        </span>
      </a>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-gray-600' : 'bg-brand-lightBlue'} text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center`}
        title={content.ui.tripAssistant}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;
