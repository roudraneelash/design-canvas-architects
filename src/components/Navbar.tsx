
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isTransparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isTransparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent && !isMenuOpen && !scrolled ? 
          "bg-transparent" : 
          "bg-white shadow-sm"
      )}
    >
      <div className="container-custom flex justify-between items-center h-20">
        <Link to="/" className={cn(
          "font-serif font-light text-xl transition-colors duration-300",
          isTransparent && !isMenuOpen && !scrolled ? "text-white" : "text-mono-dark"
        )}>
          DESIGN CANVAS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/#about" },
            { name: "Projects", href: "/projects" },
            { name: "Services", href: "/#services" },
            { name: "Team", href: "/#team" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <Link 
              key={index} 
              to={item.href}
              className={cn(
                "font-serif font-light hover:opacity-80 transition-opacity animate-border-bottom",
                isTransparent && !isMenuOpen && !scrolled ? "text-white" : "text-mono-dark"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className={cn(
            "md:hidden p-2 focus:outline-none",
            isTransparent && !isMenuOpen && !scrolled ? "text-white" : "text-mono-dark"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-mono-dark z-40 transform transition-transform duration-300 pt-24",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container-custom">
          <nav className="flex flex-col space-y-6 py-10">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/#about" },
              { name: "Projects", href: "/projects" },
              { name: "Services", href: "/#services" },
              { name: "Team", href: "/#team" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-white text-2xl font-serif font-light hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
