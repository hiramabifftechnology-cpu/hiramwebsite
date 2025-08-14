import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_bae13oq', // Replace with your EmailJS service ID
  templateId: 'template_gz4olol', // Replace with your EmailJS template ID
  publicKey: 'MRQgNINxwh7JxHURB', // Replace with your EmailJS public key
};

export interface EmailData {
  from_name: string;
  from_email: string;
  phone?: string;
  message: string;
  to_name: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      data,
      EMAILJS_CONFIG.publicKey
    );
    
    if (result.status !== 200) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

// Alternative: Node.js backend email service (for server-side implementation)
export const sendEmailViaBackend = async (data: EmailData): Promise<void> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email via backend');
    }
  } catch (error) {
    console.error('Backend email sending error:', error);
    throw error;
  }
};