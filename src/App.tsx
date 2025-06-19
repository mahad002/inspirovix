import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import { Home } from './components/sections';

// Lazy load pages with error handling
const ServicesPage = lazy(() => 
  import('./pages/ServicesPage').catch(() => ({
    default: () => <div>Error loading services page</div>
  }))
);

// Lazy load heavy components with error handling
const AIAutomation = lazy(() => 
  import('./components/sections/AIAutomation').catch(() => ({
    default: () => <div>Error loading AI Automation</div>
  }))
);
const Services = lazy(() => 
  import('./components/sections/CustomDevelopment').catch(() => ({
    default: () => <div>Error loading Services</div>
  }))
);
const Solutions = lazy(() => 
  import('./components/sections/Solutions').catch(() => ({
    default: () => <div>Error loading Solutions</div>
  }))
);
const CaseStudies = lazy(() => 
  import('./components/sections/CaseStudies').catch(() => ({
    default: () => <div>Error loading Case Studies</div>
  }))
);
const About = lazy(() => 
  import('./components/sections/About').catch(() => ({
    default: () => <div>Error loading About</div>
  }))
);
const Blog = lazy(() => 
  import('./components/sections/Blog').catch(() => ({
    default: () => <div>Error loading Blog</div>
  }))
);
const Contact = lazy(() => 
  import('./components/sections/Contact').catch(() => ({
    default: () => <div>Error loading Contact</div>
  }))
);
const Pricing = lazy(() => 
  import('./components/sections/Pricing').catch(() => ({
    default: () => <div>Error loading Pricing</div>
  }))
);
const AssociatedCompanies = lazy(() => 
  import('./components/sections/AssociatedCompanies').catch(() => ({
    default: () => <div>Error loading Associated Companies</div>
  }))
);
const Footer = lazy(() => 
  import('./components/sections/Footer').catch(() => ({
    default: () => <div>Error loading Footer</div>
  }))
);

// Loading fallback component
const LoadingFallback = React.memo(() => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
});

LoadingFallback.displayName = 'LoadingFallback';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Route error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="mb-4">Please try refreshing the page or go back to home.</p>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <div className="transition-colors duration-200 md:cursor-glow overflow-x-hidden">
            <CustomCursor />
            <Navbar />
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            
            <Routes>
              {/* Main Home Page */}
              <Route path="/" element={
                <>
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
                    <Solutions />
                  </Suspense>
                  
                  <Suspense fallback={<LoadingFallback />}>
                    <Services />
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
                  
                  {/* Footer */}
                  <Suspense fallback={<LoadingFallback />}>
                    <Footer />
                  </Suspense>
                </>
              } />
              
              {/* Services Page */}
              <Route path="/services-details" element={
                <Suspense fallback={<LoadingFallback />}>
                  <ServicesPage />
                </Suspense>
              } />
              
              {/* Alternative services routes */}
              <Route path="/services" element={<Navigate to="/services-details" replace />} />
              <Route path="/services/*" element={<Navigate to="/services-details" replace />} />
              
              {/* Catch all route - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;