import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Workflow, Zap, Brain, Mic, Phone, Calendar, Shield, Database } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';

const AIAutomation = () => {
  const { theme } = useTheme();
  const styles = themes[theme];
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const aiServices = [
    { 
      icon: Bot, 
      label: 'AI Voice Agents',
      hoverText: 'Voice AI',
      description: 'Natural conversations with customers'
    },
    { 
      icon: MessageSquare, 
      label: 'Smart Chat Bots',
      hoverText: 'Chat AI',
      description: '24/7 intelligent customer support'
    },
    { 
      icon: Workflow, 
      label: 'Process Automation',
      hoverText: 'Workflow',
      description: 'Streamlined business operations'
    },
    { 
      icon: Brain, 
      label: 'Predictive Analytics',
      hoverText: 'Analytics',
      description: 'Data-driven business insights'
    },
    { 
      icon: Mic, 
      label: 'Speech Recognition',
      hoverText: 'Speech',
      description: 'Advanced voice processing'
    },
    { 
      icon: Phone, 
      label: 'Call Automation',
      hoverText: 'Calls',
      description: 'Automated phone interactions'
    },
    { 
      icon: Calendar, 
      label: 'Smart Scheduling',
      hoverText: 'Schedule',
      description: 'Intelligent appointment management'
    },
    { 
      icon: Shield, 
      label: 'Security & Compliance',
      hoverText: 'Security',
      description: 'Enterprise-grade protection'
    },
    { 
      icon: Database, 
      label: 'Data Processing',
      hoverText: 'Data',
      description: 'Real-time data analysis'
    }
  ];

  const benefits = [
    {
      title: "Reduce Costs",
      value: "60%",
      description: "Average reduction in operational costs"
    },
    {
      title: "Save Time",
      value: "80%",
      description: "Faster response times to customer inquiries"
    },
    {
      title: "Increase Revenue",
      value: "40%",
      description: "Average increase in conversion rates"
    }
  ];

  return (
    <section id="ai-automation" className={`${styles.background.primary} py-20 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold ${styles.text.primary} mb-4`}
          >
            Your AI Operations. One Platform.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl ${styles.text.secondary}`}
          >
            With intelligent automation at its core.
          </motion.p>
        </div>

        {/* Main Platform Visualization */}
        <div className="flex items-center justify-center mb-20">
          <div className="w-full max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`relative ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900' : 'bg-gradient-to-br from-white via-purple-50/50 to-white'} rounded-3xl p-8 md:p-16 ${styles.glow.primary}`}
              style={{ minHeight: '500px' }}
            >
              {/* Grid Background */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="ai-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#ai-grid)" />
                  </svg>
                </div>
              </div>

              {/* Central AI Core */}
              <div className="relative flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-32 h-32 md:w-44 md:h-20 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-2xl mb-12 md:mb-16"
                >
                  <div className="flex items-center gap-2">
                    <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    <span className="text-white text-lg md:text-2xl font-bold">AI Core</span>
                  </div>
                </motion.div>

                {/* Connecting Lines - Hidden on mobile */}
                <svg 
                  className="absolute top-16 md:top-20 left-1/2 transform -translate-x-1/2 pointer-events-none hidden md:block"
                  width="800" 
                  height="220"
                  viewBox="0 0 800 220"
                >
                  {aiServices.map((_, index) => {
                    const startX = 400; // Center
                    const startY = 0;
                    const cols = 3;
                    const rows = Math.ceil(aiServices.length / cols);
                    const row = Math.floor(index / cols);
                    const col = index % cols;
                    const endX = 100 + (col * 300); // Spaced across width
                    const endY = 180 + (row * 40); // Multiple rows
                    const controlY = 100;
                    
                    return (
                      <motion.path
                        key={index}
                        d={`M ${startX} ${startY} Q ${startX} ${controlY} ${endX} ${endY}`}
                        stroke="#8B5CF6"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.6 }}
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

                {/* Service Boxes */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-20 md:mt-32 w-full max-w-4xl">
                  {aiServices.map((service, index) => {
                    const gradients = [
                      'from-violet-600 to-violet-500',
                      'from-violet-500 to-purple-500', 
                      'from-purple-500 to-fuchsia-500',
                      'from-fuchsia-500 to-pink-500',
                      'from-pink-500 to-rose-500',
                      'from-rose-500 to-red-500',
                      'from-red-500 to-orange-500',
                      'from-orange-500 to-amber-500',
                      'from-amber-500 to-yellow-500'
                    ];

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.8 + index * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`group relative w-full h-20 md:w-24 md:h-24 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-xl md:rounded-2xl border-2 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} flex flex-col items-center justify-center shadow-xl cursor-pointer overflow-hidden`}
                      >
                        <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white transition-all duration-300 group-hover:opacity-0 group-hover:scale-75" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xs md:text-sm font-semibold transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100">
                          {service.hoverText}
                        </span>
                        
                        {/* Tooltip */}
                        <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 ${styles.background.card} px-3 py-1 rounded-lg text-xs ${styles.text.primary} opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 hidden md:block`}>
                          {service.description}
                        </div>
                      </motion.div>
                    );
                  })}
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
                <div className={`text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text mb-2`}>
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