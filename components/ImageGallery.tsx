import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
  subtitle?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
        nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  if (!images || images.length === 0) return null;

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 relative group">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold uppercase tracking-wide flex justify-center items-center gap-2 font-serif">
            <span className="w-8 h-px bg-black"></span>
            {title}
            <span className="w-8 h-px bg-black"></span>
          </h2>
          {subtitle && <p className="text-brand-blue mt-2 font-medium font-sans">{subtitle}</p>}
        </div>

        <div className="max-w-4xl mx-auto relative group">
            <div className="w-full h-[320px] md:h-[520px] m-auto relative rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center">
              <img
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out"
              />
            </div>
           
           {/* Left Arrow */}
           <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition backdrop-blur-sm z-10">
             <ChevronLeft onClick={prevSlide} size={24} />
           </div>
           
           {/* Right Arrow */}
           <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 transition backdrop-blur-sm z-10">
             <ChevronRight onClick={nextSlide} size={24} />
           </div>
           
           {/* Dots */}
           <div className="flex justify-center py-2 gap-2 mt-4">
             {images.map((_, slideIndex) => (
               <button
                 key={slideIndex}
                 onClick={() => goToSlide(slideIndex)}
                 className={`transition-all duration-300 rounded-full h-2 ${currentIndex === slideIndex ? 'bg-brand-blue w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'}`}
                 aria-label={`Go to slide ${slideIndex + 1}`}
               ></button>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;