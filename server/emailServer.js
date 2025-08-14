const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your email password or app password
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { from_name, from_email, phone, message } = req.body;

    // Validate required fields
    if (!from_name || !from_email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, and message are required'
      });
    }

    // Email to company
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hiramabiff.technology@gmail.com', // company email
      subject: `Nouvelle demande de devis de ${from_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1E3A8A; color: white; padding: 20px; text-align: center;">
            <h1>HAC TECH Construction</h1>
            <h2>Nouvelle demande de devis</h2>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h3>Informations du client :</h3>
            <p><strong>Nom :</strong> ${from_name}</p>
            <p><strong>Email :</strong> ${from_email}</p>
            <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
            
            <h3>Message :</h3>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #1E3A8A;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 5px;">
              <p><strong>Action requise :</strong> Répondre au client dans les 24h</p>
            </div>
          </div>
          
          <div style="background-color: #1E3A8A; color: white; padding: 10px; text-align: center; font-size: 12px;">
            <p>HAC TECH Construction - Système automatique de gestion des demandes</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to client
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: from_email,
      subject: 'Confirmation de réception - HAC TECH Construction',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1E3A8A; color: white; padding: 20px; text-align: center;">
            <h1>HAC TECH Construction</h1>
            <h2>Merci pour votre demande !</h2>
          </div>
          
          <div style="padding: 20px;">
            <p>Bonjour <strong>${from_name}</strong>,</p>
            
            <p>Nous avons bien reçu votre demande de devis et vous remercions de votre confiance en HAC TECH Construction.</p>
            
            <div style="background-color: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #1E3A8A; margin-top: 0;">Prochaines étapes :</h3>
              <ul>
                <li>Notre équipe va analyser votre projet dans les détails</li>
                <li>Nous vous recontacterons sous <strong>24h maximum</strong></li>
                <li>Un devis personnalisé vous sera proposé</li>
              </ul>
            </div>
            
            <p>En attendant, n'hésitez pas à nous contacter pour toute question urgente :</p>
            <ul>
              <li><strong>Téléphone :</strong> +237 699 XX XX XX</li>
              <li><strong>Email :</strong> contact@hactech.cm</li>
              <li><strong>Adresse :</strong> Quartier Bastos, Yaoundé</li>
            </ul>
            
            <p>Cordialement,<br>
            <strong>L'équipe HAC TECH Construction</strong></p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
            <p>HAC TECH Construction - Expert en construction et rénovation au Cameroun</p>
            <p>15 ans d'expérience | Devis gratuit sous 24h | Garantie qualité</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    res.status(200).json({
      success: true,
      message: 'Emails sent successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Email server is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});

module.exports = app;