import emailjs from '@emailjs/browser';
import { SecurityValidator } from './security';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface PricingInquiryData {
  planName: string;
  price: string;
  features: string;
  email: string;
}

// Initialize EmailJS with your public key
emailjs.init("7TpUFIasS5eHoxLh_");

export const sendContactEmail = async (data: ContactFormData) => {
  // Security validation
  const validation = SecurityValidator.validateFormData(data);
  
  if (!validation.isValid) {
    console.error('Security validation failed:', validation.errors, validation.globalErrors);
    return { 
      success: false, 
      error: 'Invalid input detected. Please check your data and try again.',
      securityErrors: validation.errors
    };
  }

  // Rate limiting check
  const rateLimit = SecurityValidator.checkRateLimit(validation.sanitizedData.email);
  if (!rateLimit.allowed) {
    const resetTime = new Date(rateLimit.resetTime).toLocaleTimeString();
    return { 
      success: false, 
      error: `Too many attempts. Please try again after ${resetTime}.`,
      rateLimited: true
    };
  }

  const { name, email, message } = validation.sanitizedData;
  
  // Get current date in a readable format
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const templateParams = {
    to_name: "Inspirovix Team",
    from_name: name,
    from_email: email,  // Changed from reply_to to from_email to match template
    message: message,
    date: today,        // Added date parameter
    company_name: 'Inspirovix',  // Added company name
    reply_to: email     // Keep this for EmailJS functionality
  };
  
  try {
    await emailjs.send(
      "service_inspirovix",
      "template_contact",
      templateParams
    );
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: 'Failed to send email' };
  }
};

export const sendPricingInquiryEmail = async (data: PricingInquiryData) => {
  // Security validation
  const validation = SecurityValidator.validateFormData(data);
  
  if (!validation.isValid) {
    console.error('Security validation failed:', validation.errors, validation.globalErrors);
    return { 
      success: false, 
      error: 'Invalid input detected. Please check your data and try again.',
      securityErrors: validation.errors
    };
  }

  // Rate limiting check
  const rateLimit = SecurityValidator.checkRateLimit(validation.sanitizedData.email);
  if (!rateLimit.allowed) {
    const resetTime = new Date(rateLimit.resetTime).toLocaleTimeString();
    return { 
      success: false, 
      error: `Too many attempts. Please try again after ${resetTime}.`,
      rateLimited: true
    };
  }

  const { planName, price, features, email } = validation.sanitizedData;
  
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const templateParams = {
    plan_name: planName,
    date: today,
    from_email: email,
    price: price,
    features: features,
    company_name: 'Inspirovix',
    reply_to: email  // Keep this for EmailJS functionality
  };
  
  try {
    const response = await emailjs.send(
      "service_inspirovix",
      "template_pricing",
      templateParams
    );
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: 'Failed to send email' };
  }
};