import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';
import { allServices } from '../../data/services';

const CustomDevelopment = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

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
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Our Services
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            Comprehensive technology solutions with specialized divisions and expertise areas
          </p>
        </motion.div>

        {/* Service Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 mb-16">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.background.card} rounded-xl p-4 text-center ${styles.glow.primary} group hover:scale-105 transition-all duration-300`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${getServiceColor(index)} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-sm font-semibold ${styles.text.primary} group-hover:text-violet-400 transition-colors leading-tight`}>
                {service.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Detailed Services with Divisions & Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} text-center mb-12`}>
            Service Divisions & Specializations
          </h3>
          
          <div className="space-y-12">
            {allServices.map((service, serviceIndex) => (
              <motion.div
                key={serviceIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                className={`${styles.background.card} rounded-xl p-8 ${styles.glow.primary} border-l-4 border-violet-500`}
              >
                {/* Service Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${getServiceColor(serviceIndex)} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className={`text-3xl font-bold ${styles.text.primary}`}>
                      {service.name}
                    </h4>
                    <p className={`${styles.text.secondary} text-lg mt-1`}>
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Divisions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.divisions.map((division, divisionIndex) => (
                    <div 
                      key={divisionIndex} 
                      className={`${styles.background.secondary} rounded-lg p-6 hover:bg-violet-500/10 transition-colors border ${styles.border.primary}`}
                    >
                      <h5 className={`font-bold ${styles.text.primary} mb-4 text-lg`}>
                        {division.name}
                      </h5>
                      
                      {/* Specializations */}
                      <div className="space-y-2">
                        <h6 className={`text-sm font-semibold ${styles.text.secondary} mb-3`}>
                          Specializations:
                        </h6>
                        <div className="flex flex-wrap gap-2">
                          {division.specializations.map((specialization, specIndex) => (
                            <span
                              key={specIndex}
                              className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                                theme === 'dark' 
                                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' 
                                  : 'bg-violet-100 text-violet-700 border border-violet-200'
                              } hover:scale-105 transition-transform cursor-default`}
                            >
                              {specialization}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} text-center mb-12`}>
            Our Development Process
          </h3>
          <div className="relative">
            <div className={`absolute top-1/2 left-0 right-0 h-1 ${styles.background.card}`} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Discovery & Analysis",
                  description: "Understanding requirements, analyzing needs, and defining project scope"
                },
                {
                  step: "2",
                  title: "Planning & Design",
                  description: "Architecture design, technology selection, and detailed project roadmap"
                },
                {
                  step: "3",
                  title: "Development & Testing",
                  description: "Agile development with continuous testing and quality assurance"
                },
                {
                  step: "4",
                  title: "Deployment & Support",
                  description: "Production deployment, monitoring, and ongoing maintenance support"
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${styles.background.card} rounded-xl p-6 relative ${styles.glow.primary} hover:scale-105 transition-transform`}
                >
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Phase {phase.step}
                  </div>
                  <div className="mt-4">
                    <h4 className={`text-xl font-semibold ${styles.text.primary} mb-3`}>
                      {phase.title}
                    </h4>
                    <p className={`${styles.text.secondary} text-sm`}>
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

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
              Let's discuss your requirements and create solutions that perfectly fit your business needs across all our specialized service areas.
            </p>
            <ActionButton
              href={`mailto:${contactInfo.email}?subject=Services Inquiry`}
              icon={<Code className="w-5 h-5" />}
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

export default CustomDevelopment;