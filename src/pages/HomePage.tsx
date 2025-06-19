import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

// Import all components directly
import { Home } from '../components/sections';
import AIAutomation from '../components/sections/AIAutomation';
import AssociatedCompanies from '../components/sections/AssociatedCompanies';
import CaseStudies from '../components/sections/CaseStudies';
import Solutions from '../components/sections/Solutions';
import CustomDevelopment from '../components/sections/CustomDevelopment';
import About from '../components/sections/About';
import Pricing from '../components/sections/Pricing';
import Contact from '../components/sections/Contact';
import Blog from '../components/sections/Blog';
import Footer from '../components/sections/Footer';

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
      {/* 1. Value Proposition & Problem Statement */}
      <Home />

      {/* 2. Solution Presentation */}
      <AIAutomation />

      {/* 3. Associated Companies */}
      <AssociatedCompanies />

      {/* 4. Additional Solutions */}
      <CaseStudies />
      
      <Solutions />
      
      <CustomDevelopment />

      {/* 5. Authority & Trust Building */}
      <About />
      
      {/* 6. Price Placement - After Value Is Established */}
      <Pricing />

      {/* 7. Call To Action */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default HomePage;