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
  console.log('Starting email send process...', { data });
  
  // Basic validation only
  const { name, email, message } = data;
  
  if (!name.trim() || !email.trim() || !message.trim()) {
    return { 
      success: false, 
      error: 'Please fill in all required fields.'
    };
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { 
      success: false, 
      error: 'Please enter a valid email address.'
    };
  }
  
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
    from_name: name.trim(),
    from_email: email.trim(),
    user_email: email.trim(),
    message: message.trim(),
    user_message: message.trim(),
    date: today,
    company_name: 'Inspirovix',
    reply_to: email.trim(),
    subject: `New Contact Form Submission from ${name.trim()}`,
    name: name.trim(),
    email: email.trim()
  };
  
  console.log('Sending email with params:', templateParams);
  
  try {
    const response = await emailjs.send(
      "service_inspirovix",
      "template_contact",
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
  
  // Basic validation only
  const { planName, price, features, email } = data;
  
  if (!planName.trim() || !email.trim()) {
    return { 
      success: false, 
      error: 'Please fill in all required fields.'
    };
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { 
      success: false, 
      error: 'Please enter a valid email address.'
    };
  }
  
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  const templateParams = {
    to_name: "Inspirovix Sales Team",
    plan_name: planName.trim(),
    service_name: planName.trim(),
    date: today,
    from_email: email.trim(),
    user_email: email.trim(),
    price: price.trim(),
    features: features.trim(),
    service_features: features.trim(),
    company_name: 'Inspirovix',
    reply_to: email.trim(),
    subject: `Pricing Inquiry for ${planName.trim()}`,
    email: email.trim()
  };
  
  console.log('Sending pricing email with params:', templateParams);
  
  try {
    const response = await emailjs.send(
      "service_inspirovix",
      "template_pricing",
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
      "service_inspirovix",
      "template_contact",
      testParams
    );
    
    console.log('EmailJS test successful:', response);
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS test failed:', error);
    return { success: false, error };
  }
};