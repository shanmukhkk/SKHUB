import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Building, 
  Clock, 
  Shield, 
  Smile,
  ChevronRight
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { value: '200+', label: 'Registered Businesses' },
    { value: '5000+', label: 'Monthly Bookings' },
    { value: '15,000+', label: 'Active Users' },
    { value: '4.8/5', label: 'Average Rating' }
  ];
  
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, ensuring the best experience for both businesses and customers.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in building a strong community of businesses and customers, fostering relationships and growth.'
    },
    {
      icon: Building,
      title: 'Local Support',
      description: 'We are committed to supporting local businesses in Bhimavaram and helping them thrive in the digital age.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Our platform is designed to be reliable and efficient, ensuring smooth operations for all users.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'We prioritize trust and transparency in all our interactions, maintaining the highest standards of integrity.'
    },
    {
      icon: Smile,
      title: 'Customer Satisfaction',
      description: 'The satisfaction of our users is our top priority, and we continuously work to improve our services.'
    }
  ];
  
  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'With over 15 years of experience in the hospitality industry, Rajesh founded SKHUB to revolutionize the nightlife scene in Bhimavaram.'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1598346762291-aee88549193f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Priya leads our technology team, bringing her expertise in software development and user experience design to create our innovative platform.'
    },
    {
      name: 'Vikram Singh',
      role: 'Head of Business Relations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Vikram manages our relationships with businesses, ensuring they get the most out of our platform and providing personalized support.'
    },
    {
      name: 'Ananya Patel',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      bio: 'Ananya leads our marketing efforts, creating compelling campaigns that connect businesses with customers and drive growth.'
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark-lighter opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              About <span className="text-primary">SKHUB</span>
            </h1>
            <p className="text-xl text-light-muted mb-8">
              We're on a mission to transform the nightlife experience in Bhimavaram by connecting people with the best pubs, restaurants, and entertainment venues.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-light-muted mb-4">
                SKHUB was founded in 2025 with a simple goal: to make it easier for people to discover and experience the vibrant nightlife of Bhimavaram. What started as a small project has grown into the city's premier platform for pub and restaurant registration and booking.
              </p>
              <p className="text-light-muted mb-4">
                Our founder, noticed a gap in the market when he struggled to find information about local venues and make reservations. He envisioned a platform that would connect businesses with customers seamlessly, enhancing the nightlife experience for everyone.
              </p>
              <p className="text-light-muted mb-4">
                Today, SKHUB serves thousands of users and hundreds of businesses in Bhimavaram, with plans to expand to other cities in the near future. We're proud of our journey and excited about what lies ahead.
              </p>
              <div className="mt-8">
                <a href="/contact" className="text-primary hover:text-primary-hover flex items-center">
                  Get in touch with us
                  <ChevronRight className="h-5 w-5 ml-1" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden h-40">
                      <img 
                        src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                        alt="Rooftop bar" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden h-64">
                      <img 
                        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                        alt="Restaurant interior" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-lg overflow-hidden h-64">
                      <img 
                        src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                        alt="Bar counter" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden h-40">
                      <img 
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                        alt="Restaurant table" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -bottom-10 -left-10 bg-dark-card p-4 rounded-lg shadow-lg"
                >
                  <div className="text-primary text-3xl font-bold">2023</div>
                  <div className="text-white">Year Founded</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
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
              SKHUB by the <span className="text-primary">Numbers</span>
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              Our platform has grown rapidly since its inception, connecting businesses and customers across Bhimavaram.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-card rounded-xl p-6 text-center"
              >
                <div className="text-primary text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-light-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
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
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              These core principles guide everything we do at SKHUB, from product development to customer service.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-card rounded-xl p-6 border border-dark-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-light-muted">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
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
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              The passionate individuals behind SKHUB who work tirelessly to provide the best experience for our users.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-card rounded-xl overflow-hidden border border-dark-border"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-light-muted text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-dark-card to-dark-lighter p-8 md:p-12 rounded-2xl border border-dark-border text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Join the <span className="text-primary">SKHUB</span> Community
            </h2>
            <p className="text-light-muted max-w-2xl mx-auto mb-8">
              Whether you're a business owner looking to reach more customers or a nightlife enthusiast seeking the best experiences, SKHUB has something for you.
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

export default About;