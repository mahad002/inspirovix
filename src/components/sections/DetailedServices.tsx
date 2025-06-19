import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Mail, ArrowLeft } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { servicesData, serviceIcons } from '../../data/servicesData';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';

const DetailedServices = () => {
  const { theme } = useTheme();
  const styles = themes[theme];
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [expandedSubService, setExpandedSubService] = useState<string | null>(null);

  const toggleService = (serviceName: string) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
    setExpandedSubService(null); // Reset sub-service when changing main service
  };

  const toggleSubService = (subServiceName: string) => {
    setExpandedSubService(expandedSubService === subServiceName ? null : subServiceName);
  };

  return (
    <section id="detailed-services" className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <button
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`inline-flex items-center gap-2 ${styles.text.secondary} hover:${styles.text.primary} transition-colors mb-6`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services Overview
          </button>
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Detailed Service Offerings
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            Explore our comprehensive range of technology solutions and specialized services
          </p>
        </motion.div>

        <div className="space-y-6">
          {servicesData.services.map((service, serviceIndex) => {
            const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons];
            const isExpanded = expandedService === service.name;

            return (
              <motion.div
                key={serviceIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                className={`${styles.background.card} rounded-xl overflow-hidden ${styles.glow.primary}`}
              >
                {/* Service Header */}
                <button
                  onClick={() => toggleService(service.name)}
                  className={`w-full p-6 flex items-center justify-between hover:${styles.background.cardHover} transition-colors`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className={`text-2xl font-bold ${styles.text.primary}`}>
                        {service.name}
                      </h3>
                      <p className={`${styles.text.secondary}`}>
                        {service.sub_services.length} specialized services
                      </p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 ${styles.text.primary} transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Service Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-6 border-t ${styles.border.primary}`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                          {service.sub_services.map((subService, subIndex) => (
                            <div
                              key={subIndex}
                              className={`${styles.background.secondary} rounded-lg p-4 border ${styles.border.primary}`}
                            >
                              <button
                                onClick={() => toggleSubService(`${service.name}-${subService.name}`)}
                                className="w-full flex items-center justify-between mb-3"
                              >
                                <h4 className={`text-lg font-semibold ${styles.text.primary} text-left`}>
                                  {subService.name}
                                </h4>
                                <ChevronRight 
                                  className={`w-5 h-5 ${styles.text.secondary} transition-transform ${
                                    expandedSubService === `${service.name}-${subService.name}` ? 'rotate-90' : ''
                                  }`} 
                                />
                              </button>
                              
                              <AnimatePresence>
                                {expandedSubService === `${service.name}-${subService.name}` && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <ul className="space-y-2">
                                      {subService.solutions.map((solution, solutionIndex) => (
                                        <li
                                          key={solutionIndex}
                                          className={`flex items-start gap-2 ${styles.text.secondary}`}
                                        >
                                          <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0" />
                                          <span className="text-sm">{solution}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>

                        {/* Service CTA */}
                        <div className="mt-6 text-center">
                          <ActionButton
                            href={`mailto:${contactInfo.email}?subject=${service.name} Service Inquiry`}
                            icon={<Mail className="w-4 h-4" />}
                            variant="secondary"
                          >
                            Inquire about {service.name}
                          </ActionButton>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Overall CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className={`${styles.background.card} rounded-xl p-8 ${styles.glow.primary}`}>
            <h3 className={`text-3xl font-bold ${styles.text.primary} mb-4`}>
              Ready to Get Started?
            </h3>
            <p className={`${styles.text.secondary} text-lg mb-6 max-w-2xl mx-auto`}>
              Contact us to discuss your specific requirements and get a customized solution 
              that fits your business needs perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ActionButton
                href={`mailto:${contactInfo.email}?subject=General Service Inquiry`}
                icon={<Mail className="w-5 h-5" />}
                variant="primary"
              >
                Contact Our Team
              </ActionButton>
              <ActionButton
                href="#contact"
                icon={<ChevronDown className="w-5 h-5" />}
                variant="secondary"
              >
                Get a Quote
              </ActionButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedServices;