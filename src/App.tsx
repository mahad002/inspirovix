import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

// Lazy load sections for better performance
const Home = lazy(() => import('./components/sections/Home'));
const AIAutomation = lazy(() => import('./components/sections/AIAutomation'));
const CustomDevelopment = lazy(() => import('./components/sections/CustomDevelopment'));
const Solutions = lazy(() => import('./components/sections/Solutions'));
const CaseStudies = lazy(() => import('./components/sections/CaseStudies'));
const About = lazy(() => import('./components/sections/About'));
const Blog = lazy(() => import('./components/sections/Blog'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Pricing = lazy(() => import('./components/sections/Pricing'));
const AssociatedCompanies = lazy(() => import('./components/sections/AssociatedCompanies'));

// Loading component
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

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
        <Suspense fallback={<SectionLoader />}>
          <Home />
        </Suspense>

        {/* 2. Solution Presentation */}
        <Suspense fallback={<SectionLoader />}>
          <AIAutomation />
        </Suspense>

        {/* 3. Associated Companies */}
        <Suspense fallback={<SectionLoader />}>
          <AssociatedCompanies />
        </Suspense>

        {/* 4. Additional Solutions */}
        <Suspense fallback={<SectionLoader />}>
          <CaseStudies />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Solutions />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <CustomDevelopment />
        </Suspense>

        {/* 5. Authority & Trust Building */}
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        {/* 6. Price Placement - After Value Is Established */}
        <Suspense fallback={<SectionLoader />}>
          <Pricing />
        </Suspense>

        {/* 7. Call To Action */}
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
        
        {/* 8. Additional Value & Educational Content */}
        <Suspense fallback={<SectionLoader />}>
          <Blog />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;