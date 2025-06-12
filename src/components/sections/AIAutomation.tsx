import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Workflow, Zap } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';
import { features, benefits } from '../../data/aiAutomation';

const AIAutomation = () => {
  const { theme } = useTheme();
  const styles = themes[theme];
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="ai-automation" className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`text-5xl md:text-6xl font-bold ${styles.text.primary} mb-4 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Your AI operations. One platform.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`text-2xl md:text-3xl ${styles.text.secondary} transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              With AI-powered automation at its core.
            </motion.p>
          </div>
        </div>

        {/* Main Platform Visualization */}
        <div className="flex-1 flex items-center justify-center px-6 mb-20">
          <div className="w-full max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`relative bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 rounded-3xl p-16 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } shadow-2xl border border-violet-500/20`}
              style={{ minHeight: '500px' }}
            >
              {/* Grid Background */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path 
                          d="M 40 0 L 0 0 0 40" 
                          fill="none" 
                          stroke="#8B5CF6" 
                          strokeWidth="1" 
                          opacity="0.3"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
              </div>

              {/* Central Inspirovix Core */}
              <div className="relative flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-56 h-24 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-2xl mb-20 border-2 border-violet-400/30"
                >
                  <span className="text-white text-3xl font-bold italic">Inspirovix</span>
                </motion.div>

                {/* Connecting Lines - Fixed positioning */}
                <svg 
                  className="absolute top-24 left-1/2 transform -translate-x-1/2 pointer-events-none"
                  width="100%" 
                  height="240"
                  viewBox="0 0 1000 240"
                  style={{ maxWidth: '1000px' }}
                >
                  {features.map((_, index) => {
                    // Calculate exact positions
                    const centerX = 500; // Center of viewBox
                    const centerY = 0;   // Top of the lines (bottom of Inspirovix box)
                    
                    // Calculate service box positions
                    const totalBoxes = features.length;
                    const boxSpacing = 180; // Space between box centers
                    const totalWidth = (totalBoxes - 1) * boxSpacing;
                    const startX = centerX - (totalWidth / 2);
                    const boxCenterX = startX + (index * boxSpacing);
                    const boxCenterY = 220; // Bottom of the lines (center of service boxes)
                    
                    // Control point for smooth curve
                    const controlY = 110;
                    
                    return (
                      <motion.path
                        key={index}
                        d={`M ${centerX} ${centerY} Q ${centerX} ${controlY} ${boxCenterX} ${boxCenterY}`}
                        stroke="#8B5CF6"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.7 + index * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Service Boxes - Positioned to match line endpoints */}
                <div className="flex justify-center items-center mt-32 w-full max-w-4xl mx-auto">
                  <div className="grid grid-cols-4 gap-8 w-full justify-items-center">
                    {features.map((feature, index) => {
                      const gradients = [
                        'from-violet-600 to-violet-700',
                        'from-purple-600 to-purple-700', 
                        'from-fuchsia-600 to-fuchsia-700',
                        'from-pink-600 to-pink-700'
                      ];

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20, scale: 0.75 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.8 + index * 0.1,
                          }}
                          whileHover={{ scale: 1.05, y: -8 }}
                          className={`group w-36 h-36 bg-gradient-to-br ${gradients[index]} rounded-2xl border-2 border-violet-400/30 flex flex-col items-center justify-center shadow-xl transition-all duration-300 cursor-pointer relative hover:shadow-2xl hover:border-violet-300/50 p-4`}
                        >
                          <feature.icon className="w-10 h-10 text-white mb-2 transition-all duration-300 group-hover:scale-110" />
                          <span className="text-white text-sm font-semibold text-center leading-tight">
                            {feature.title}
                          </span>
                          
                          {/* Tooltip on hover */}
                          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none min-w-[200px] z-10">
                            <p className="text-white text-xs text-center">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} mb-12`}>
            Transform Your Business Operations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary}`}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text mb-2">
                  {benefit.value}
                </div>
                <h4 className={`text-xl font-semibold ${styles.text.primary} mb-2`}>
                  {benefit.title}
                </h4>
                <p className={styles.text.secondary}>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ActionButton
              href={`mailto:${contactInfo.email}?subject=AI Automation Inquiry`}
              icon={<Bot className="w-5 h-5" />}
              variant="primary"
            >
              Get Started
            </ActionButton>
            <ActionButton
              href="#case-studies"
              icon={<Zap className="w-5 h-5" />}
              variant="secondary"
            >
              See Results
            </ActionButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAutomation;