import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, color }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card hover:shadow-lg group"
    >
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${color}`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-light-muted">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;