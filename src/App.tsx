import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import { Home } from './components/sections';

// Lazy load heavy components
const AIAutomation = lazy(() => import('./components/sections/AIAutomation'));
const Services = lazy(() => import('./components/sections/Services'));
const DetailedServices = lazy(() => import('./components/sections/DetailedServices'));
const Solutions = lazy(() => import('./components/sections/Solutions'));
const CaseStudies = lazy(() => import('./components/sections/CaseStudies'));
const About = lazy(() => import('./components/sections/About'));
const Blog = lazy(() => import('./components/sections/Blog'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Pricing = lazy(() => import('./components/sections/Pricing'));
const AssociatedCompanies = lazy(() => import('./components/sections/AssociatedCompanies'));

// Loading fallback component
const LoadingFallback = React.memo(() => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
  </div>
));

LoadingFallback.displayName = 'LoadingFallback';

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
        <Suspense fallback={<LoadingFallback />}>
          <AIAutomation />
        </Suspense>

        {/* 3. Associated Companies */}
        <Suspense fallback={<LoadingFallback />}>
          <AssociatedCompanies />
        </Suspense>

        {/* 4. Additional Solutions */}
        <Suspense fallback={<LoadingFallback />}>
          <CaseStudies />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <DetailedServices />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <Solutions />
        </Suspense>

        {/* 5. Authority & Trust Building */}
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        
        {/* 6. Price Placement - After Value Is Established */}
        <Suspense fallback={<LoadingFallback />}>
          <Pricing />
        </Suspense>

        {/* 7. Call To Action */}
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
        
        {/* 8. Additional Value & Educational Content */}
        <Suspense fallback={<LoadingFallback />}>
          <Blog />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;