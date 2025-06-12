import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Workflow, Zap, Brain, Mic, Phone, Calendar, Shield } from 'lucide-react';
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
      color: theme === 'dark' ? 'from-blue-600 to-blue-700' : 'from-blue-500 to-blue-600'
    },
    { 
      icon: MessageSquare, 
      label: 'Smart Chat Bots',
      hoverText: 'Chat AI',
      color: theme === 'dark' ? 'from-indigo-600 to-indigo-700' : 'from-indigo-500 to-indigo-600'
    },
    { 
      icon: Workflow, 
      label: 'Process Automation',
      hoverText: 'Workflow',
      color: theme === 'dark' ? 'from-purple-600 to-purple-700' : 'from-purple-500 to-purple-600'
    },
    { 
      icon: Brain, 
      label: 'Predictive Analytics',
      hoverText: 'Analytics',
      color: theme === 'dark' ? 'from-violet-600 to-violet-700' : 'from-violet-500 to-violet-600'
    },
    { 
      icon: Mic, 
      label: 'Speech Recognition',
      hoverText: 'Speech',
      color: theme === 'dark' ? 'from-fuchsia-600 to-fuchsia-700' : 'from-fuchsia-500 to-fuchsia-600'
    },
    { 
      icon: Phone, 
      label: 'Call Automation',
      hoverText: 'Calls',
      color: theme === 'dark' ? 'from-pink-600 to-pink-700' : 'from-pink-500 to-pink-600'
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
              className={`relative ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50' 
                  : 'bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200/50'
              } rounded-3xl p-16 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } shadow-2xl`}
              style={{ minHeight: '400px' }}
            >
              {/* Grid Background */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path 
                          d="M 40 0 L 0 0 0 40" 
                          fill="none" 
                          stroke={theme === 'dark' ? '#3B82F6' : '#6366F1'} 
                          strokeWidth="1" 
                          opacity="0.3"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
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
                  className={`w-44 h-20 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-700' 
                      : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                  } rounded-2xl flex items-center justify-center shadow-2xl mb-16 border ${
                    theme === 'dark' ? 'border-blue-500/30' : 'border-blue-400/30'
                  }`}
                >
                  <Brain className="w-6 h-6 text-white mr-2" />
                  <span className="text-white text-2xl font-bold">AI Core</span>
                </motion.div>

                {/* Connecting Lines */}
                <svg 
                  className="absolute top-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
                  width="600" 
                  height="180"
                  viewBox="0 0 600 180"
                >
                  {aiServices.map((_, index) => {
                    const startX = 300;
                    const startY = 0;
                    const endX = 50 + (index * 100);
                    const endY = 160;
                    const controlY = 80;
                    
                    return (
                      <motion.path
                        key={index}
                        d={`M ${startX} ${startY} Q ${startX} ${controlY} ${endX} ${endY}`}
                        stroke={theme === 'dark' ? '#6366F1' : '#4F46E5'}
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.7 }}
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
                <div className="flex justify-center space-x-4 mt-28">
                  {aiServices.map((service, index) => {
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
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={`group w-24 h-24 bg-gradient-to-br ${service.color} rounded-2xl border-2 ${
                          theme === 'dark' ? 'border-slate-600/50' : 'border-slate-300/50'
                        } flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer relative hover:shadow-2xl`}
                      >
                        <service.icon className="w-8 h-8 text-white transition-all duration-300 group-hover:opacity-0 group-hover:scale-75" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100">
                          {service.hoverText}
                        </span>
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
                <div className={`text-4xl font-bold ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-400 to-indigo-500' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                } text-transparent bg-clip-text mb-2`}>
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