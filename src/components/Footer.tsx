import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: 'home' },
    { name: 'À propos', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Réalisations', href: 'portfolio' },
    { name: 'Contact', href: 'contact' }
  ];

  const services = [
    'Construction neuve',
    'Rénovation',
    'Extension & aménagement',
    'Gros œuvre',
    'Installation électrique',
    'Solutions informatiques'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">HAC TECH</h3>
              <p className="text-sm text-gray-400">Construction & Technology</p>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Depuis 2023, HAC TECH Construction accompagne particuliers et professionnels 
              dans tous leurs projets de construction et de rénovation au Cameroun.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">+237 693 511 109</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">hiramabiff.technology@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">Bastos, Yaoundé - Cameroun</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Restez informé</h4>
            
            <p className="text-gray-300 mb-4">
              Recevez nos dernières actualités et conseils construction.
            </p>

            {/* Newsletter Form */}
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-r-lg transition-colors duration-200"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-medium text-white mb-3">Suivez-nous</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                >
                  <span className="text-gray-300 group-hover:text-gray-900 font-semibold text-sm">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                >
                  <span className="text-gray-300 group-hover:text-gray-900 font-semibold text-sm">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                >
                  <span className="text-gray-300 group-hover:text-gray-900 font-semibold text-sm">ig</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} HAC TECH Construction. Tous droits réservés.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                CGV
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              Site réalisé avec passion par HAC TECH - Certifié Qualibat & RGE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
