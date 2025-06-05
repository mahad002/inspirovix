import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';
import TypewriterEffect from './TypewriterEffect';

const Hero = React.memo(() => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);

  const heroContent = useMemo(() => ({
    title: "Transform Your Business with InspiroVix",
    subtitle: "Innovative Solutions for Modern Enterprises",
    description: "We help businesses streamline operations, enhance customer experiences, and drive growth through cutting-edge technology solutions.",
    cta: "Get Started",
    features: [
      "Custom Software Development",
      "Digital Transformation",
      "Cloud Solutions",
      "AI & Machine Learning"
    ]
  }), []);

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${styles.text.primary} mb-6`}>
              {heroContent.title}
            </h1>
            <h2 className={`text-2xl md:text-3xl font-semibold ${styles.text.secondary} mb-6`}>
              <TypewriterEffect text={heroContent.subtitle} />
            </h2>
            <p className={`text-lg ${styles.text.secondary} mb-8 max-w-2xl mx-auto lg:mx-0`}>
              {heroContent.description}
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block px-8 py-4 ${styles.button.primary} rounded-lg ${styles.text.primary} font-semibold ${styles.glow.primary}`}
            >
              {heroContent.cta}
            </motion.a>
          </motion.div>

          {/* Right Column - Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${styles.background.card} rounded-xl p-8 ${styles.glow.primary}`}
          >
            <h3 className={`text-2xl font-bold ${styles.text.primary} mb-6`}>
              Our Expertise
            </h3>
            <ul className="space-y-4">
              {heroContent.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex items-center space-x-3 ${styles.text.secondary}`}
                >
                  <svg
                    className="w-6 h-6 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;