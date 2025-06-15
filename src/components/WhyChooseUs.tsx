import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Link, Scale } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

const WhyChooseUs = React.memo(() => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);

  const reasons = useMemo(() => [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "End-to-End Automation",
      description: "We eliminate inefficiencies by automating entire business operations."
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "AI-Powered Insights",
      description: "Get actionable recommendations to grow your business."
    },
    {
      icon: <Link className="w-6 h-6 text-white" />,
      title: "Seamless Integration",
      description: "Connect with your existing tools & platforms effortlessly."
    },
    {
      icon: <Scale className="w-6 h-6 text-white" />,
      title: "Scalability & Customization",
      description: "Solutions tailored for startups, SMEs, and enterprises."
    }
  ], []);

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
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Why Choose Inspirovex?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${styles.background.card} rounded-xl p-6 border-l-4 border-violet-500 ${styles.glow.primary}`}
              style={{ willChange: 'transform' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                  {reason.icon}
                </div>
                <h3 className={`text-xl font-semibold ${styles.text.primary}`}>{reason.title}</h3>
              </div>
              <p className={styles.text.secondary}>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
});

WhyChooseUs.displayName = 'WhyChooseUs';

export default WhyChooseUs;