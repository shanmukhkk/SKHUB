import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="container-custom py-20 min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-9xl font-bold text-primary">404</div>
          <h1 className="text-3xl font-bold text-white mt-4">Page Not Found</h1>
          <p className="text-light-muted mt-4 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="btn-primary flex items-center justify-center">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="btn-outline flex items-center justify-center">
              <Search className="mr-2 h-5 w-5" />
              Contact Support
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;