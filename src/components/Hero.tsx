
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80",
      title: "DESIGN CANVAS ARCHITECTS",
      subtitle: "Creating exceptional spaces that inspire, endure, and transform."
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
      title: "INNOVATIVE SOLUTIONS",
      subtitle: "Blending creativity with functionality for modern living environments."
    },
    {
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2000&q=80",
      title: "SUSTAINABLE DESIGN",
      subtitle: "Environmentally conscious architecture for a better tomorrow."
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Carousel Background */}
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full w-full">
              <div 
                className={cn(
                  "absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out",
                  index === currentSlide ? "opacity-100" : "opacity-0"
                )}
                style={{ 
                  backgroundImage: `url("${slide.image}")`,
                  filter: 'brightness(0.7)'
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Black Overlay with Diagonal Cut */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-24 z-10">
        <div className="max-w-3xl">
          <div className="relative overflow-hidden h-24 mb-6">
            {heroSlides.map((slide, index) => (
              <h1 
                key={index}
                className={cn(
                  "absolute text-5xl md:text-7xl font-bold text-white tracking-tight transition-transform duration-1000",
                  index === currentSlide 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-full opacity-0"
                )}
              >
                {slide.title}
              </h1>
            ))}
          </div>
          
          <div className="relative overflow-hidden h-20 mb-8">
            {heroSlides.map((slide, index) => (
              <p 
                key={index}
                className={cn(
                  "absolute text-xl md:text-2xl text-white/90 transition-transform duration-1000 delay-200",
                  index === currentSlide 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-full opacity-0"
                )}
              >
                {slide.subtitle}
              </p>
            ))}
          </div>
          
          <div className="space-x-4 flex items-center">
            <a 
              href="#projects" 
              className={cn(
                "px-8 py-3 bg-arch-accent1 text-white font-medium rounded-none",
                "hover:bg-arch-accent2 transition-colors duration-300 inline-flex items-center"
              )}
            >
              View Our Work
              <ArrowRight size={18} className="ml-2" />
            </a>
            
            <div className="hidden md:flex items-center">
              <div className="w-12 h-[1px] bg-white/50 mr-3"></div>
              <a href="#contact" className="text-white hover:text-arch-accent1 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-6 md:left-24 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-10 h-1 rounded-none transition-all duration-300",
                index === currentSlide ? "bg-arch-accent1" : "bg-white/30"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Scroll Down */}
        <div className="absolute bottom-10 right-6 md:right-24 flex flex-col items-center">
          <a href="#about" className="text-white/80 group flex flex-col items-center">
            <span className="text-sm mb-2 group-hover:text-arch-accent1 transition-colors">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
