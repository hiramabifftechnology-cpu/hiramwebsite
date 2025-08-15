import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { ContactForm } from '../types';
import emailjs from '@emailjs/browser';

interface ContactProps {
  onNavigate: (section: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Initialize EmailJS (you'll need to replace these with your actual values)
      const serviceId = 'service_bae13oq';
      const templateId = 'template_gz4olol';
      const publicKey = 'MRQgNINxwh7JxHURB';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'HAC TECH Construction',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+237 699 XX XX XX",
      subContent: "Lun-Ven 8h-18h, Sam 8h-12h"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@hactech.cm",
      subContent: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Yaoundé, Cameroun",
      subContent: "Quartier Bastos"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven: 8h-18h",
      subContent: "Sam: 8h-12h"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à démarrer votre projet ? Contactez-nous dès maintenant pour un devis personnalisé 
            et gratuit. Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-blue-900 rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          {info.title}
                        </h4>
                        <p className="text-blue-100 mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-blue-200">
                          {info.subContent}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-blue-800">
                <h4 className="font-semibold mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group">
                    <span className="text-white group-hover:text-blue-900 font-semibold">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group">
                    <span className="text-white group-hover:text-blue-900 font-semibold">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group">
                    <span className="text-white group-hover:text-blue-900 font-semibold">ig</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => onNavigate('home')}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-200"
                  >
                    Retour à l'accueil
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Demande de devis gratuit
                  </h3>
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-sm">{submitError}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors duration-200"
                          placeholder="Votre nom complet"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors duration-200"
                          placeholder="votre.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors duration-200"
                        placeholder="+237 6XX XX XX XX"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Description de votre projet *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors duration-200 resize-none"
                        placeholder="Décrivez votre projet en détail (type de construction, surface, localisation, délais souhaités...)"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white transition-all duration-200 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-[1.02]'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Réponse garantie sous 24h !</strong> Notre équipe analyse votre projet 
                      et vous recontacte rapidement avec un devis détaillé.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="p-6 bg-blue-900 text-white">
              <h3 className="text-2xl font-bold mb-2">Notre localisation</h3>
              <p className="text-blue-100">Visitez-nous à notre siège social</p>
            </div>
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0158267493896!2d11.516666!3d3.8480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf1a1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sBastos%2C%20Yaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HAC TECH Construction - Localisation Bastos, Yaoundé"
              ></iframe>
              
              {/* Overlay with contact info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-5 h-5 text-blue-900" />
                  <h4 className="font-semibold text-gray-900">HAC TECH Construction</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">Quartier Bastos, Yaoundé</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Phone className="w-3 h-3" />
                    <span>+237 699 XX XX XX</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Lun-Ven: 8h-18h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;