
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Hero Background - Fixed background with z-index -1 */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{ 
          backgroundImage: `url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80")`,
          filter: 'brightness(0.6) contrast(1.1)'
        }}
      />

      {/* Improved overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
      
      {/* Content - Centered alignment */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-24 z-10 text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight font-serif mb-8 animate-fade-in">
            DESIGN CANVAS ARCHITECTS
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-extralight font-serif mb-12 animate-scale-in text-center" style={{ animationDelay: '0.4s' }}>
            Creating exceptional spaces that inspire, endure, and transform.
          </p>
          
          <div className="space-x-4 flex items-center justify-center mt-4">
            <a 
              href="#projects" 
              className={cn(
                "px-8 py-3 bg-white text-black font-light rounded-none font-serif",
                "hover:bg-gray-200 hover:text-[#FFA726] transition-all duration-300 inline-flex items-center"
              )}
            >
              View Our Work
              <ArrowRight size={18} className="ml-2" />
            </a>
            
            <div className="hidden md:flex items-center">
              <div className="w-12 h-[1px] bg-white/50 mr-3"></div>
              <a href="#contact" className="text-white hover:text-[#FFA726] transition-colors font-serif">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Down - Enhanced animation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <a href="#about" className="text-white/80 group flex flex-col items-center">
            <span className="text-sm mb-2 group-hover:text-[#FFA726] transition-colors font-serif">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
