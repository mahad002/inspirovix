import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';
import Globe from '../components/Globe';
import TypewriterEffect from '../components/TypewriterEffect';
import { heroTypingPhrases } from '../data/phrases';
import { ActionButton } from '../components/ui/ActionButton';
import { contactInfo } from '../data/contact';
import { Bot, Sparkles, ArrowRight } from 'lucide-react';

// Lazy load components
const Features = lazy(() => import('../components/Features'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const AssociatedCompanies = lazy(() => import('../components/sections/AssociatedCompanies'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-40 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

const HomePage = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section id="home" className={`relative ${styles.background.gradient} min-h-screen`}>
        {/* Animated background grid */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,${theme === 'dark' ? '#4f4f4f2e' : '#4f4f4f1a'}_1px,transparent_1px),linear-gradient(to_bottom,${theme === 'dark' ? '#4f4f4f2e' : '#4f4f4f1a'}_1px,transparent_1px)] bg-[size:14px_24px]`} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold ${styles.text.primary} mb-4 md:mb-6 font-display leading-tight`}>
              Revolutionizing Business Operations with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Inspirovix
              </span>
            </h1>
            
            <div className="mb-4 md:mb-8">
              <TypewriterEffect 
                phrases={heroTypingPhrases}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
              />
            </div>

            <p className={`text-base sm:text-lg md:text-xl ${styles.text.secondary} mb-6 md:mb-8 max-w-3xl mx-auto px-4`}>
              Streamline your business workflows and enhance customer experience through AI-powered automation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 px-4 mb-8">
              <ActionButton
                href={`mailto:${contactInfo.email}`}
                icon={<Bot className="w-5 h-5" />}
                variant="primary"
              >
                Get Started
              </ActionButton>

              <ActionButton
                href="/services"
                icon={<Sparkles className="w-5 h-5" />}
                variant="secondary"
              >
                Our Services
              </ActionButton>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <motion.a
                href="/case-studies"
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${styles.background.card} ${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
              >
                View Case Studies <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/solutions"
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${styles.background.card} ${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
              >
                Industry Solutions <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${styles.background.card} ${styles.text.secondary} hover:${styles.text.primary} transition-colors`}
              >
                See Pricing <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Globe Section */}
        <Globe />

        {/* Animated gradient orbs */}
        <div 
          className={`absolute top-0 -left-4 w-72 h-72 ${theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`}
          style={{ willChange: 'transform' }}
        />
        <div 
          className={`absolute top-0 -right-4 w-72 h-72 ${theme === 'dark' ? 'bg-yellow-500' : 'bg-yellow-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`}
          style={{ willChange: 'transform' }}
        />
        <div 
          className={`absolute -bottom-8 left-20 w-72 h-72 ${theme === 'dark' ? 'bg-pink-500' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000`}
          style={{ willChange: 'transform' }}
        />
      </section>
      
      {/* Features Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Features />
      </Suspense>
      
      {/* Why Choose Us Section */}
      <Suspense fallback={<LoadingFallback />}>
        <WhyChooseUs />
      </Suspense>
      
      {/* Associated Companies Section */}
      <Suspense fallback={<LoadingFallback />}>
        <AssociatedCompanies />
      </Suspense>
    </motion.div>
  );
};

export default HomePage;