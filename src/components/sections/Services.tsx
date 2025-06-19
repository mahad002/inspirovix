import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { servicesData, serviceIcons } from '../../data/servicesData';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';

const Services = () => {
  const { theme } = useTheme();
  const styles = themes[theme];
  const [showAllServices, setShowAllServices] = useState(false);

  // Show only first 5 services initially
  const displayedServices = showAllServices ? servicesData.services : servicesData.services.slice(0, 5);

  return (
    <section id="services" className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>Our Services</h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            Comprehensive technology solutions to transform your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => {
            const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-6 ${styles.background.cardHover} transition-all duration-300 ${styles.glow.primary} group cursor-pointer`}
                onClick={() => {
                  // Scroll to dedicated services section or navigate
                  const servicesSection = document.getElementById('detailed-services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${styles.text.primary} mb-2 group-hover:text-violet-400 transition-colors`}>
                  {service.name}
                </h3>
                <p className={`${styles.text.secondary} mb-4`}>
                  {service.sub_services.length} specialized sub-services available
                </p>
                <div className="flex items-center gap-2 text-violet-400 group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See More Button */}
        {!showAllServices && servicesData.services.length > 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAllServices(true)}
              className={`px-8 py-4 ${styles.button.primary} rounded-lg ${styles.text.primary} font-semibold flex items-center gap-2 mx-auto ${styles.glow.primary} hover:scale-105 transition-transform`}
            >
              See More Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className={`${styles.background.card} rounded-xl p-8 ${styles.glow.primary}`}>
            <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
              Ready to Transform Your Business?
            </h3>
            <p className={`${styles.text.secondary} text-lg mb-6 max-w-2xl mx-auto`}>
              Let's discuss your project requirements and create a solution that perfectly fits your needs.
            </p>
            <ActionButton
              href={`mailto:${contactInfo.email}?subject=Service Inquiry`}
              icon={<ExternalLink className="w-5 h-5" />}
              variant="primary"
            >
              Get Started Today
            </ActionButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;