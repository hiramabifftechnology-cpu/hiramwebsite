import React from 'react';
import { Building, Hammer, PenTool, Layers, Zap, Monitor } from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Building,
  Hammer,
  PenTool,
  Layers,
  Zap,
  Monitor,
};

interface ServicesProps {
  onNavigate: (section: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la construction neuve aux solutions informatiques, 
            HAC TECH vous accompagne dans tous vos projets avec expertise et professionnalisme.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-900 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Un projet en tête ?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Contactez-nous pour un devis personnalisé et gratuit sous 24h
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-blue-900 bg-yellow-400 hover:bg-yellow-300 transition-colors duration-200 transform hover:scale-105"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;