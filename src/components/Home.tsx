import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Globe from './Globe';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

// Lazy load components
const Hero = lazy(() => import('./Hero'));
const Features = lazy(() => import('./Features'));
const WhyChooseUs = lazy(() => import('./WhyChooseUs'));
const Services = lazy(() => import('./Services'));
const CallToAction = lazy(() => import('./CallToAction'));
const AssociatedCompanies = lazy(() => import('./sections/AssociatedCompanies'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

const Home = React.memo(() => {
  const { theme } = useTheme();
  const styles = themes[theme];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="home" className={`relative ${styles.background.gradient}`}>
        {/* Animated background grid */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,${theme === 'dark' ? '#4f4f4f2e' : '#4f4f4f1a'}_1px,transparent_1px),linear-gradient(to_bottom,${theme === 'dark' ? '#4f4f4f2e' : '#4f4f4f1a'}_1px,transparent_1px)] bg-[size:14px_24px]`} />
        
        {/* Hero Section */}
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>

        {/* Globe Section */}
        <Globe />

        {/* Animated gradient orbs */}
        <div className={`absolute top-0 -left-4 w-72 h-72 ${theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`} />
        <div className={`absolute top-0 -right-4 w-72 h-72 ${theme === 'dark' ? 'bg-yellow-500' : 'bg-yellow-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`} />
        <div className={`absolute -bottom-8 left-20 w-72 h-72 ${theme === 'dark' ? 'bg-pink-500' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000`} />
      </section>
      
      <Suspense fallback={<LoadingFallback />}>
        <Features />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <WhyChooseUs />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <CallToAction />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <AssociatedCompanies />
      </Suspense>
    </motion.div>
  );
});

Home.displayName = 'Home';

export default Home;