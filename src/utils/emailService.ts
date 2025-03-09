import emailjs from '@emailjs/browser';

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
  const { name, email, message } = data;
  
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
  const { planName, price, features, email } = data;
  
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