import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';
import { menuItems } from '../data/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const styles = themes[theme];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = menuItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
    <>
      {/* Fixed Top Bar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? `${styles.background.card} shadow-lg backdrop-blur-lg` : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="https://media.licdn.com/dms/image/v2/D4E0BAQFazebQXPuv6Q/company-logo_100_100/company-logo_100_100/0/1737872641143/inspirovix_logo?e=1749686400&v=beta&t=NpjZSNlmt7D47F743157vRGMSu1MVnksUQ1coENlUCc" alt="Inspirovix Logo" className="w-10 h-10 object-contain rounded-xl" />
              <span className={`text-lg font-bold ${styles.text.primary}`}>Inspirovix</span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? styles.text.primary : styles.text.secondary
                    } hover:${styles.text.primary}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-lg"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className={`lg:hidden p-2 rounded-lg ${styles.button.secondary}`}
            >
              <Menu className={`w-6 h-6 ${styles.text.primary}`} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed right-0 top-0 bottom-0 w-80 ${styles.background.card} backdrop-blur-lg z-50 lg:hidden overflow-y-auto`}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className={`text-xl font-bold ${styles.text.primary}`}>Navigation</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className={`p-2 rounded-lg ${styles.button.secondary}`}
                  >
                    <X className={`w-6 h-6 ${styles.text.primary}`} />
                  </motion.button>
                </div>
                <nav className="space-y-4">
                  {menuItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 p-3 rounded-lg group relative overflow-hidden ${
                          isActive ? `${styles.text.primary} bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20` : styles.text.secondary
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isActive ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500' : 'bg-violet-500/20'
                        } group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all duration-300`}>
                          <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover:text-white'}`} />
                        </div>
                        <span className="font-medium">{item.label}</span>
                        <ChevronRight className={`w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                          isActive ? 'text-violet-400' : 'text-violet-500'
                        }`} />
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </motion.a>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;