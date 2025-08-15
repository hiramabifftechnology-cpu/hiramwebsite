import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

interface PortfolioProps {
  onNavigate: (section: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('tous');

  const categories = [
    { id: 'tous', name: 'Tous les projets' },
    { id: 'maisons', name: 'Maisons' },
    { id: 'commercial', name: 'Bâtiments commerciaux' },
    { id: 'renovation', name: 'Rénovations' }
  ];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations qui témoignent de notre savoir-faire 
            et de notre engagement envers l'excellence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-900 shadow-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  {categories.find(cat => cat.id === project.category)?.name.replace('Bâtiments commerciaux', 'Commercial')}
                </div>
                
                {/* Year */}
                <div className="absolute bottom-4 right-4 flex items-center text-white text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    Cameroun
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Votre projet mérite notre expertise
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez nos clients satisfaits et concrétisez votre projet avec HAC TECH
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-200"
              >
                Commencer mon projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-900 text-lg font-medium rounded-lg text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-200"
              >
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;