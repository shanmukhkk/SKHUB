import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex items-center justify-between w-full">
      <Link to="/" className="flex items-center">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="mr-2"
        >
          <Utensils className="h-8 w-8 text-primary" />
        </motion.div>
        <motion.span 
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          SK<span className="text-primary">HUB</span>
        </motion.span>
      </Link>

      <nav className="hidden lg:flex items-center space-x-8">
        <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>Home</Link>
        <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>About</Link>
        <Link to="/services" className={`nav-link ${isActive('/services') ? 'nav-link-active' : ''}`}>Services</Link>
        <Link to="/register" className={`nav-link ${isActive('/register') ? 'nav-link-active' : ''}`}>Register</Link>
        <Link to="/book" className={`nav-link ${isActive('/book') ? 'nav-link-active' : ''}`}>Book</Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}>Contact</Link>
      </nav>

      <div className="hidden lg:flex items-center space-x-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/register" className="btn-primary">Register Business</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/book" className="btn-outline">Book a Table</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;