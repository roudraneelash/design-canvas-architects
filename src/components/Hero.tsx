
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80")',
          filter: 'brightness(0.8)'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

      {/* Content */}
      <div className="container-custom relative z-10 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          DESIGN CANVAS ARCHITECTS
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
          Creating exceptional spaces that inspire, endure, and transform the way people live.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className={cn(
              "px-8 py-3 bg-white text-arch-dark font-medium rounded-sm",
              "hover:bg-arch-dark hover:text-white transition-colors duration-300"
            )}
          >
            View Our Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-white text-white font-medium rounded-sm group hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Get in Touch
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/80 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
