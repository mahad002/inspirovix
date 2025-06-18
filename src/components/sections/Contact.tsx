import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Globe, Mail, Linkedin, Instagram, Clock } from 'lucide-react';
import { sendContactEmail } from '../../utils/emailService';
import { contactInfo, socialLinks, supportNumbers } from '../../data/contact';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const Contact = () => {
  const { theme } = useTheme();
  const styles = themes[theme];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  return (
    <section id="contact" className={`${styles.background.primary} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className={`text-3xl font-bold ${styles.text.primary} mb-2`}>Get in Touch</h2>
          <p className={`${styles.text.secondary}`}>Ready to revolutionize your business? Let's connect!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="space-y-3">
              <motion.a
                href={`https://${contactInfo.website}`}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-4 ${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
              >
                <div className={`w-10 h-10 ${styles.background.card} rounded-lg flex items-center justify-center ${styles.glow.primary}`}>
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-sm">Website</span>
                  <span className="text-sm">{contactInfo.website}</span>
                </div>
              </motion.a>
              
              <motion.a
                href={`tel:${contactInfo.phone}`}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-4 ${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
              >
                <div className={`w-10 h-10 ${styles.background.card} rounded-lg flex items-center justify-center ${styles.glow.primary}`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-sm">Phone</span>
                  <span className="text-sm">{contactInfo.phone}</span>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-4 ${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
              >
                <div className={`w-10 h-10 ${styles.background.card} rounded-lg flex items-center justify-center ${styles.glow.primary}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-semibold text-sm">Office Address</span>
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </motion.div>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-4 ${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
              >
                <div className={`w-10 h-10 ${styles.background.card} rounded-lg flex items-center justify-center ${styles.glow.primary}`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-sm">Email</span>
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
              </motion.a>
            </div>

            {/* Support Numbers */}
            <div className={`pt-4 border-t ${styles.border.primary}`}>
              <h3 className={`text-lg font-semibold ${styles.text.primary} mb-3`}>Global Support</h3>
              <div className="space-y-2">
                <motion.a
                  href={`tel:${supportNumbers.pakistan}`}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 ${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
                >
                  <div className={`w-8 h-8 ${styles.background.card} rounded-lg flex items-center justify-center ${styles.glow.primary}`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs">Pakistan Support</span>
                    <span className="text-sm">{supportNumbers.pakistan}</span>
                  </div>
                </motion.a>
                
                <motion.a
                  href={`tel:${supportNumbers.middleEast}`}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 ${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
                >
                  <div className={`w-8 h-8 ${styles.background.card} rounded-lg flex items-center justify-center ${styles.glow.primary}`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs">Middle East Office</span>
                    <span className="text-sm">{supportNumbers.middleEast}</span>
                  </div>
                </motion.a>
                
                <motion.a
                  href={`tel:${supportNumbers.us}`}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 ${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
                >
                  <div className={`w-8 h-8 ${styles.background.card} rounded-lg flex items-center justify-center ${styles.glow.primary}`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-xs">US Office</span>
                    <span className="text-sm">{supportNumbers.us}</span>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Social Media Links - Compact */}
            <div className={`pt-4 border-t ${styles.border.primary}`}>
              <h3 className={`text-lg font-semibold ${styles.text.primary} mb-3`}>Connect With Us</h3>
              <div className="flex gap-3">
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 ${styles.background.card} rounded-lg flex items-center justify-center ${styles.text.secondary} hover:${styles.text.primary} transition-colors ${styles.glow.primary}`}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 ${styles.background.card} rounded-lg flex items-center justify-center ${styles.text.secondary} hover:${styles.text.primary} transition-colors ${styles.glow.primary}`}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className={`space-y-4 ${styles.background.card} p-6 rounded-xl ${styles.glow.primary}`}
          >
            <h3 className={`text-xl font-bold ${styles.text.primary} mb-4`}>Send Us a Message</h3>
            
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${styles.text.secondary} mb-2`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-3 py-2 ${styles.background.secondary} border ${styles.border.primary} rounded-lg focus:ring-2 focus:ring-violet-500 ${styles.text.primary}`}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${styles.text.secondary} mb-2`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3 py-2 ${styles.background.secondary} border ${styles.border.primary} rounded-lg focus:ring-2 focus:ring-violet-500 ${styles.text.primary}`}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${styles.text.secondary} mb-2`}>
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className={`w-full px-3 py-2 ${styles.background.secondary} border ${styles.border.primary} rounded-lg focus:ring-2 focus:ring-violet-500 ${styles.text.primary}`}
                required
                disabled={status === 'sending'}
              />
            </div>

            {status === 'error' && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}

            {status === 'success' && (
              <div className="text-green-500 text-sm">Message sent successfully!</div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === 'sending'}
              className={`w-full px-6 py-3 ${styles.button.primary} rounded-lg ${styles.text.primary} font-semibold flex items-center justify-center gap-2 ${
                status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
              } ${styles.glow.primary}`}
            >
              <Send className="w-5 h-5" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;