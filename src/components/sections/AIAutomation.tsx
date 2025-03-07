import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Workflow, Zap } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';

const AIAutomation = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  const features = [
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      title: "AI Voice Agents",
      description: "Natural conversations with customers using advanced text-to-speech and speech recognition."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Smart Customer Service",
      description: "24/7 automated support with intelligent issue resolution and human escalation."
    },
    {
      icon: <Workflow className="w-6 h-6 text-white" />,
      title: "Process Automation",
      description: "Streamline operations with AI-powered workflow automation and decision making."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Intelligent Analytics",
      description: "Real-time insights and predictive analytics for business optimization."
    }
  ];

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
                  {feature.icon}
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
        <motion.div
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
              {/* Add demo video or interactive demo here */}
              <p className={`${styles.text.secondary} text-center`}>
                Interactive Demo Coming Soon
              </p>
            </div>
          </div>
        </motion.div>

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
            {[
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
            ].map((benefit, index) => (
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