
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
    <footer className="bg-mono-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-serif font-light mb-5">DESIGN CANVAS</h3>
            <p className="text-white/70 mb-6 font-light font-serif">
              Creating exceptional spaces that inspire, endure, and transform the way people live.
            </p>
            <button 
              onClick={scrollToTop}
              className="flex items-center text-white/70 hover:text-white transition-colors font-serif font-light"
            >
              Back to top <ArrowUp size={16} className="ml-2" />
            </button>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-5 font-serif">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors font-serif font-light">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors font-serif font-light">About Us</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-white transition-colors font-serif font-light">Our Projects</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors font-serif font-light">Services</a></li>
              <li><a href="#team" className="text-white/70 hover:text-white transition-colors font-serif font-light">Our Team</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors font-serif font-light">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-5 font-serif">Contact</h4>
            <ul className="space-y-3 text-white/70 font-serif font-light">
              <li>123 Architecture Avenue</li>
              <li>San Francisco, CA 94103</li>
              <li>United States</li>
              <li className="pt-2">info@designcanvas.com</li>
              <li>+1 (415) 555-0123</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-5 font-serif">Newsletter</h4>
            <p className="text-white/70 mb-4 font-serif font-light">
              Subscribe to our newsletter for the latest updates on projects and architectural insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 bg-white/10 focus:bg-white/20 border border-white/20 rounded-none text-white placeholder:text-white/50 focus:outline-none font-serif font-light"
              />
              <button className="px-4 py-2 bg-white text-mono-dark font-light rounded-none hover:bg-white/90 transition-colors font-serif">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0 font-serif font-light">
            © {new Date().getFullYear()} Design Canvas Architects. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-serif font-light">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-serif font-light">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-serif font-light">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
