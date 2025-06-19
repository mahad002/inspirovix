import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';
import { features, benefits } from '../../data/aiAutomation';

const AIAutomation = React.memo(() => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);

  // Memoized content
  const sectionContent = useMemo(() => ({
    title: "Transform Your Business with AI-Powered Automation",
    description: "Leverage cutting-edge AI technology to automate customer interactions, streamline operations, and scale your business efficiently.",
    benefitsTitle: "Transform Your Business Operations"
  }), []);

  // Memoized features grid
  const featuresGrid = useMemo(() => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={`feature-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary}`}
          style={{ willChange: 'transform' }}
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
  ), [features, styles]);

  // Memoized benefits section
  const benefitsSection = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <motion.div
          key={`benefit-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`${styles.background.card} rounded-xl p-6 ${styles.glow.primary} text-center`}
          style={{ willChange: 'transform' }}
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
  ), [benefits, styles]);

  // Memoized action buttons
  const actionButtons = useMemo(() => (
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
  ), []);

  return (
    <section id="ai-automation" className={`${styles.background.primary} py-20 overflow-hidden`}>
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
              {sectionContent.title}
            </h2>
            <p className={`${styles.text.secondary} text-lg mb-8`}>
              {sectionContent.description}
            </p>
            {actionButtons}
          </motion.div>

          {/* Features Grid */}
          {featuresGrid}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className={`text-3xl font-bold ${styles.text.primary} mb-12`}>
            {sectionContent.benefitsTitle}
          </h3>
          {benefitsSection}
        </motion.div>
      </div>
    </section>
  );
});

AIAutomation.displayName = 'AIAutomation';

export default AIAutomation;