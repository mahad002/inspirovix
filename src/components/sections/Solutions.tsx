import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Building2, Briefcase, GraduationCap, HeartPulse, Truck } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const Solutions = React.memo(() => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);

  // Memoized industries data
  const industries = useMemo(() => [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Automate order processing, inventory management, and customer support.",
      features: ["Order automation", "Inventory tracking", "Customer service bots"]
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Streamline property management and tenant communications.",
      features: ["Property listings", "Tenant portals", "Maintenance tracking"]
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Enhance client management and service delivery.",
      features: ["Client portals", "Appointment scheduling", "Document automation"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Transform learning experiences with smart technology.",
      features: ["Learning platforms", "Student tracking", "Course management"]
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      description: "Improve patient care with intelligent systems.",
      features: ["Patient portals", "Appointment scheduling", "Health records"]
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Optimize supply chain and delivery operations.",
      features: ["Route optimization", "Inventory tracking", "Delivery management"]
    }
  ], []);

  // Memoized section content
  const sectionContent = useMemo(() => ({
    title: "Industry Solutions",
    subtitle: "Tailored solutions for your industry's unique challenges"
  }), []);

  // Memoized industry cards
  const industryCards = useMemo(() => 
    industries.map((industry, index) => (
      <motion.div
        key={`industry-${index}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary} hover:scale-105 transition-transform duration-300`}
        style={{ willChange: 'transform' }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4">
          <industry.icon className="w-6 h-6 text-white" />
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
    )), [industries, styles]);

  return (
    <section id="solutions" className={`${styles.background.primary} py-20 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            {sectionContent.title}
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            {sectionContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryCards}
        </div>
      </div>
    </section>
  );
});

Solutions.displayName = 'Solutions';

export default Solutions;