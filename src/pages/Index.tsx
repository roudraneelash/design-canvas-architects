
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParallaxDivider from '@/components/ParallaxDivider';

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
      
      <ParallaxDivider 
        imageUrl="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80"
        text="Our Vision" 
      />
      
      <Projects />
      
      <ParallaxDivider 
        imageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
        text="Excellence in Architecture" 
      />
      
      <Services />
      
      <ParallaxDivider 
        imageUrl="https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=1200&q=80"
        height="h-[250px]"
      />
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
