import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedMap from '../components/AnimatedMap';
import { 
  Utensils, 
  Calendar, 
  Users, 
  Star, 
  Gift, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Utensils,
      title: 'Pub & Restaurant Registration',
      description: 'Register your business on SKHUB and reach thousands of potential customers in Bhimavaram.',
      color: 'bg-primary'
    },
    {
      icon: Calendar,
      title: 'Table Booking System',
      description: 'Book tables at your favorite venues with our easy-to-use booking system. No more waiting in lines!',
      color: 'bg-secondary'
    },
    {
      icon: Users,
      title: 'Event Hosting & Catering',
      description: 'Plan and host private parties, corporate events, and special occasions with our partner venues.',
      color: 'bg-accent-blue'
    },
    {
      icon: Gift,
      title: 'VIP Memberships',
      description: 'Enjoy exclusive perks, discounts, and priority bookings with our VIP membership program.',
      color: 'bg-accent-pink'
    },
    {
      icon: Star,
      title: 'Reviews & Ratings',
      description: 'Make informed decisions with authentic reviews and ratings from real customers.',
      color: 'bg-accent-yellow'
    },
    {
      icon: Sparkles,
      title: 'AI Recommendations',
      description: 'Get personalized venue suggestions based on your preferences and past bookings.',
      color: 'bg-accent-purple'
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Restaurant Owner',
      content: 'SKHUB has transformed our business. We\'ve seen a 40% increase in bookings since joining the platform!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Priya Patel',
      role: 'Regular Customer',
      content: 'I love how easy it is to find and book tables at the best restaurants in town. The app is so intuitive!',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Vikram Singh',
      role: 'Pub Owner',
      content: 'The registration process was smooth, and the dashboard makes it easy to manage bookings and promotions.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need for the <span className="text-primary">Perfect Night Out</span>
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              SKHUB offers a comprehensive suite of services for both businesses and customers, making nightlife in Bhimavaram more accessible and enjoyable.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore <span className="text-primary">Bhimavaram's Nightlife</span> Map
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              Discover the best pubs, restaurants, and clubs in Bhimavaram with our interactive map. Click on a venue to see details and book a table.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedMap />
          </motion.div>
        </div>
      </section>
      
      {/* Registration CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Register Your <span className="text-primary">Business</span> on SKHUB
              </h2>
              <p className="text-light-muted mb-8">
                Join hundreds of successful businesses in Bhimavaram that have increased their visibility and bookings through SKHUB. Our platform makes it easy to manage reservations, showcase your venue, and attract new customers.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Increase visibility and reach more customers',
                  'Easy-to-use dashboard for managing bookings',
                  'Promote special events and offers',
                  'Collect reviews and build your reputation',
                  'Access detailed analytics and insights'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="text-primary mr-3 mt-1">✓</div>
                    <span className="text-light-muted">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/register" className="btn-primary inline-flex items-center">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
              </div>
              
              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-10 -left-10 bg-dark-card p-4 rounded-lg shadow-lg"
              >
                <div className="text-primary text-3xl font-bold">200+</div>
                <div className="text-white">Registered Businesses</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-10 -right-10 bg-dark-card p-4 rounded-lg shadow-lg"
              >
                <div className="text-accent-blue text-3xl font-bold">5000+</div>
                <div className="text-white">Monthly Bookings</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our <span className="text-primary">Users Say</span>
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              Don't just take our word for it. Here's what business owners and customers have to say about SKHUB.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-dark-card to-dark-lighter p-8 md:p-12 rounded-2xl border border-dark-border text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for an <span className="text-primary">Unforgettable Night</span>?
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto mb-8">
              Book a table at your favorite pub or restaurant in Bhimavaram with just a few clicks. No more waiting in lines or making phone calls.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link to="/book" className="btn-primary inline-flex items-center">
                Book a Table Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;