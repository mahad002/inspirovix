import React from 'react';
import Globe from './Globe';
import HeroSection from './sections/HeroSection';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

const Home = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  return (
    <section id="home" className={`relative ${styles.background.gradient}`}>
      {/* Animated background grid */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,${theme === 'dark' ? '#4f4f4f2e' : '#4f4f4f1a'}_1px,transparent_1px),linear-gradient(to_bottom,${theme === 'dark' ? '#4f4f4f2e' : '#4f4f4f1a'}_1px,transparent_1px)] bg-[size:14px_24px]`} />
      
      {/* Hero Section */}
      <HeroSection />

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