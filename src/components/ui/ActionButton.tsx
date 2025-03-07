import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

interface ActionButtonProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  href,
  icon,
  children,
  variant
}) => {
  const { theme } = useTheme();
  const styles = themes[theme];
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.a
      href={href}
      className="relative group perspective w-full md:w-auto"
    >
      <motion.div
        className={`px-4 md:px-8 py-3 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 relative preserve-3d shadow-xl group-hover:shadow-2xl transition-shadow text-sm md:text-base ${
          variant === 'primary' ? styles.button.primary : styles.button.secondary
        } ${styles.text.primary}`}
        style={{
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform"
        })}
        <span>{children}</span>
        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${
          variant === 'primary' 
            ? 'from-purple-400/20 to-pink-400/20' 
            : theme === 'dark' ? 'from-purple-500/20 to-pink-500/20' : 'from-purple-200/50 to-pink-200/50'
        } opacity-0 group-hover:opacity-100 transition-opacity`} />
        <div className={`absolute -z-10 inset-0 blur-xl rounded-lg transform -translate-y-2 ${
          variant === 'primary' 
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 group-hover:opacity-75' 
            : theme === 'dark' ? 'bg-white/20 opacity-50 group-hover:opacity-80' : 'bg-gray-200/50 opacity-50 group-hover:opacity-80'
        } transition-opacity`} />
      </motion.div>
    </motion.a>
  );
};