import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Calendar, 
  Users, 
  Star, 
  Gift, 
  Sparkles,
  Check,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Utensils,
      title: 'Pub & Restaurant Registration',
      description: 'Register your business on SKHUB and reach thousands of potential customers in Bhimavaram.',
      color: 'bg-primary'
    },
    {
      icon: Calendar,
      title: 'Table Booking System',
      description: 'Allow customers to book tables at your venue with our easy-to-use booking system. Manage reservations efficiently.',
      color: 'bg-secondary'
    },
    {
      icon: Users,
      title: 'Event Hosting & Catering',
      description: 'Promote and host private parties, corporate events, and special occasions through our platform.',
      color: 'bg-accent-blue'
    },
    {
      icon: Gift,
      title: 'VIP Memberships',
      description: 'Offer exclusive perks, discounts, and priority bookings to your loyal customers with our VIP membership program.',
      color: 'bg-accent-pink'
    },
    {
      icon: Star,
      title: 'Reviews & Ratings',
      description: 'Build your reputation with authentic reviews and ratings from real customers. Respond to feedback and improve your service.',
      color: 'bg-accent-yellow'
    },
    {
      icon: Sparkles,
      title: 'AI Recommendations',
      description: 'Leverage our AI-powered recommendation system to suggest your venue to customers based on their preferences and past bookings.',
      color: 'bg-accent-purple'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark-lighter opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-light-muted mb-8">
              SKHUB offers a comprehensive suite of services for both businesses and customers, making nightlife in Bhimavaram more accessible and enjoyable.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              Explore our range of services designed to enhance the nightlife experience for both businesses and customers in Bhimavaram.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="card hover:shadow-lg"
                >
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${service.color}`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-light-muted">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              Our platform is designed to be simple and intuitive for both businesses and customers. Here's how it works.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                For <span className="text-primary">Businesses</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Register Your Business',
                    description: 'Sign up and create a profile for your pub, restaurant, or nightclub on SKHUB.'
                  },
                  {
                    step: '02',
                    title: 'Set Up Your Profile',
                    description: 'Add details about your venue, including photos, menu, operating hours, and available services.'
                  },
                  {
                    step: '03',
                    title: 'Manage Bookings',
                    description: 'Receive and manage table reservations through our intuitive dashboard.'
                  },
                  {
                    step: '04',
                    title: 'Grow Your Business',
                    description: 'Gain visibility, attract new customers, and build your reputation with reviews and ratings.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                      <p className="text-light-muted">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Link to="/register" className="btn-primary inline-flex items-center">
                  Register Your Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                For <span className="text-primary">Customers</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Explore Venues',
                    description: 'Browse through our curated list of pubs, restaurants, and nightclubs in Bhimavaram.'
                  },
                  {
                    step: '02',
                    title: 'Check Availability',
                    description: 'View real-time availability of tables and seating options at your preferred venue.'
                  },
                  {
                    step: '03',
                    title: 'Book a Table',
                    description: 'Reserve a table for your desired date and time with just a few clicks.'
                  },
                  {
                    step: '04',
                    title: 'Enjoy & Review',
                    description: 'Visit the venue, enjoy your experience, and leave a review to help others.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                      <p className="text-light-muted">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Link to="/book" className="btn-outline inline-flex items-center">
                  Book a Table
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Pricing <span className="text-primary">Plans</span>
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              Choose the plan that best fits your business needs. All plans include access to our platform and basic features.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-dark-card rounded-xl border border-dark-border p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Basic</h3>
              <p className="text-light-muted mb-6">Essential features for small businesses.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">₹999</span>
                <span className="text-light-muted">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Business profile listing',
                  'Basic booking management',
                  'Customer reviews & ratings',
                  'Email support',
                  'Monthly performance reports',
                  'Up to 50 bookings/month'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span className="text-light-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/register" className="btn-outline w-full block text-center">
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Business Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dark-card rounded-xl border-2 border-primary p-8 transform scale-105 relative"
            >
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Business</h3>
              <p className="text-light-muted mb-6">Complete solution for growing venues.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">₹1499</span>
                <span className="text-light-muted">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'All Basic plan features',
                  'Priority listing placement',
                  'Advanced booking management',
                  'Photo gallery & menu display',
                  'Social media integration',
                  'Priority email & phone support',
                  'Unlimited bookings',
                  'Promotional offers & discounts'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span className="text-light-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/register" className="btn-primary w-full block text-center">
                  Register Now
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-card rounded-xl border border-dark-border p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Premium</h3>
              <p className="text-light-muted mb-6">Advanced features for growing businesses.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">₹2499</span>
                <span className="text-light-muted">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'All Business plan features',
                  'Featured listing placement',
                  'Advanced analytics dashboard',
                  'Marketing tools and promotions',
                  'Dedicated account manager',
                  'Priority customer support',
                  'Custom branding options',
                  'API access for integration'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span className="text-light-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn-outline w-full block text-center">
                  Contact Sales
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              Find answers to common questions about our services and platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'How do I register my business on SKHUB?',
                answer: 'Registering your business is easy! Simply click on the "Register Business" button, fill out the required information about your venue, upload necessary documents, and submit your application. Our team will review it and get back to you within 48 hours.'
              },
              {
                question: 'Is there a fee for customers to book tables?',
                answer: 'No, customers can book tables through SKHUB completely free of charge. We believe in providing a seamless experience for users without any hidden fees or charges.'
              },
              {
                question: 'How does the booking system work?',
                answer: 'Our booking system allows customers to search for venues, check real-time availability, and make instant reservations. Businesses receive notifications about new bookings and can manage them through their dashboard. Customers receive confirmation via email or SMS.'
              },
              {
                question: 'Can I modify or cancel my booking?',
                answer: 'Yes, customers can modify or cancel their bookings up to 2 hours before the reservation time without any penalty. Simply log in to your account, go to your bookings, and make the necessary changes.'
              },
              {
                question: 'What types of businesses can register on SKHUB?',
                answer: 'SKHUB is designed for all types of nightlife and dining establishments in Bhimavaram, including pubs, bars, restaurants, cafés, lounges, nightclubs, and similar venues.'
              },
              {
                question: 'How do I become a VIP member?',
                answer: 'You can join our VIP membership program by clicking on the "Join VIP Program" button and selecting a membership tier. VIP members enjoy benefits like priority bookings, exclusive discounts, and special event invitations.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-card rounded-xl border border-dark-border p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-light-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-light-muted mb-4">
              Still have questions? We're here to help!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-dark-card to-dark-lighter p-8 md:p-12 rounded-2xl border border-dark-border text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-primary">Nightlife Experience</span>?
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto mb-8">
              Join SKHUB today and discover the best of Bhimavaram's nightlife scene. Whether you're a business owner or a customer, we have the perfect solution for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/register"
                className="btn-primary"
              >
                Register Your Business
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/book"
                className="btn-outline"
              >
                Book a Table
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;