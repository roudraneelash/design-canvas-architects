
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Enhanced animation on scroll functionality
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          element.classList.add('in-view');
        }
      });
    };
    
    // Track scroll position for navbar transparency
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Animate elements on scroll with throttling
      if (!scrollTimeout) {
        scrollTimeout = window.setTimeout(() => {
          scrollTimeout = 0;
          animateElements();
        }, 50);
      }
    };
    
    // Initialize animations
    animateElements();
    
    // Add scroll event listener with throttling
    let scrollTimeout: number;
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
    };
  }, []);

  // Custom highlight sections for Design Philosophy, Sustainability, Collaboration
  const highlightSections = [
    {
      title: "Design Philosophy",
      content: "We believe that architecture should serve as a bridge between human needs and environmental responsibility.",
    },
    {
      title: "Sustainability",
      content: "Our designs incorporate sustainable practices and materials to minimize environmental impact.",
    },
    {
      title: "Collaboration",
      content: "We work closely with clients, engineers, and contractors to ensure seamless execution of every project.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar isTransparent={scrollPosition < 100} />
      <Hero />
      
      <About />
      
      {/* Highlight Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightSections.map((section, index) => (
              <div key={index} className="highlight-section animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
                <h3 className="text-xl font-helvetica font-bold mb-4">{section.title}</h3>
                <p className="font-futura font-light">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Projects />
      
      <Services />
      
      {/* Enhanced Contact Us Section */}
      <section className="bg-mono-light py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-helvetica font-bold text-mono-dark">Let's Collaborate</h2>
              <div className="w-20 h-[1px] bg-mono-accent mb-6"></div>
              <p className="text-mono-medium text-lg font-futura font-light">
                Ready to transform your vision into reality? Our team of expert architects and designers 
                are eager to collaborate with you on your next project.
              </p>
              <p className="text-mono-medium font-futura font-light">
                Whether you're planning a residential renovation, commercial development, or cultural space, 
                we bring creativity, technical expertise, and a thoughtful approach to every project.
              </p>
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-mono-dark text-white font-futura font-light rounded-lg hover:bg-mono-medium transition-colors group"
                >
                  Contact Us
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="relative animate-on-scroll" style={{ animationDelay: "0.15s" }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" 
                      alt="Office Space" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-32 overflow-hidden bg-mono-dark text-white p-4 flex flex-col justify-center rounded-lg">
                    <h3 className="font-helvetica font-bold text-lg">Visit Our Studio</h3>
                    <p className="text-sm text-white/80 font-futura font-light">123 Architecture Ave, San Francisco</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-32 overflow-hidden bg-[#FFA726] text-white p-4 flex flex-col justify-center rounded-lg">
                    <h3 className="font-helvetica font-bold text-lg">Start a Conversation</h3>
                    <p className="text-sm text-white/90 font-futura font-light">info@designcanvas.com</p>
                  </div>
                  <div className="h-48 overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80" 
                      alt="Design Meeting" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute w-20 h-20 bg-mono-dark -top-5 -left-5 -z-10 rounded-lg"></div>
              <div className="absolute w-20 h-20 bg-[#FFA726] -bottom-5 -right-5 -z-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
