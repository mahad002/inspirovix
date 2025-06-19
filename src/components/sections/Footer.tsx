import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Instagram, Globe, Facebook } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { contactInfo, socialLinks, supportNumbers } from '../../data/contact';
import { menuItems } from '../../data/navigation';

const Footer = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const footerSections = [
    {
      title: "About Us",
      links: [
        { name: "Our Story", href: "#about" },
        { name: "Our Services", href: "#services" },
        { name: "Our Projects", href: "#case-studies" },
        { name: "Our Team", href: "#about" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "AI Automation", href: "#ai-automation" },
        { name: "Web Development", href: "#services" },
        { name: "Mobile Development", href: "#services" },
        { name: "Blockchain Web 3.0", href: "#services" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blogs", href: "#blog" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Pricing", href: "#pricing" },
        { name: "Careers", href: "#about" }
      ]
    }
  ];

  return (
    <footer className={`${styles.background.primary} border-t ${styles.border.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://inspirovix.s3.us-east-2.amazonaws.com/Inspirovix+-+11.png" 
                  alt="Inspirovix Logo" 
                  className="w-10 h-10 object-contain rounded-xl" 
                />
                <span className={`text-2xl font-bold ${styles.text.primary}`}>Inspirovix</span>
              </div>
              <p className={`${styles.text.secondary} mb-6 max-w-md`}>
                Revolutionizing business operations through AI-powered automation and innovative technology solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className={`w-5 h-5 ${styles.text.primary}`} />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className={`w-5 h-5 ${styles.text.primary}`} />
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className={`w-5 h-5 ${styles.text.primary} mt-0.5`} />
                  <span className={`${styles.text.secondary} text-sm`}>
                    {contactInfo.address}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className={`text-lg font-semibold ${styles.text.primary} mb-4`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors flex items-center group`}
                    >
                      {link.name}
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Us Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${styles.background.card} rounded-xl p-6 mb-8 ${styles.glow.primary}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className={`text-xl font-bold ${styles.text.primary} mb-2`}>
                Ready to Transform Your Business?
              </h3>
              <p className={`${styles.text.secondary}`}>
                Get in touch with our experts to discuss your project requirements.
              </p>
            </div>
            <motion.a
              href={`mailto:${contactInfo.email}?subject=Business Inquiry`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 ${styles.button.primary} rounded-lg ${styles.text.primary} font-semibold flex items-center gap-2 ${styles.glow.primary} whitespace-nowrap`}
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`pt-8 border-t ${styles.border.primary}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className={`${styles.text.secondary} text-sm`}>
              © {new Date().getFullYear()} Inspirovix. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className={`${styles.text.secondary} text-sm mr-2`}>Follow us:</span>
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
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className={`w-10 h-10 ${styles.background.card} rounded-lg flex items-center justify-center ${styles.text.secondary} hover:${styles.text.primary} transition-colors ${styles.glow.primary}`}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Global Support Numbers */}
            <div className="flex flex-col md:flex-row gap-2 text-xs">
              <span className={`${styles.text.secondary}`}>Global Support:</span>
              <div className="flex gap-4">
                <a href={`tel:${supportNumbers.pakistan}`} className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors`}>
                  PK: {supportNumbers.pakistan}
                </a>
                <a href={`tel:${supportNumbers.middleEast}`} className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors`}>
                  ME: {supportNumbers.middleEast}
                </a>
                <a href={`tel:${supportNumbers.us}`} className={`${styles.text.secondary} hover:${styles.text.primary} transition-colors`}>
                  US: {supportNumbers.us}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;