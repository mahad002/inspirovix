import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Page Header */}
      <section className={`${styles.background.gradient} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl md:text-6xl font-bold ${styles.text.primary} mb-6`}>
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
            </h1>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
              Ready to transform your business? We'd love to hear from you. Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <Contact />
    </motion.div>
  );
};

export default ContactPage;