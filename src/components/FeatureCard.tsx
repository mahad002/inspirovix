import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = React.memo<FeatureCardProps>(({ title, description, icon, delay = 0 }) => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationProps = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.6, delay }
  }), [inView, delay]);

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className={`${styles.background.card} rounded-xl p-6 ${styles.background.cardHover} transition-all duration-300 ${styles.glow.primary}`}
      style={{ willChange: 'transform' }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className={`text-xl font-semibold ${styles.text.primary} mb-2`}>{title}</h3>
      <p className={styles.text.secondary}>{description}</p>
    </motion.div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;