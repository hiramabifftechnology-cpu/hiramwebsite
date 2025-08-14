// Email configuration file
export const EMAIL_CONFIG = {
  // EmailJS Configuration (Client-side)
  emailjs: {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_bae13oq',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_gz4olol',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'MRQgNINxwh7JxHURB',
  },
  
  // Company email settings
  company: {
    email: 'hiramabiff.technology@gmail.com',
    name: 'HAC TECH Construction',
    phone: '+44 7982 747852',
    address: 'Quartier Bastos, Yaoundé, Cameroun',
  },
  
  // Email templates
  templates: {
    contactForm: {
      subject: 'Nouvelle demande de devis - HAC TECH Construction',
      autoReply: {
        subject: 'Confirmation de réception - HAC TECH Construction',
        message: `
          Bonjour {{name}},
          
          Nous avons bien reçu votre demande de devis et vous remercions de votre confiance.
          
          Notre équipe va analyser votre projet et vous recontacter dans les plus brefs délais (sous 24h maximum).
          
          En attendant, n'hésitez pas à nous contacter sur Whatsapp +44 7982 747852 ou par appel direct au +237 697 471 038 et +237 676 030 899" pour toute question urgente.
          
          Cordialement,
          L'équipe HAC TECH Construction
        `
      }
    }
  }
};