import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

const CallToAction = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  return (
    <div className={`relative ${styles.background.primary} py-20 overflow-hidden`}>
      {/* Background rocket image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${styles.text.primary} mb-6`}>
            The Future of Business is Here - Join Inspirovex Today!
          </h2>
          
          <p className={`text-xl ${styles.text.secondary} mb-8 max-w-3xl mx-auto`}>
            At Inspirovex, we don't just offer technology—we offer a smarter way to do business. 
            Whether you're looking to optimize customer interactions, automate sales, or streamline 
            operations, our AI-powered solutions are here to drive your business forward.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 ${styles.button.primary} rounded-lg ${styles.text.primary} font-semibold flex items-center gap-2 mx-auto ${styles.glow.primary}`}
          >
            <Rocket className="w-5 h-5" />
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;