import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: 'home' },
    { name: 'À propos', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Réalisations', href: 'portfolio' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavigate = (href: string) => {
    onNavigate(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+237 699 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@hactech.cm</span>
              </div>
            </div>
            <div className="text-xs">
              Devis gratuit sous 24h
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">
                HAC TECH
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Construction & Technology</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigate(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href
                      ? 'text-blue-900 border-b-2 border-blue-900'
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => handleNavigate('contact')}
              className="hidden md:inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-200"
            >
              Devis Gratuit
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigate(item.href)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.href
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('contact')}
                className="w-full mt-4 px-3 py-2 text-center text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-200 rounded-lg"
              >
                Devis Gratuit
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;