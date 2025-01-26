import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ShoppingCart, Bot, Calendar, Zap, Shield } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

const Services = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const services = [
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "AI-Powered Customer Interaction",
      description: "Advanced text-to-speech and speech-to-text models for seamless customer communication."
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      title: "Smart Order Management",
      description: "Efficient order processing with automated confirmations and fraud detection."
    },
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      title: "Automated Support System",
      description: "24/7 AI-powered customer support with intelligent escalation."
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Calendar Integration",
      description: "Seamless scheduling and meeting management across platforms."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Process Automation",
      description: "End-to-end automation of repetitive business tasks."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with regulatory compliance."
    }
  ];

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
            Comprehensive AI-powered solutions to transform your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.background.card} rounded-xl p-6 ${styles.background.cardHover} transition-all duration-300 ${styles.glow.primary}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className={`text-xl font-semibold ${styles.text.primary} mb-2`}>{service.title}</h3>
              <p className={styles.text.secondary}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;