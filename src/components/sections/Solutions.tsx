import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Building2, Briefcase, GraduationCap, HeartPulse, Truck } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const Solutions = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const industries = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      title: "E-commerce",
      description: "Automate order processing, inventory management, and customer support.",
      features: ["Order automation", "Inventory tracking", "Customer service bots"]
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "Real Estate",
      description: "Streamline property management and tenant communications.",
      features: ["Property listings", "Tenant portals", "Maintenance tracking"]
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Professional Services",
      description: "Enhance client management and service delivery.",
      features: ["Client portals", "Appointment scheduling", "Document automation"]
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Education",
      description: "Transform learning experiences with smart technology.",
      features: ["Learning platforms", "Student tracking", "Course management"]
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-white" />,
      title: "Healthcare",
      description: "Improve patient care with intelligent systems.",
      features: ["Patient portals", "Appointment scheduling", "Health records"]
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "Logistics",
      description: "Optimize supply chain and delivery operations.",
      features: ["Route optimization", "Inventory tracking", "Delivery management"]
    }
  ];

  return (
    <section id="solutions" className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Industry Solutions
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            Tailored solutions for your industry's unique challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className={`text-xl font-semibold ${styles.text.primary} mb-2`}>
                {industry.title}
              </h3>
              <p className={`${styles.text.secondary} mb-4`}>
                {industry.description}
              </p>
              <ul className="space-y-2">
                {industry.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`text-sm ${styles.text.secondary} flex items-center`}
                  >
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;