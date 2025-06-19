import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';
import { allServices } from '../data/services';
import { ActionButton } from '../components/ui/ActionButton';
import { contactInfo } from '../data/contact';

// Import components directly
import Footer from '../components/sections/Footer';
import Contact from '../components/sections/Contact';

const ServicesPage = () => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);
  const [activeTab, setActiveTab] = useState(0);
  const [activeDivision, setActiveDivision] = useState<number | null>(null);

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

  const currentService = allServices[activeTab];

  return (
    <div className={`min-h-screen ${styles.background.primary} pt-20`}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 ${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </motion.a>
          </div>
          
          <h1 className={`text-5xl font-bold ${styles.text.primary} mb-6`}>
            Our Services
          </h1>
          <p className={`text-xl ${styles.text.secondary} max-w-4xl mx-auto`}>
            Comprehensive technology solutions with specialized divisions and expertise areas. 
            From AI automation to blockchain development, we deliver cutting-edge solutions 
            tailored to your business needs.
          </p>
        </motion.div>

        {/* Service Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {allServices.map((service, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveTab(index);
                  setActiveDivision(null);
                }}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? `${styles.button.primary} ${styles.text.primary} ${styles.glow.primary}`
                    : `${styles.background.card} ${styles.text.secondary} hover:${styles.text.primary} ${styles.glow.primary}`
                }`}
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${getServiceColor(index)} rounded-lg flex items-center justify-center`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold">{service.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`${styles.background.card} rounded-2xl p-8 ${styles.glow.primary} mb-12`}
          >
            {/* Service Header */}
            <div className="flex items-center gap-6 mb-8">
              <div className={`w-20 h-20 bg-gradient-to-br ${getServiceColor(activeTab)} rounded-2xl flex items-center justify-center`}>
                <currentService.icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className={`text-4xl font-bold ${styles.text.primary} mb-2`}>
                  {currentService.name}
                </h2>
                <p className={`text-xl ${styles.text.secondary}`}>
                  {currentService.description}
                </p>
              </div>
            </div>

            {/* Service Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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
                    {currentService.divisions.slice(0, 4).map((division, index) => (
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
              <h3 className={`text-3xl font-bold ${styles.text.primary} mb-8 text-center`}>
                Service Divisions & Specializations
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentService.divisions.map((division, divisionIndex) => (
                  <motion.div
                    key={divisionIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: divisionIndex * 0.1 }}
                    className={`${styles.background.secondary} rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      activeDivision === divisionIndex ? `ring-2 ring-violet-500 ${styles.glow.accent}` : styles.glow.primary
                    }`}
                    onClick={() => setActiveDivision(activeDivision === divisionIndex ? null : divisionIndex)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className={`text-xl font-bold ${styles.text.primary}`}>
                        {division.name}
                      </h4>
                      <motion.div
                        animate={{ rotate: activeDivision === divisionIndex ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className={`w-5 h-5 ${styles.text.secondary}`} />
                      </motion.div>
                    </div>
                    
                    <div className="space-y-3">
                      <h5 className={`text-sm font-semibold ${styles.text.secondary} mb-3`}>
                        Specializations:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {division.specializations.slice(0, activeDivision === divisionIndex ? undefined : 3).map((specialization, specIndex) => (
                          <span
                            key={specIndex}
                            className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                              theme === 'dark' 
                                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' 
                                : 'bg-violet-100 text-violet-700 border border-violet-200'
                            } transition-all duration-300 hover:scale-105`}
                          >
                            {specialization}
                          </span>
                        ))}
                        {activeDivision !== divisionIndex && division.specializations.length > 3 && (
                          <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${styles.text.secondary} border ${styles.border.primary}`}>
                            +{division.specializations.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <AnimatePresence>
                      {activeDivision === divisionIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-violet-500/30"
                        >
                          <p className={`${styles.text.secondary} text-sm mb-4`}>
                            Our {division.name.toLowerCase()} team specializes in delivering high-quality solutions 
                            using the latest technologies and industry best practices.
                          </p>
                          <div className="flex gap-2">
                            <ActionButton
                              href={`mailto:${contactInfo.email}?subject=${currentService.name} - ${division.name} Inquiry`}
                              icon={<ExternalLink className="w-4 h-4" />}
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
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`${styles.background.card} rounded-2xl p-8 ${styles.glow.primary} mb-12`}
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} text-center mb-12`}>
            Our Development Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Understanding your requirements, analyzing needs, and defining project scope with detailed documentation."
              },
              {
                step: "02",
                title: "Planning & Design",
                description: "Architecture design, technology selection, timeline planning, and creating detailed project roadmap."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Agile development with continuous integration, regular testing, and quality assurance throughout."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Production deployment, performance monitoring, documentation, and ongoing maintenance support."
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-center group`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${getServiceColor(index)} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h4 className={`text-xl font-semibold ${styles.text.primary} mb-3`}>
                  {phase.title}
                </h4>
                <p className={`${styles.text.secondary} text-sm`}>
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`${styles.background.card} rounded-2xl p-8 text-center ${styles.glow.primary}`}
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} mb-4`}>
            Ready to Get Started?
          </h3>
          <p className={`${styles.text.secondary} text-lg mb-8 max-w-2xl mx-auto`}>
            Let's discuss your {currentService.name.toLowerCase()} requirements and create a solution 
            that perfectly fits your business needs and technical specifications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ActionButton
              href={`mailto:${contactInfo.email}?subject=${currentService.name} Service Inquiry`}
              icon={<ExternalLink className="w-5 h-5" />}
              variant="primary"
            >
              Get Custom Quote
            </ActionButton>
            <ActionButton
              href="/#contact"
              icon={<ArrowRight className="w-5 h-5" />}
              variant="secondary"
            >
              Schedule Consultation
            </ActionButton>
          </div>
        </motion.div>
      </div>
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;