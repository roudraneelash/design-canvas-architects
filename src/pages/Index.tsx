
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
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
    
    // Initialize animations
    animateElements();
    
    // Add scroll event listener with throttling
    let scrollTimeout: number;
    const handleScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = window.setTimeout(() => {
          scrollTimeout = 0;
          animateElements();
        }, 50);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
