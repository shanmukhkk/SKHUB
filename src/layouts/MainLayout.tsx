import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Menu, X } from 'lucide-react';

const MainLayout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark-lighter/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Navbar isScrolled={isScrolled} />
            
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-dark-lighter/95 backdrop-blur-md"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col space-y-4">
                  <a href="/" className="nav-link text-lg py-2">Home</a>
                  <a href="/about" className="nav-link text-lg py-2">About</a>
                  <a href="/services" className="nav-link text-lg py-2">Services</a>
                  <a href="/register" className="nav-link text-lg py-2">Register</a>
                  <a href="/book" className="nav-link text-lg py-2">Book</a>
                  <a href="/contact" className="nav-link text-lg py-2">Contact</a>
                  <div className="pt-4 flex flex-col space-y-3">
                    <a href="/register" className="btn-primary text-center">Register Business</a>
                    <a href="/book" className="btn-outline text-center">Book a Table</a>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;