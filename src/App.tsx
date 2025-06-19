import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

// Import pages directly (no lazy loading)
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="transition-colors duration-200 md:cursor-glow overflow-x-hidden">
          <CustomCursor />
          <Navbar />
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          
          <Routes>
            {/* Home Page - Everything in one page */}
            <Route path="/" element={<HomePage />} />
            
            {/* Redirect old services routes to home with hash */}
            <Route path="/services-details" element={<Navigate to="/#services" replace />} />
            <Route path="/services" element={<Navigate to="/#services" replace />} />
            
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;