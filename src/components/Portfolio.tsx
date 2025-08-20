import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Clock, CheckCircle, Upload, X } from 'lucide-react';
import { projects } from '../data/projects';

interface PortfolioProps {
  onNavigate: (section: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('tous');
  const [statusFilter, setStatusFilter] = useState<string>('tous');
  const [showUpload, setShowUpload] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<{[key: number]: string}>({});

  const categories = [
    { id: 'tous', name: 'Tous les projets' },
    { id: 'maisons', name: 'Maisons' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'renovation', name: 'Rénovation' },
    { id: 'meublement', name: 'Meublement' },
    { id: 'decoration-interne', name: 'Décoration Interne' },
    { id: 'renovation-externe', name: 'Rénovation Externe' },
    { id: 'gros-oeuvre', name: 'Gros Œuvre' },
    { id: 'electrique', name: 'Électrique' },
    { id: 'informatique', name: 'Informatique' },
    { id: 'system-intelligent', name: 'Système Intelligent' },
    { id: 'maintenance', name: 'Maintenance' }
  ];

  const statusOptions = [
    { id: 'tous', name: 'Tous les statuts' },
    { id: 'completed', name: 'Projets terminés' },
    { id: 'in-progress', name: 'Projets en cours' }
  ];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeFilter === 'tous' || project.category === activeFilter;
    const statusMatch = statusFilter === 'tous' || project.status === statusFilter;
    return categoryMatch && statusMatch;
  });

  const handleImageUpload = (projectId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImages(prev => ({
          ...prev,
          [projectId]: result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeUploadedImage = (projectId: number) => {
    setUploadedImages(prev => {
      const newImages = { ...prev };
      delete newImages[projectId];
      return newImages;
    });
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos projets terminés et en cours qui témoignent de notre savoir-faire 
            et de notre engagement envers l'excellence dans tous les domaines.
          </p>
        </div>

        {/* Upload Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowUpload(!showUpload)}
            className="inline-flex items-center px-6 py-3 bg-ford-blue text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Upload className="w-5 h-5 mr-2" />
            Gérer les images de projets
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-ford-blue text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-ford-blue shadow-sm'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex justify-center gap-2">
            {statusOptions.map((status) => (
              <button
                key={status.id}
                onClick={() => setStatusFilter(status.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  statusFilter === status.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                }`}
              >
                {status.name}
              </button>
            ))}
          </div>
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
                  src={uploadedImages[project.id] || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 text-white text-sm font-medium rounded-full flex items-center ${
                  project.status === 'completed' ? 'bg-green-600' : 'bg-orange-600'
                }`}>
                  {project.status === 'completed' ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Terminé
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4 mr-1" />
                      En cours
                    </>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-ford-blue text-white text-sm font-medium rounded-full">
                  {categories.find(cat => cat.id === project.category)?.name}
                </div>
                
                {/* Year */}
                <div className="absolute bottom-4 right-4 flex items-center text-white text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.year}
                </div>

                {/* Upload Button for this project */}
                {showUpload && (
                  <div className="absolute bottom-4 left-4">
                    <label className="cursor-pointer bg-white/90 hover:bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 flex items-center">
                      <Upload className="w-4 h-4 mr-1" />
                      Changer
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(project.id, e)}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}

                {/* Remove uploaded image button */}
                {uploadedImages[project.id] && showUpload && (
                  <button
                    onClick={() => removeUploadedImage(project.id)}
                    className="absolute top-16 right-4 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-ford-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location || 'Cameroun'}
                  </div>
                  <ArrowRight className="w-5 h-5 text-ford-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucun projet trouvé
            </h3>
            <p className="text-gray-600">
              Aucun projet ne correspond aux filtres sélectionnés.
            </p>
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-ford-blue mb-2">
              {projects.filter(p => p.status === 'completed').length}
            </div>
            <div className="text-gray-600">Projets terminés</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {projects.filter(p => p.status === 'in-progress').length}
            </div>
            <div className="text-gray-600">Projets en cours</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {categories.length - 1}
            </div>
            <div className="text-gray-600">Domaines d'expertise</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Clients satisfaits</div>
          </div>
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
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-ford-blue hover:bg-blue-700 transition-colors duration-200"
              >
                Commencer mon projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center px-8 py-4 border-2 border-ford-blue text-lg font-medium rounded-lg text-ford-blue hover:bg-ford-blue hover:text-white transition-all duration-200"
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