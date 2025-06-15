import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';
import TypewriterEffect from '../TypewriterEffect';
import { heroTypingPhrases } from '../../data/phrases';

// Lazy load heavy components
const Globe = lazy(() => import('../Globe'));

// Lightweight loading component
const LoadingSpinner = () => (
  <div className="w-full h-[40vh] md:h-[60vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

const Home = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  return (
    <section id="home" className={`relative ${styles.background.gradient}`}>
      {/* Optimized background grid */}
      <div className={`absolute inset-0 opacity-30 bg-[linear-gradient(to_right,${theme === 'dark' ? '#4f4f4f2e' : '#4f4f4f1a'}_1px,transparent_1px),linear-gradient(to_bottom,${theme === 'dark' ? '#4f4f4f2e' : '#4f4f4f1a'}_1px,transparent_1px)] bg-[size:20px_20px]`} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold ${styles.text.primary} mb-4 md:mb-6 font-display leading-tight`}>
            Revolutionizing Business Operations with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Inspirovix
            </span>
          </h1>
          
          <div className="mb-4 md:mb-8 h-16">
            <TypewriterEffect 
              phrases={heroTypingPhrases}
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={1500}
            />
          </div>

          <p className={`text-base sm:text-lg md:text-xl ${styles.text.secondary} mb-6 md:mb-8 max-w-3xl mx-auto px-4`}>
            Streamline your business workflows and enhance customer experience through AI-powered automation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <ActionButton
              href={`mailto:${contactInfo.email}`}
              icon={<Bot className="w-5 h-5" />}
              variant="primary"
            >
              Get Started
            </ActionButton>

            <ActionButton
              href="#ai-automation"
              icon={<Sparkles className="w-5 h-5" />}
              variant="secondary"
            >
              Learn More
            </ActionButton>
          </div>
        </motion.div>
      </div>

      {/* Lazy loaded Globe with fallback */}
      <Suspense fallback={<LoadingSpinner />}>
        <Globe />
      </Suspense>

      {/* Simplified animated orbs */}
      <div className={`absolute top-0 -left-4 w-48 h-48 ${theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse`} />
      <div className={`absolute top-0 -right-4 w-48 h-48 ${theme === 'dark' ? 'bg-pink-500' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse`} style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default React.memo(Home);