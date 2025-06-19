import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const SolutionsPage = React.lazy(() => import('./pages/SolutionsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
// const BlogPage = React.lazy(() => import('./pages/BlogPage'));

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
      <Router>
        <div className="transition-colors duration-200 md:cursor-glow">
          <CustomCursor />
          <Navbar />
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* <Route path="/blog" element={<BlogPage />} /> */}
            </Routes>
          </Suspense>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;