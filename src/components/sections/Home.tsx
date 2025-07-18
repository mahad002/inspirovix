import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';
import { ActionButton } from '../ui/ActionButton';
import { contactInfo } from '../../data/contact';
import Globe from '../Globe';
import TypewriterEffect from '../TypewriterEffect';
import { heroTypingPhrases } from '../../data/phrases';

const Home = React.memo(() => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);

  // Memoized content to prevent recreation
  const heroContent = useMemo(() => ({
    title: "Revolutionizing Business Operations with",
    highlight: "Inspirovix",
    description: "Streamline your business workflows and enhance customer experience through AI-powered automation.",
    primaryCTA: "Get Started",
    secondaryCTA: "Learn More"
  }), []);

  // Memoized action buttons
  const actionButtons = useMemo(() => (
    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 px-4">
      <ActionButton
        href={`mailto:${contactInfo.email}`}
        icon={<Bot className="w-5 h-5" />}
        variant="primary"
      >
        {heroContent.primaryCTA}
      </ActionButton>

      <ActionButton
        href="#services"
        icon={<Sparkles className="w-5 h-5" />}
        variant="secondary"
      >
        {heroContent.secondaryCTA}
      </ActionButton>
    </div>
  ), [heroContent.primaryCTA, heroContent.secondaryCTA]);

  // Optimized background grid style
  const backgroundGridStyle = useMemo(() => ({
    backgroundImage: `linear-gradient(to right, ${theme === 'dark' ? '#ffffff08' : '#00000008'} 1px, transparent 1px), linear-gradient(to bottom, ${theme === 'dark' ? '#ffffff08' : '#00000008'} 1px, transparent 1px)`,
    backgroundSize: '32px 32px'
  }), [theme]);

  return (
    <section id="home" className={`relative ${styles.background.gradient} overflow-hidden`}>
      {/* SEO Content - Hidden but readable by search engines */}
      <div className="sr-only">
        <h1>Custom Software Development Company - AI, Web & Mobile App Development Services</h1>
        <p>Inspirovix is a leading custom software development company with expert software engineers and software developers specializing in AI software development, web application development, mobile app development services, blockchain development services, and enterprise software solutions. We provide comprehensive software development services including CRM software development, ERP development services, SaaS development, and software development outsourcing for businesses worldwide.</p>
        <ul>
          <li>Custom Software Development Company with Expert Software Engineers</li>
          <li>AI Software Development and Machine Learning Solutions</li>
          <li>Web Application Development Company - Responsive Websites</li>
          <li>Mobile App Development Services - iOS and Android Apps</li>
          <li>Blockchain Development Services and Web3 Solutions</li>
          <li>CRM Software Developers - Customer Management Systems</li>
          <li>ERP Development Company - Enterprise Resource Planning</li>
          <li>SaaS Development - Cloud-Based Software Solutions</li>
          <li>Software Development Outsourcing Services</li>
          <li>Enterprise Software Development for Large Businesses</li>
          <li>Healthcare Software Development Solutions</li>
          <li>Financial Software Development Services</li>
          <li>eCommerce Software Development Services</li>
          <li>IT Solutions and Support Services</li>
        </ul>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-4xl sm:text-5xl md:text-7xl font-bold ${styles.text.primary} mb-4 md:mb-6 font-display leading-tight`}>
            {heroContent.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {heroContent.highlight}
            </span>
          </h2>
          
          <div className="mb-4 md:mb-8">
            <TypewriterEffect 
              phrases={heroTypingPhrases}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
            />
          </div>

          <p className={`text-base sm:text-lg md:text-xl ${styles.text.secondary} mb-6 md:mb-8 max-w-3xl mx-auto px-4`}>
            {heroContent.description}
          </p>

          {actionButtons}
        </motion.div>
      </div>

      {/* Globe Section - Optimized */}
      <div className="relative">
        <Globe />
      </div>

      {/* Optimized gradient orbs with better performance */}
      <div 
        className={`absolute top-20 -left-4 w-72 h-72 ${theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`}
        style={{ 
          willChange: 'transform',
          contain: 'layout style paint'
        }}
      />
      <div 
        className={`absolute top-32 -right-4 w-72 h-72 ${theme === 'dark' ? 'bg-yellow-500' : 'bg-yellow-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`}
        style={{ 
          willChange: 'transform',
          contain: 'layout style paint'
        }}
      />
      <div 
        className={`absolute bottom-20 left-20 w-72 h-72 ${theme === 'dark' ? 'bg-pink-500' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000`}
        style={{ 
          willChange: 'transform',
          contain: 'layout style paint'
        }}
      />
    </section>
  );
});

Home.displayName = 'Home';

export default Home;