import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';
import { features, benefits } from '../../data/aiAutomation';

const AIAutomation = () => {
  const { theme } = useTheme();
  const styles = themes[theme];


  return (
    <section id="ai-automation" className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl font-bold ${styles.text.primary} mb-6`}>
              Transform Your Business with AI-Powered Automation
            </h2>
            <p className={`${styles.text.secondary} text-lg mb-8`}>
              Leverage cutting-edge AI technology to automate customer interactions, 
              streamline operations, and scale your business efficiently.
            </p>
            <div className="flex gap-4">
              <ActionButton
                href={`mailto:${contactInfo.email}?subject=AI Automation Inquiry`}
                icon={<Bot className="w-5 h-5" />}
                variant="primary"
              >
                Get Started
              </ActionButton>
              <ActionButton
                href="#case-studies"
                icon={<MessageSquare className="w-5 h-5" />}
                variant="secondary"
              >
                See Results
              </ActionButton>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${styles.text.primary} mb-2`}>
                  {feature.title}
                </h3>
                <p className={styles.text.secondary}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className={`${styles.background.card} rounded-xl p-8 ${styles.glow.primary}`}>
            <h3 className={`text-2xl font-bold ${styles.text.primary} text-center mb-6`}>
              See AI Automation in Action
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
              <p className={`${styles.text.secondary} text-center`}>
                Interactive Demo Coming Soon
              </p>
            </div>
          </div>
        </motion.div> */}

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
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
      </div>
    </section>
  );
};

export default AIAutomation;