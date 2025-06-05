import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

const Contact = React.memo(() => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);

  return (
    <section id="contact" className={`${styles.background.primary} py-20`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Get in Touch
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${styles.background.card} rounded-xl p-8 ${styles.glow.primary}`}
          >
            <h3 className={`text-2xl font-bold ${styles.text.primary} mb-6`}>
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${styles.background.secondary}`}>
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${styles.text.primary}`}>Phone</h4>
                  <p className={`${styles.text.secondary}`}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${styles.background.secondary}`}>
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${styles.text.primary}`}>Email</h4>
                  <p className={`${styles.text.secondary}`}>contact@inspirovix.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${styles.background.secondary}`}>
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold ${styles.text.primary}`}>Location</h4>
                  <p className={`${styles.text.secondary}`}>123 Business Street, Suite 100, City, Country</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${styles.background.card} rounded-xl p-8 ${styles.glow.primary}`}
          >
            <h3 className={`text-2xl font-bold ${styles.text.primary} mb-6`}>
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${styles.text.secondary} mb-2`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 ${styles.background.secondary} border ${styles.border.primary} rounded-lg focus:ring-2 focus:ring-violet-500 ${styles.text.primary}`}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${styles.text.secondary} mb-2`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 ${styles.background.secondary} border ${styles.border.primary} rounded-lg focus:ring-2 focus:ring-violet-500 ${styles.text.primary}`}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${styles.text.secondary} mb-2`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-3 ${styles.background.secondary} border ${styles.border.primary} rounded-lg focus:ring-2 focus:ring-violet-500 ${styles.text.primary}`}
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full px-8 py-4 ${styles.button.primary} rounded-lg ${styles.text.primary} font-semibold flex items-center justify-center gap-2 ${styles.glow.primary}`}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;