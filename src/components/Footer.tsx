import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-lighter mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Utensils className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-bold text-white">
                SK<span className="text-primary">HUB</span>
              </span>
            </div>
            <p className="text-light-muted mb-4">
              Find, Register, and Experience Bhimavaram's Best Nightlife with SKHUB.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ y: -3, color: '#1877F2' }}
                className="text-light-muted hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3, color: '#E4405F' }}
                className="text-light-muted hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3, color: '#1DA1F2' }}
                className="text-light-muted hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-light-muted hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-light-muted hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-light-muted hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/register" className="text-light-muted hover:text-primary transition-colors">Register Business</Link></li>
              <li><Link to="/book" className="text-light-muted hover:text-primary transition-colors">Book a Table</Link></li>
              <li><Link to="/contact" className="text-light-muted hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-light-muted hover:text-primary transition-colors">Pub Registration</Link></li>
              <li><Link to="/services" className="text-light-muted hover:text-primary transition-colors">Restaurant Booking</Link></li>
              <li><Link to="/services" className="text-light-muted hover:text-primary transition-colors">Event Hosting</Link></li>
              <li><Link to="/services" className="text-light-muted hover:text-primary transition-colors">VIP Memberships</Link></li>
              <li><Link to="/services" className="text-light-muted hover:text-primary transition-colors">Catering Services</Link></li>
              <li><Link to="/services" className="text-light-muted hover:text-primary transition-colors">AI Recommendations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-light-muted">123 Main Street, Bhimavaram, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-light-muted">+91 987XX-XXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-light-muted">info@skhub.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-muted text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SKHUB. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-light-muted hover:text-primary text-sm transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-light-muted hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="text-light-muted hover:text-primary text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;