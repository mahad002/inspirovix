import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
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
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Our Services
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto mb-8`}>
            Comprehensive technology solutions across multiple domains and specializations
          </p>
          
          {/* View Detailed Services Button at Top */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <ActionButton
              href="/services-details"
              icon={<ExternalLink className="w-5 h-5" />}
              variant="primary"
            >
              View Detailed Services & Specializations
            </ActionButton>
          </motion.div>
        </motion.div>

        {/* Service Categories Overview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 mb-16">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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

        {/* Service Highlights - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {allServices.slice(0, 6).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary} hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${getServiceColor(index)} rounded-lg flex items-center justify-center`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${styles.text.primary}`}>
                  {service.name}
                </h3>
              </div>
              <p className={`${styles.text.secondary} mb-4`}>
                {service.description}
              </p>
              
              {/* Show only first 3 divisions as preview */}
              <div className="space-y-2">
                <h4 className={`text-sm font-semibold ${styles.text.secondary} mb-2`}>
                  Key Areas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.divisions.map((division, divIndex) => (
                    <span
                      key={divIndex}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        theme === 'dark' 
                          ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' 
                          : 'bg-violet-100 text-violet-700 border border-violet-200'
                      }`}
                    >
                      {division.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} mb-8`}>
            Why Choose Our Services?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Teams",
                description: "Specialized professionals in each technology domain"
              },
              {
                title: "Latest Technologies",
                description: "Cutting-edge tools and frameworks for modern solutions"
              },
              {
                title: "Scalable Solutions",
                description: "Built to grow with your business requirements"
              },
              {
                title: "Full Support",
                description: "Comprehensive support from development to deployment"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary}`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${getServiceColor(index)} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className={`text-lg font-semibold ${styles.text.primary} mb-2`}>
                  {benefit.title}
                </h4>
                <p className={`${styles.text.secondary} text-sm`}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className={`${styles.background.card} rounded-xl p-8 ${styles.glow.primary}`}>
            <h3 className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
              Ready to Start Your Project?
            </h3>
            <p className={`${styles.text.secondary} text-lg mb-6 max-w-2xl mx-auto`}>
              Explore our detailed services page to learn about our comprehensive offerings, 
              or get in touch to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ActionButton
                href="/services-details"
                icon={<ExternalLink className="w-5 h-5" />}
                variant="primary"
              >
                Explore All Services
              </ActionButton>
              <ActionButton
                href={`mailto:${contactInfo.email}?subject=Services Inquiry`}
                icon={<Code className="w-5 h-5" />}
                variant="secondary"
              >
                Get Started Today
              </ActionButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomDevelopment;