import React, { useMemo, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

interface ActionButtonProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

export const ActionButton = React.memo<ActionButtonProps>(({
  href,
  icon,
  children,
  variant
}) => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = useMemo(() => ({ damping: 15, stiffness: 150 }), []);
  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), springConfig);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0.5);
    y.set(0.5);
  }, [x, y]);

  const buttonClasses = useMemo(() => 
    `px-6 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 relative preserve-3d shadow-xl group-hover:shadow-2xl transition-shadow text-sm sm:text-base ${
      variant === 'primary' ? styles.button.primary : styles.button.secondary
    } ${styles.text.primary}`,
    [variant, styles]
  );

  const overlayClasses = useMemo(() => 
    `absolute inset-0 rounded-lg bg-gradient-to-r ${
      variant === 'primary' 
        ? 'from-purple-400/20 to-pink-400/20' 
        : theme === 'dark' ? 'from-purple-500/20 to-pink-500/20' : 'from-purple-200/50 to-pink-200/50'
    } opacity-0 group-hover:opacity-100 transition-opacity`,
    [variant, theme]
  );

  const glowClasses = useMemo(() => 
    `absolute -z-10 inset-0 blur-xl rounded-lg transform -translate-y-2 ${
      variant === 'primary' 
        ? 'bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 group-hover:opacity-75' 
        : theme === 'dark' ? 'bg-white/20 opacity-50 group-hover:opacity-80' : 'bg-gray-200/50 opacity-50 group-hover:opacity-80'
    } transition-opacity`,
    [variant, theme]
  );

  return (
    <motion.a
      href={href}
      className="relative group perspective w-full sm:w-auto"
    >
      <motion.div
        className={buttonClasses}
        style={{
          rotateX,
          rotateY,
          willChange: 'transform'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform"
        })}
        <span>{children}</span>
        <div className={overlayClasses} />
        <div className={glowClasses} />
      </motion.div>
    </motion.a>
  );
});

ActionButton.displayName = 'ActionButton';