import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Layers, Users, Phone, Menu, X, CreditCard } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Home className="w-6 h-6" />, label: 'Home', href: '#home' },
    { icon: <Layers className="w-6 h-6" />, label: 'Services', href: '#services' },
    { icon: <Users className="w-6 h-6" />, label: 'About', href: '#about' },
    { icon: <CreditCard className="w-6 h-6" />, label: 'Pricing', href: '#pricing' },
    { icon: <Phone className="w-6 h-6" />, label: 'Contact', href: '#contact' },
  ];

  const navVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 24
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 28
      }
    }
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    closed: {
      x: 50,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Navigation Menu */}
      <motion.nav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
        className="fixed right-0 top-0 bottom-0 w-80 bg-navy-900/95 backdrop-blur-lg z-40 shadow-2xl"
      >
        <div className="h-full flex flex-col justify-center p-8">
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 text-white/80 hover:text-white group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  {item.icon}
                </div>
                <span className="text-lg font-medium">{item.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;