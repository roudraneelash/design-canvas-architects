
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-arch-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-display font-semibold mb-5">DESIGN CANVAS</h3>
            <p className="text-white/70 mb-6">
              Creating exceptional spaces that inspire, endure, and transform the way people live.
            </p>
            <button 
              onClick={scrollToTop}
              className="flex items-center text-white/70 hover:text-white transition-colors"
            >
              Back to top <ArrowUp size={16} className="ml-2" />
            </button>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-5">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-arch-accent1 transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-arch-accent1 transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-arch-accent1 transition-colors">Our Projects</a></li>
              <li><a href="#services" className="text-white/70 hover:text-arch-accent1 transition-colors">Services</a></li>
              <li><a href="#team" className="text-white/70 hover:text-arch-accent1 transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-arch-accent1 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-5">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li>123 Architecture Avenue</li>
              <li>San Francisco, CA 94103</li>
              <li>United States</li>
              <li className="pt-2">info@designcanvas.com</li>
              <li>+1 (415) 555-0123</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-5">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates on projects and architectural insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 bg-white/10 focus:bg-white/20 border border-white/20 rounded-l-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button className="px-4 py-2 bg-arch-accent1 text-white font-medium rounded-r-sm hover:bg-arch-accent2 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Design Canvas Architects. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-arch-accent1 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-arch-accent1 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-arch-accent1 transition-colors text-sm">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
