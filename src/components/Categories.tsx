import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Shirt, Home, Dumbbell, Book, Watch } from 'lucide-react';

interface CategoriesProps {
  id?: string;
}

const Categories: React.FC<CategoriesProps> = ({ id }) => {
  const categories = [
    { name: 'Electronics', icon: Smartphone, color: 'from-blue-500 to-blue-600' },
    { name: 'Fashion', icon: Shirt, color: 'from-pink-500 to-pink-600' },
    { name: 'Home & Garden', icon: Home, color: 'from-green-500 to-green-600' },
    { name: 'Sports', icon: Dumbbell, color: 'from-orange-500 to-orange-600' },
    { name: 'Books', icon: Book, color: 'from-purple-500 to-purple-600' },
    { name: 'Watches', icon: Watch, color: 'from-gray-500 to-gray-600' },
  ];

  return (
    <motion.section 
      id={id}
      className="py-16 bg-gradient-to-b from-white/80 to-blue-50/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Shop by Category
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our wide range of products across different categories
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                <category.icon className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold text-sm">{category.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Categories;