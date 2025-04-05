
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
    <footer className="bg-mono-dark text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-light mb-4">DESIGN CANVAS</h3>
            <p className="text-white/70 mb-4 font-light font-serif">
              Creating exceptional spaces that inspire, endure, and transform.
            </p>
            <button 
              onClick={scrollToTop}
              className="flex items-center text-white/70 hover:text-[#FFA726] transition-colors font-serif font-light"
            >
              Back to top <ArrowUp size={16} className="ml-2" />
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row md:justify-end">
            <div className="space-y-4">
              <h4 className="text-lg font-light mb-2 font-serif">Contact</h4>
              <div className="text-white/70 font-serif font-light">
                <p>info@designcanvas.com</p>
                <p>+1 (415) 555-0123</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0 font-serif font-light">
            © {new Date().getFullYear()} Design Canvas Architects. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/contact" className="text-white/70 hover:text-[#FFA726] transition-colors text-sm font-serif font-light">Contact</a>
            <a href="#" className="text-white/70 hover:text-[#FFA726] transition-colors text-sm font-serif font-light">Privacy</a>
            <a href="#" className="text-white/70 hover:text-[#FFA726] transition-colors text-sm font-serif font-light">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
