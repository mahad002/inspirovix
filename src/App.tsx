import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import {
  Home,
  AIAutomation,
  CustomDevelopment,
  Solutions,
  CaseStudies,
  About,
  Blog,
  Contact,
} from './components/sections';
import Pricing from './components/sections/Pricing';
import AssociatedCompanies from './components/sections/AssociatedCompanies';

function App() {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-200 md:cursor-glow">
        <CustomCursor />
        <Navbar />
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
        
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
        
        {/* 8. Additional Value & Educational Content */}
        <Blog />
      </div>
    </ThemeProvider>
  );
}

export default App;