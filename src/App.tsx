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
  Contact,
  Blog
} from './components/sections';

function App() {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-200 cursor-glow">
        <CustomCursor />
        <Navbar />
        <ThemeToggle />
        <Home />
        <AIAutomation />
        <CustomDevelopment />
        <Solutions />
        <CaseStudies />
        <About />
        <Blog />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;