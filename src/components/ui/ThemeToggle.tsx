import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`fixed right-4 top-20 z-50 p-3 rounded-full transition-colors ${
        theme === 'dark' 
          ? 'bg-purple-600 text-white hover:bg-purple-700' 
          : 'bg-purple-500 text-white hover:bg-purple-600'
      }`}
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6" />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;