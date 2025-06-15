import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ShoppingCart, Headphones, Calendar } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

const Features = React.memo(() => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);

  const features = useMemo(() => [
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
      icon: <Headphones className="w-6 h-6 text-white" />,
      title: "Enhanced Support System",
      description: "Instant issue resolution with AI-driven escalation handling."
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Calendar Management",
      description: "Seamless integration with Google Calendar and communication tools."
    }
  ], []);

  return (
    <div className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            How Inspirovex Automates Business Workflows
          </h2>
          <p className={`${styles.text.secondary} max-w-2xl mx-auto`}>
            Our AI-powered solutions streamline your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

Features.displayName = 'Features';

export default Features;