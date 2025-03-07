import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, LineChart, PackageSearch } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

const InventoryManagement = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const steps = [
    {
      number: "1",
      title: "Track & Manage Stock",
      description: "In real-time.",
      icon: <PackageSearch className="w-6 h-6 text-white" />
    },
    {
      number: "2",
      title: "Predict Inventory Demand",
      description: "AI forecasts future demand and prevents over/under-stocking.",
      icon: <LineChart className="w-6 h-6 text-white" />
    },
    {
      number: "3",
      title: "Automate Procurement",
      description: "Auto-ordering of stock when levels are low.",
      icon: <BarChart3 className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${styles.text.primary} mb-4`}>
            AI-Driven Inventory & Business Management
          </h2>
        </motion.div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-6 ${styles.background.card} rounded-xl p-6 relative overflow-hidden ${styles.glow.primary}`}
            >
              {/* Decorative line connecting cards */}
              {index < steps.length - 1 && (
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-transparent"
                  style={{ bottom: '-2rem' }}
                />
              )}
              
              {/* Step number badge */}
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Step {step.number}
              </div>

              <div className="mt-4 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-4 transform hover:rotate-6 transition-transform">
                  {step.icon}
                </div>
                <h3 className={`text-xl font-semibold ${styles.text.primary} mb-2`}>{step.title}</h3>
                <p className={`${styles.text.secondary} text-sm`}>{step.description}</p>
              </div>

              {/* Interactive hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 opacity-0 hover:opacity-100 transition-opacity rounded-xl pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden md:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <div className="pyramid-container">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`pyramid-level level-${index + 1} ${styles.background.card}`}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center text-2xl font-bold text-white transform hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold ${styles.text.primary} mb-1`}>{step.title}</h3>
                      <p className={styles.text.secondary}>{step.description}</p>
                    </div>
                    <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-purple-500/10' : 'from-purple-200/20'} to-transparent transform -skew-y-6`} />
          <div className={`absolute top-1/2 left-0 w-64 h-64 ${theme === 'dark' ? 'bg-purple-500/30' : 'bg-purple-200/40'} rounded-full filter blur-3xl`} />
          <div className={`absolute bottom-0 right-0 w-96 h-96 ${theme === 'dark' ? 'bg-pink-500/20' : 'bg-pink-200/30'} rounded-full filter blur-3xl`} />
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;