import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';
import Globe from '../Globe';
import TypewriterEffect from '../TypewriterEffect';
import { heroTypingPhrases } from '../../data/phrases';

const Home = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  return (
    <section id="home" className={`relative ${styles.background.gradient}`}>
      {/* Animated background grid */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,${theme === 'dark' ? '#4f4f4f2e' : '#4f4f4f1a'}_1px,transparent_1px),linear-gradient(to_bottom,${theme === 'dark' ? '#4f4f4f2e' : '#4f4f4f1a'}_1px,transparent_1px)] bg-[size:14px_24px]`} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-5xl md:text-7xl font-bold ${styles.text.primary} mb-6 font-display`}>
            Revolutionizing Business Operations with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Inspirovix
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

      {/* Globe Section */}
      <Globe />

      {/* Animated gradient orbs */}
      <div className={`absolute top-0 -left-4 w-72 h-72 ${theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`} />
      <div className={`absolute top-0 -right-4 w-72 h-72 ${theme === 'dark' ? 'bg-yellow-500' : 'bg-yellow-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`} />
      <div className={`absolute -bottom-8 left-20 w-72 h-72 ${theme === 'dark' ? 'bg-pink-500' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000`} />
    </section>
  );
};

export default Home;