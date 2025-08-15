import React from 'react';
import { Award, Shield, Clock, Target } from 'lucide-react';
import { team } from '../data/team';

interface AboutProps {
  onNavigate: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const values = [
    {
      icon: Award,
      title: "Qualité",
      description: "Nous utilisons uniquement des matériaux de première qualité et respectons les normes les plus strictes."
    },
    {
      icon: Clock,
      title: "Respect des délais",
      description: "Nos projets sont livrés dans les temps grâce à une planification rigoureuse et une équipe expérimentée."
    },
    {
      icon: Shield,
      title: "Transparence",
      description: "Communication claire, devis détaillés et suivi régulier de l'avancement des travaux."
    },
    {
      icon: Target,
      title: "Sur mesure",
      description: "Chaque projet est unique et bénéficie d'une approche personnalisée adaptée à vos besoins."
    }
  ];

  const certifications = [
    "Qualibat",
    "RGE",
    "ISO 9001",
    "Assurance décennale"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            À Propos de HAC TECH
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HAC-TECH accompagne particuliers et professionnels dans la réalisation 
            d'infrastructures publiques et privées ainsi que les habitats des particuliers, 
            avec une vision d'excellence pour l'Afrique de demain.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                HAC-TECH est une entreprise spécialisée pour trouver des solutions technologiques 
                et intelligentes, construire, entretenir, maintenir et rénover les plans de développement. 
                Nous imaginons une plus belle vision au Cameroun et à l'Afrique de manière générale.
              </p>
              <p>
                Les infrastructures publiques et privées ainsi que les habitats des particuliers 
                sont notre spécialité, sans oublier les plans urbanistes que nous appliquons. 
                La qualité dans nos services et produits étant notre épée de Damoclès.
              </p>
              <p>
                Le tout dans un strict respect des normes nationales et internationales, 
                nous nous engageons à livrer des projets d'exception qui contribuent 
                au développement durable de l'Afrique.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Équipe HAC TECH"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white font-medium">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nos Valeurs
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Notre Équipe
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-900 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Certifications & Garanties
            </h3>
            <p className="text-lg text-gray-600">
              Nos certifications témoignent de notre engagement envers la qualité et la sécurité
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;