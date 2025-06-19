import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';
import { menuItems } from '../data/navigation';
import ThemeToggle from './ThemeToggle';

const Navbar = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const isActivePage = useCallback((href: string) => {
    return location.pathname === href;
  }, [location.pathname]);

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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://inspirovix.s3.us-east-2.amazonaws.com/Inspirovix+-+11.png" alt="Inspirovix Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-xl" />
                <span className={`text-base sm:text-lg font-bold ${styles.text.primary}`}>Inspirovix</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Regular Navigation Items (excluding Contact) */}
              {menuItems.filter(item => item.label !== 'Contact').map((item) => {
                const isActive = isActivePage(item.href);
                return (
                  <motion.div
                    key={item.href}
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.href}
                      className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive ? styles.text.primary : styles.text.secondary
                      } hover:${styles.text.primary}`}
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
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Separator */}
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />
              
              <ThemeToggle />
              
              {/* Standalone Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4"
              >
                <Link
                  to="/contact"
                  className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    isActivePage('/contact')
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30' 
                      : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-md hover:shadow-lg hover:shadow-violet-500/30'
                  } transform hover:scale-105 flex items-center gap-2`}
                >
                  <span className="relative z-10">Contact Us</span>
                  <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-fuchsia-400/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`p-2.5 rounded-lg ${styles.button.secondary}`}
              >
                {theme === 'dark' ? (
                  <Sun className={`w-5 h-5 ${styles.text.primary}`} />
                ) : (
                  <Moon className={`w-5 h-5 ${styles.text.primary}`} />
                )}
              </motion.button>

              {/* Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className={`p-2.5 rounded-lg ${styles.button.secondary}`}
              >
                <Menu className={`w-6 h-6 ${styles.text.primary}`} />
              </motion.button>
            </div>
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
              className={`fixed right-0 top-0 bottom-0 w-[85vw] sm:w-80 ${styles.background.card} backdrop-blur-lg z-50 lg:hidden overflow-y-auto`}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className={`text-lg sm:text-xl font-bold ${styles.text.primary}`}>Navigation</h2>
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
                  {menuItems.filter(item => item.label !== 'Contact').map((item, index) => {
                    const isActive = isActivePage(item.href);
                    
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 p-3 rounded-lg group relative overflow-hidden ${
                            isActive ? `${styles.text.primary} bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20` : styles.text.secondary
                          }`}
                        >
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                            isActive ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500' : 'bg-violet-500/20'
                          } group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all duration-300`}>
                            <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-white' : 'group-hover:text-white'}`} />
                          </div>
                          <span className="font-medium text-sm sm:text-base">{item.label}</span>
                          <ChevronRight className={`w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                            isActive ? 'text-violet-400' : 'text-violet-500'
                          }`} />
                          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                      </motion.div>
                    );
                  })}
                  
                  {/* Mobile Contact Button */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: menuItems.length * 0.1 }}
                    className="pt-4 border-t border-gray-200 dark:border-gray-700"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 p-4 rounded-lg group relative overflow-hidden ${
                        isActivePage('/contact')
                          ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg' 
                          : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-md'
                      } transform transition-all duration-300`}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-sm">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="font-bold text-base">Contact Us</span>
                      <svg className="w-5 h-5 ml-auto text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;