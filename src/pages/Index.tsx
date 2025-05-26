
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ContactSection from "@/components/ContactSection.tsx";

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

  return (
    <div className="min-h-screen">
      <Navbar isTransparent={scrollPosition < 100} />
      <Hero />
      
      <About />
      
      <Projects />
      
      <Services />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;
