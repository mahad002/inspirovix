import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import TypewriterEffect from '../TypewriterEffect';
import { heroTypingPhrases } from '../../data/phrases';
import { contactInfo } from '../../data/contact';
import { ActionButton } from '../ui/ActionButton';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const HeroSection = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={`text-5xl md:text-7xl font-bold ${styles.text.primary} mb-6 font-display`}>
          Revolutionizing Business Operations with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Inspirovex
          </span>
        </h1>
        
        <div className="mb-8">
          <TypewriterEffect 
            phrases={heroTypingPhrases}
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={2000}
          />
        </div>

        <p className={`text-xl ${styles.text.secondary} mb-8 max-w-3xl mx-auto`}>
          Streamline your business workflows and enhance customer experience through AI-powered automation.
        </p>

        <div className="flex justify-center gap-8">
          <ActionButton
            href={`mailto:${contactInfo.email}`}
            icon={<Bot className="w-5 h-5" />}
            variant="primary"
          >
            Get Started
          </ActionButton>

          <ActionButton
            href="#services"
            icon={<Sparkles className="w-5 h-5" />}
            variant="secondary"
          >
            Learn More
          </ActionButton>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;