import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, CheckCircle, Star, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';
import { allServices } from '../../data/services';

const CustomDevelopment = () => {
  const { theme } = useTheme();
  const styles = themes[theme];
  const [activeTab, setActiveTab] = useState(0);
  const [expandedDivisions, setExpandedDivisions] = useState<number[]>([]);

  const getServiceColor = (index: number) => {
    const colors = [
      "from-blue-500 to-cyan-500",
      "from-green-500 to-emerald-500", 
      "from-indigo-500 to-purple-500",
      "from-purple-500 to-violet-500",
      "from-orange-500 to-amber-500",
      "from-pink-500 to-rose-500",
      "from-red-500 to-pink-500",
      "from-teal-500 to-cyan-500",
      "from-yellow-500 to-orange-500"
    ];
    return colors[index % colors.length];
  };

  const toggleDivision = (index: number) => {
    setExpandedDivisions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const currentService = allServices[activeTab];

  return (
    <section id="services" className={`${styles.background.primary} py-12 md:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className={`text-2xl md:text-4xl font-bold ${styles.text.primary} mb-2 md:mb-4`}>
            Our Services
          </h2>
          <p className={`text-base md:text-xl ${styles.text.secondary} max-w-3xl mx-auto mb-4 md:mb-8`}>
            Comprehensive technology solutions with specialized divisions and expertise areas
          </p>
        </motion.div>

        {/* Service Navigation Tabs - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          {/* Mobile: Dropdown Style */}
          <div className="block md:hidden mb-4">
            <div className={`${styles.background.card} rounded-xl p-4 ${styles.glow.primary}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 bg-gradient-to-br ${getServiceColor(activeTab)} rounded-lg flex items-center justify-center`}>
                    <currentService.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className={`font-semibold ${styles.text.primary}`}>{currentService.name}</span>
                </div>
                <ChevronDown className={`w-5 h-5 ${styles.text.secondary}`} />
              </div>
            </div>
            
            {/* Mobile Service Grid */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {allServices.map((service, index) => (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 ${
                    activeTab === index
                      ? `${styles.button.primary} ${styles.text.primary}`
                      : `${styles.background.card} ${styles.text.secondary} hover:${styles.text.primary}`
                  }`}
                >
                  <div className={`w-6 h-6 bg-gradient-to-br ${getServiceColor(index)} rounded-md flex items-center justify-center`}>
                    <service.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-medium text-xs text-center leading-tight">{service.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal Tabs */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 mb-8">
            {allServices.map((service, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? `${styles.button.primary} ${styles.text.primary} ${styles.glow.primary}`
                    : `${styles.background.card} ${styles.text.secondary} hover:${styles.text.primary} ${styles.glow.primary}`
                }`}
              >
                <div className={`w-6 h-6 bg-gradient-to-br ${getServiceColor(index)} rounded-lg flex items-center justify-center`}>
                  <service.icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-sm">{service.name}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Instruction Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className={`${styles.text.secondary} text-sm italic`}>
              Kindly press the services to see its details
            </p>
          </motion.div>
        </motion.div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`${styles.background.card} rounded-2xl p-4 md:p-8 ${styles.glow.primary} mb-8 md:mb-12`}
          >
            {/* Service Header - Mobile Optimized */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6 md:mb-8">
              <div className={`w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br ${getServiceColor(activeTab)} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto md:mx-0`}>
                <currentService.icon className="w-6 h-6 md:w-10 md:h-10 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h2 className={`text-2xl md:text-4xl font-bold ${styles.text.primary} mb-2`}>
                  {currentService.name}
                </h2>
                <p className={`text-sm md:text-xl ${styles.text.secondary}`}>
                  {currentService.description}
                </p>
              </div>
            </div>

            {/* Mobile: Simplified Overview */}
            <div className="block md:hidden mb-6">
              <div className={`${styles.background.secondary} rounded-xl p-4`}>
                <h3 className={`text-lg font-bold ${styles.text.primary} mb-3`}>
                  What We Offer
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {currentService.divisions.slice(0, 3).map((division, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className={`${styles.text.secondary} text-sm`}>{division.name}</span>
                    </div>
                  ))}
                  {currentService.divisions.length > 3 && (
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span className={`${styles.text.secondary} text-sm`}>
                        +{currentService.divisions.length - 3} more specializations
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop: Full Overview */}
            <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className={`lg:col-span-2 ${styles.background.secondary} rounded-xl p-6`}>
                <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
                  What We Offer
                </h3>
                <div className="space-y-4">
                  <p className={`${styles.text.secondary}`}>
                    Our {currentService.name.toLowerCase()} services encompass a wide range of specialized areas, 
                    each designed to meet specific business requirements and technical challenges.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentService.divisions.map((division, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className={`${styles.text.secondary} text-sm`}>{division.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`${styles.background.secondary} rounded-xl p-6`}>
                <h3 className={`text-xl font-bold ${styles.text.primary} mb-4`}>
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className={`${styles.text.secondary} text-sm`}>Expert team with proven experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className={`${styles.text.secondary} text-sm`}>Latest technologies and best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className={`${styles.text.secondary} text-sm`}>Scalable and maintainable solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className={`${styles.text.secondary} text-sm`}>Ongoing support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Divisions */}
            <div>
              <h3 className={`text-xl md:text-3xl font-bold ${styles.text.primary} mb-4 md:mb-8 text-center`}>
                Service Divisions & Specializations
              </h3>
              
              {/* Mobile: Accordion Style */}
              <div className="block md:hidden space-y-3">
                {currentService.divisions.map((division, divisionIndex) => (
                  <motion.div
                    key={divisionIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: divisionIndex * 0.05 }}
                    className={`${styles.background.secondary} rounded-lg ${styles.glow.primary}`}
                  >
                    <button
                      onClick={() => toggleDivision(divisionIndex)}
                      className="w-full p-4 flex items-center justify-between"
                    >
                      <h4 className={`text-base font-bold ${styles.text.primary} text-left`}>
                        {division.name}
                      </h4>
                      {expandedDivisions.includes(divisionIndex) ? (
                        <ChevronUp className={`w-5 h-5 ${styles.text.secondary}`} />
                      ) : (
                        <ChevronDown className={`w-5 h-5 ${styles.text.secondary}`} />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {expandedDivisions.includes(divisionIndex) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4">
                            <div className="flex flex-wrap gap-1 mb-3">
                              {division.specializations.slice(0, 4).map((specialization, specIndex) => (
                                <span
                                  key={specIndex}
                                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                                    theme === 'dark' 
                                      ? 'bg-violet-500/30 text-violet-200 border border-violet-400/50' 
                                      : 'bg-violet-200 text-violet-800 border border-violet-300'
                                  }`}
                                >
                                  {specialization}
                                </span>
                              ))}
                              {division.specializations.length > 4 && (
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${styles.text.secondary}`}>
                                  +{division.specializations.length - 4} more
                                </span>
                              )}
                            </div>
                            
                            <ActionButton
                              href={`mailto:${contactInfo.email}?subject=${currentService.name} - ${division.name} Inquiry`}
                              icon={<ExternalLink className="w-3 h-3" />}
                              variant="primary"
                            >
                              Get Quote
                            </ActionButton>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Desktop: Grid Layout */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentService.divisions.map((division, divisionIndex) => (
                  <motion.div
                    key={divisionIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: divisionIndex * 0.1 }}
                    className={`${styles.background.secondary} rounded-xl p-6 ${styles.glow.primary}`}
                  >
                    <div className="mb-6">
                      <h4 className={`text-xl font-bold ${styles.text.primary} mb-4`}>
                        {division.name}
                      </h4>
                      
                      <div className="space-y-4">
                        <h5 className={`text-sm font-semibold ${styles.text.secondary} mb-3`}>
                          Specializations:
                        </h5>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {division.specializations.map((specialization, specIndex) => (
                            <span
                              key={specIndex}
                              className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                                theme === 'dark' 
                                  ? 'bg-violet-500/30 text-violet-200 border border-violet-400/50' 
                                  : 'bg-violet-200 text-violet-800 border border-violet-300'
                              }`}
                            >
                              {specialization}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className={`${styles.text.secondary} text-sm`}>
                          Our {division.name.toLowerCase()} team specializes in delivering high-quality solutions 
                          using the latest technologies and industry best practices.
                        </p>
                        
                        <div className={`${styles.background.primary} rounded-lg p-4`}>
                          <h6 className={`text-sm font-semibold ${styles.text.primary} mb-2`}>
                            What We Deliver:
                          </h6>
                          <ul className="space-y-1">
                            <li className={`text-xs ${styles.text.secondary} flex items-center gap-2`}>
                              <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                              Custom solutions tailored to your needs
                            </li>
                            <li className={`text-xs ${styles.text.secondary} flex items-center gap-2`}>
                              <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                              Scalable architecture and clean code
                            </li>
                            <li className={`text-xs ${styles.text.secondary} flex items-center gap-2`}>
                              <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                              Comprehensive testing and documentation
                            </li>
                            <li className={`text-xs ${styles.text.secondary} flex items-center gap-2`}>
                              <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                              Ongoing support and maintenance
                            </li>
                          </ul>
                        </div>
                        
                        <div className="flex gap-2">
                          <ActionButton
                            href={`mailto:${contactInfo.email}?subject=${currentService.name} - ${division.name} Inquiry`}
                            icon={<ExternalLink className="w-4 h-4" />}
                            variant="primary"
                          >
                            Get Quote
                          </ActionButton>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`${styles.background.card} rounded-2xl p-6 md:p-8 text-center ${styles.glow.primary}`}
        >
          <h3 className={`text-xl md:text-3xl font-bold ${styles.text.primary} mb-3 md:mb-4`}>
            Ready to Get Started?
          </h3>
          <p className={`${styles.text.secondary} text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto`}>
            Let's discuss your {currentService.name.toLowerCase()} requirements and create a solution 
            that perfectly fits your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <ActionButton
              href={`mailto:${contactInfo.email}?subject=${currentService.name} Service Inquiry`}
              icon={<ExternalLink className="w-4 h-4 md:w-5 md:h-5" />}
              variant="primary"
            >
              Get Custom Quote
            </ActionButton>
            <ActionButton
              href="#contact"
              icon={<ArrowRight className="w-4 h-4 md:w-5 md:h-5" />}
              variant="secondary"
            >
              Schedule Consultation
            </ActionButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomDevelopment;