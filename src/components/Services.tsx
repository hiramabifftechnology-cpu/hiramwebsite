import React, { useState } from 'react';
import { 
  Building, Hammer, PenTool, Layers, Zap, Monitor, 
  Waves, Droplets, Bot, Home, Shield, Wifi, Sun, 
  Wrench, Sparkles, Users, Upload, X, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Building,
  Hammer,
  PenTool,
  Layers,
  Zap,
  Monitor,
  Waves,
  Droplets,
  Bot,
  Home,
  Shield,
  Wifi,
  Sun,
  Wrench,
  Sparkles,
  Users,
};

interface ServicesProps {
  onNavigate: (section: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [showImageManager, setShowImageManager] = useState(false);
  const [serviceImages, setServiceImages] = useState<{[key: number]: string[]}>({});
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});

  const handleImageUpload = (serviceId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setServiceImages(prev => ({
            ...prev,
            [serviceId]: [...(prev[serviceId] || []), result]
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeServiceImage = (serviceId: number, imageIndex: number) => {
    setServiceImages(prev => ({
      ...prev,
      [serviceId]: prev[serviceId]?.filter((_, index) => index !== imageIndex) || []
    }));
  };

  const nextImage = (serviceId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceId]: ((prev[serviceId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (serviceId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceId]: ((prev[serviceId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const getServiceImages = (service: any) => {
    const uploadedImages = serviceImages[service.id] || [];
    return uploadedImages.length > 0 ? uploadedImages : service.images;
  };

  const getCurrentImage = (service: any) => {
    const images = getServiceImages(service);
    const currentIndex = currentImageIndex[service.id] || 0;
    return images[currentIndex] || images[0];
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la construction neuve aux solutions technologiques intelligentes, 
            HAC TECH vous accompagne dans tous vos projets avec expertise et professionnalisme.
          </p>
        </div>

        {/* Image Management Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowImageManager(!showImageManager)}
            className="inline-flex items-center px-6 py-3 bg-ford-blue text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Upload className="w-5 h-5 mr-2" />
            {showImageManager ? 'Masquer' : 'Gérer'} les images des services
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const images = getServiceImages(service);
            const currentImage = getCurrentImage(service);
            
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {/* Image with Carousel */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={currentImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-ford-blue rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>

                  {/* Image Counter */}
                  {images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                      {(currentImageIndex[service.id] || 0) + 1}/{images.length}
                    </div>
                  )}

                  {/* Carousel Controls */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(service.id, images.length)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => nextImage(service.id, images.length)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  {/* Upload Button */}
                  {showImageManager && (
                    <div className="absolute bottom-2 left-2">
                      <label className="cursor-pointer bg-white/90 hover:bg-white text-gray-900 px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200 flex items-center">
                        <Upload className="w-3 h-3 mr-1" />
                        Ajouter
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={(e) => handleImageUpload(service.id, e)}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-ford-blue transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Uploaded Images Management */}
                  {showImageManager && serviceImages[service.id] && serviceImages[service.id].length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="flex flex-wrap gap-1">
                        {serviceImages[service.id].map((img, index) => (
                          <div key={index} className="relative group/img">
                            <img
                              src={img}
                              alt={`Upload ${index + 1}`}
                              className="w-8 h-8 object-cover rounded border-2 border-ford-blue cursor-pointer"
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [service.id]: index }))}
                            />
                            <button
                              onClick={() => removeServiceImage(service.id, index)}
                              className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity"
                            >
                              <X className="w-2 h-2" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-ford-blue rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Un projet en tête ?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Contactez-nous pour un devis personnalisé et gratuit sous 24h
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
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