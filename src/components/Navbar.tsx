
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, FolderKanban, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isTransparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isTransparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    // Update active link based on current path
    setActiveLink(window.location.pathname);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Projects", href: "/projects", icon: <FolderKanban size={18} /> },
    { name: "Contact", href: "/contact", icon: <MessageSquare size={18} /> }
  ];

  const isActive = (path: string) => activeLink === path;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent && !isMenuOpen && !scrolled ? 
          "bg-transparent" : 
          "bg-white backdrop-blur-md bg-opacity-85 shadow-lg"
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
        <nav className="hidden md:flex items-center">
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.href}
                className={cn(
                  "relative font-serif px-4 py-2 transition-all duration-300 flex items-center gap-2 group",
                  isActive(item.href) ? 
                    "text-mono-dark font-medium" : 
                    "text-mono-medium hover:text-mono-dark"
                )}
                onClick={() => setActiveLink(item.href)}
              >
                <span className={cn(
                  "transition-all duration-300",
                  isActive(item.href) ? "" : "opacity-70 group-hover:opacity-100"
                )}>
                  {item.icon}
                </span>
                <span>
                  {item.name}
                </span>
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-mono-dark"></span>
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-full focus:outline-none transition-colors",
            isTransparent && !isMenuOpen && !scrolled ? 
              "text-white bg-white/20 backdrop-blur-sm" : 
              "text-mono-dark bg-mono-light/50"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-mono-dark z-40 transform transition-transform duration-300",
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="container-custom flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-8 w-full max-w-xs">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-white text-2xl font-serif font-light hover:text-gray-300 transition-all flex items-center gap-3 w-full py-3 border-b border-white/10"
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveLink(item.href);
                }}
              >
                <span className="bg-white/10 p-2 rounded-full">{item.icon}</span>
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
