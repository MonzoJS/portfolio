'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay?: number;
  price: string;
}

export default function ServiceCard({ title, description, icon: Icon, delay = 0, price }: ServiceCardProps) {
  const IconComponent = Icon as React.ComponentType<any>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/20 min-h-[220px] md:min-h-[240px] flex flex-col justify-between">
        <motion.div
          className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <IconComponent className="w-7 h-7 text-white" />
        </motion.div>
        
        <h3 className="text-xl font-display font-bold mb-4 text-gray-900 dark:text-white">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {description}
        </p>
        
        <Link
          href="#contact"
          scroll={true}
          className="mt-4 w-full inline-flex items-center justify-center py-2.5 bg-gradient-to-r from-primary-500 via-indigo-500 to-secondary-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
        >
          {price}
        </Link>
        
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
} 