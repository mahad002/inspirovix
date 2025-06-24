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

// EmailJS configuration - Update these with your actual values
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "7TpUFIasS5eHoxLh_", // Your public key
  SERVICE_ID: "service_inspirovix", // Your service ID
  CONTACT_TEMPLATE_ID: "template_contact", // Your contact template ID
  PRICING_TEMPLATE_ID: "template_pricing" // Your pricing template ID
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export const sendContactEmail = async (data: ContactFormData) => {
  console.log('Starting email send process...', { data });
  
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
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  // Template parameters that match your EmailJS template
  const templateParams = {
    to_name: "Inspirovix Team",
    from_name: name,
    from_email: email,
    user_email: email, // Alternative field name
    message: message,
    user_message: message, // Alternative field name
    date: today,
    company_name: 'Inspirovix',
    reply_to: email,
    subject: `New Contact Form Submission from ${name}`,
    // Additional fallback fields
    name: name,
    email: email
  };
  
  console.log('Sending email with params:', templateParams);
  
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again.';
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid service ID')) {
        errorMessage = 'Email service configuration error. Please contact support.';
      } else if (error.message.includes('Invalid template ID')) {
        errorMessage = 'Email template error. Please contact support.';
      } else if (error.message.includes('Invalid public key')) {
        errorMessage = 'Email service authentication error. Please contact support.';
      } else if (error.message.includes('network')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      }
    }
    
    return { 
      success: false, 
      error: errorMessage,
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

export const sendPricingInquiryEmail = async (data: PricingInquiryData) => {
  console.log('Starting pricing inquiry email...', { data });
  
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
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  const templateParams = {
    to_name: "Inspirovix Sales Team",
    plan_name: planName,
    service_name: planName, // Alternative field name
    date: today,
    from_email: email,
    user_email: email, // Alternative field name
    price: price,
    features: features,
    service_features: features, // Alternative field name
    company_name: 'Inspirovix',
    reply_to: email,
    subject: `Pricing Inquiry for ${planName}`,
    // Additional fallback fields
    email: email
  };
  
  console.log('Sending pricing email with params:', templateParams);
  
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.PRICING_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Pricing email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Pricing email sending failed:', error);
    
    let errorMessage = 'Failed to send pricing inquiry. Please try again.';
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid service ID')) {
        errorMessage = 'Email service configuration error. Please contact support.';
      } else if (error.message.includes('Invalid template ID')) {
        errorMessage = 'Email template error. Please contact support.';
      } else if (error.message.includes('network')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      }
    }
    
    return { 
      success: false, 
      error: errorMessage,
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Test function to verify EmailJS configuration
export const testEmailJSConnection = async () => {
  console.log('Testing EmailJS connection...');
  
  const testParams = {
    to_name: "Test",
    from_name: "Test User",
    from_email: "test@example.com",
    message: "This is a test message",
    date: new Date().toLocaleDateString(),
    company_name: 'Inspirovix',
    reply_to: "test@example.com"
  };
  
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
      testParams
    );
    
    console.log('EmailJS test successful:', response);
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS test failed:', error);
    return { success: false, error };
  }
};