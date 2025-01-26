import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import InventoryManagement from './components/InventoryManagement';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-200">
        <Navbar />
        <ThemeToggle />
        <Home />
        <Services />
        <About />
        <InventoryManagement />
        <WhyChooseUs />
        <Pricing />
        <CallToAction />
        <ContactForm />
      </div>
    </ThemeProvider>
  );
}

export default App;