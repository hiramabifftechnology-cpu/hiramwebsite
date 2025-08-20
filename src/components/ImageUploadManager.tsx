import React, { useState, useRef } from 'react';
import { Upload, X, Save, FolderOpen, Image as ImageIcon } from 'lucide-react';

interface ImageUploadManagerProps {
  onClose: () => void;
  onImageSelect: (projectId: number, imageUrl: string) => void;
}

const ImageUploadManager: React.FC<ImageUploadManagerProps> = ({ onClose, onImageSelect }) => {
  const [uploadedImages, setUploadedImages] = useState<{[key: string]: string}>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('general');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    { id: 'general', name: 'Général' },
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          const imageId = `${selectedCategory}_${Date.now()}_${Math.random()}`;
          setUploadedImages(prev => ({
            ...prev,
            [imageId]: result
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (imageId: string) => {
    setUploadedImages(prev => {
      const newImages = { ...prev };
      delete newImages[imageId];
      return newImages;
    });
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('hactech_uploaded_images', JSON.stringify(uploadedImages));
    alert('Images sauvegardées avec succès !');
  };

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('hactech_uploaded_images');
    if (saved) {
      setUploadedImages(JSON.parse(saved));
      alert('Images chargées avec succès !');
    }
  };

  const filteredImages = Object.entries(uploadedImages).filter(([key]) => 
    key.startsWith(selectedCategory) || selectedCategory === 'general'
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Gestionnaire d'Images</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Controls */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center px-4 py-2 bg-ford-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Upload className="w-5 h-5 mr-2" />
              Ajouter des images
            </button>
            
            <button
              onClick={saveToLocalStorage}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="w-5 h-5 mr-2" />
              Sauvegarder
            </button>
            
            <button
              onClick={loadFromLocalStorage}
              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FolderOpen className="w-5 h-5 mr-2" />
              Charger
            </button>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ford-blue focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />

          {/* Images Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map(([imageId, imageUrl]) => (
                <div key={imageId} className="relative group">
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                  <button
                    onClick={() => removeImage(imageId)}
                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <button
                      onClick={() => {
                        // This would be used to select image for a specific project
                        // For now, we'll just copy the image URL
                        navigator.clipboard.writeText(imageUrl);
                        alert('URL de l\'image copiée !');
                      }}
                      className="bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      Utiliser
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Aucune image dans cette catégorie
              </h3>
              <p className="text-gray-600">
                Cliquez sur "Ajouter des images" pour commencer
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4 bg-gray-50">
          <div className="text-sm text-gray-600">
            <strong>Instructions :</strong> Uploadez vos images, organisez-les par catégorie, 
            et utilisez le bouton "Changer\" sur chaque projet pour appliquer vos images personnalisées.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadManager;