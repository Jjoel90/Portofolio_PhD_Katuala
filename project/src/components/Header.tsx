import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('FR');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'FR' ? 'EN' : 'FR');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-slate-800">
            Me. KATUALA
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-700 hover:text-amber-700 transition-colors">
              À propos
            </a>
            <a href="#experience" className="text-slate-700 hover:text-amber-700 transition-colors">
              Parcours
            </a>
            <a href="#expertise" className="text-slate-700 hover:text-amber-700 transition-colors">
              Expertise
            </a>
            <a href="#publications" className="text-slate-700 hover:text-amber-700 transition-colors">
              Publications
            </a>
            <a href="#contact" className="text-slate-700 hover:text-amber-700 transition-colors">
              Contact
            </a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-slate-700 hover:text-amber-700 transition-colors"
            >
              <Globe size={18} className="mr-1" />
              <span>{language}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-slate-700 hover:text-amber-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </a>
            <a 
              href="#experience" 
              className="text-slate-700 hover:text-amber-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Parcours
            </a>
            <a 
              href="#expertise" 
              className="text-slate-700 hover:text-amber-700 transition-colors "
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </a>
            <a 
              href="#publications" 
              className="text-slate-700 hover:text-amber-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Publications
            </a>
            <a 
              href="#contact" 
              className="text-slate-700 hover:text-amber-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-slate-700 hover:text-amber-700 transition-colors"
            >
              <Globe size={18} className="mr-1" />
              <span>{language}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};