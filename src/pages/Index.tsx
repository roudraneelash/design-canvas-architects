
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
    // Simple animation on scroll functionality
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
    
    // Add scroll event listener
    window.addEventListener('scroll', animateElements);
    
    // Clean up
    return () => window.removeEventListener('scroll', animateElements);
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
