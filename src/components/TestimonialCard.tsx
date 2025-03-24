import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card p-6 h-full flex flex-col"
    >
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary"
        />
        <div>
          <h4 className="text-white font-medium">{name}</h4>
          <p className="text-light-muted text-sm">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-accent-yellow fill-accent-yellow' : 'text-dark-border'}`} 
          />
        ))}
      </div>
      
      <p className="text-light-muted flex-grow">{content}</p>
    </motion.div>
  );
};

export default TestimonialCard;