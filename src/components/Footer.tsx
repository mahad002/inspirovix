import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';
import { contactInfo, socialLinks, supportNumbers } from '../data/contact';
import { menuItems } from '../data/navigation';

const Footer = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = menuItems.filter(item => item.label !== 'Home' && !item.href.includes('blog'));

  const services = [
    'AI Automation',
    'Web Development',
    'Mobile Development',
    'Blockchain Web 3.0',
    'Social Media Marketing',
    'Cloud & DevOps'
  ];

  return (
    <footer className={`${styles.background.primary} border-t ${styles.border.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://inspirovix.s3.us-east-2.amazonaws.com/Inspirovix+-+11.png" 
                alt="Inspirovix Logo" 
                className="w-10 h-10 object-contain rounded-xl" 
              />
              <span className={`text-xl font-bold ${styles.text.primary}`}>Inspirovix</span>
            </div>
            <p className={`${styles.text.secondary} mb-6 text-sm leading-relaxed`}>
              Revolutionizing business operations through AI-powered automation and innovative technology solutions. 
              Transforming ideas into reality for businesses worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
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
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={`text-lg font-semibold ${styles.text.primary} mb-4`}>Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors text-sm flex items-center gap-2 group`}
                  >
                    <item.icon className="w-4 h-4 group-hover:text-violet-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-lg font-semibold ${styles.text.primary} mb-4`}>Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors text-sm block`}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={`text-lg font-semibold ${styles.text.primary} mb-4`}>Contact Info</h3>
            <div className="space-y-3">
              <div className={`flex items-start gap-3 ${styles.text.secondary} text-sm`}>
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
              
              <a
                href={`mailto:${contactInfo.email}`}
                className={`flex items-center gap-3 ${styles.text.secondary} hover:${styles.text.primary} transition-colors text-sm`}
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {contactInfo.email}
              </a>
              
              <a
                href={`tel:${contactInfo.phone}`}
                className={`flex items-center gap-3 ${styles.text.secondary} hover:${styles.text.primary} transition-colors text-sm`}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {contactInfo.phone}
              </a>
              
              <a
                href={`https://${contactInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 ${styles.text.secondary} hover:${styles.text.primary} transition-colors text-sm`}
              >
                <Globe className="w-4 h-4 flex-shrink-0" />
                {contactInfo.website}
              </a>
            </div>

            {/* Global Support */}
            <div className="mt-6">
              <h4 className={`text-sm font-semibold ${styles.text.primary} mb-3`}>Global Support</h4>
              <div className="space-y-2">
                <a
                  href={`tel:${supportNumbers.pakistan}`}
                  className={`block ${styles.text.secondary} hover:${styles.text.primary} transition-colors text-xs`}
                >
                  Pakistan: {supportNumbers.pakistan}
                </a>
                <a
                  href={`tel:${supportNumbers.middleEast}`}
                  className={`block ${styles.text.secondary} hover:${styles.text.primary} transition-colors text-xs`}
                >
                  Middle East: {supportNumbers.middleEast}
                </a>
                <a
                  href={`tel:${supportNumbers.us}`}
                  className={`block ${styles.text.secondary} hover:${styles.text.primary} transition-colors text-xs`}
                >
                  US: {supportNumbers.us}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className={`py-6 border-t ${styles.border.primary} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${styles.text.secondary} text-sm text-center md:text-left`}
          >
            © {currentYear} Inspirovix. All rights reserved. | Transforming businesses through innovation.
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 ${styles.button.secondary} rounded-lg ${styles.text.secondary} hover:${styles.text.primary} transition-colors text-sm`}
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>

        {/* Security & Trust Indicators */}
        <div className={`py-4 border-t ${styles.border.primary}`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${styles.text.secondary} text-xs text-center flex flex-wrap justify-center items-center gap-4`}
          >
            <span className="flex items-center gap-1">
              🔒 SSL Secured
            </span>
            <span className="flex items-center gap-1">
              🛡️ Privacy Protected
            </span>
            <span className="flex items-center gap-1">
              ⚡ 99.9% Uptime
            </span>
            <span className="flex items-center gap-1">
              🌍 Global Support
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;