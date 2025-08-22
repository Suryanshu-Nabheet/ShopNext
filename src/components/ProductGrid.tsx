import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  badge?: string;
}

interface ProductGridProps {
  onProductClick: (product: Product) => void;
  onViewAllClick: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick, onViewAllClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 129.99,
      originalPrice: 199.99,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      reviews: 234,
      category: "Electronics",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 156,
      category: "Fashion"
    },
    {
      id: 3,
      name: "Smart Watch Series 5",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      reviews: 423,
      category: "Electronics",
      badge: "New"
    },
    {
      id: 4,
      name: "Minimalist Desk Lamp",
      price: 79.99,
      image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      reviews: 89,
      category: "Home"
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 119.99,
      originalPrice: 159.99,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.5,
      reviews: 267,
      category: "Sports"
    },
    {
      id: 6,
      name: "Leather Backpack",
      price: 149.99,
      image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      reviews: 178,
      category: "Fashion",
      badge: "Premium"
    },
    {
      id: 7,
      name: "Coffee Maker Pro",
      price: 199.99,
      image: "https://images.pexels.com/photos/4226883/pexels-photo-4226883.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      reviews: 145,
      category: "Home"
    },
    {
      id: 8,
      name: "Yoga Mat Premium",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      reviews: 203,
      category: "Sports"
    }
  ];

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <motion.section 
      className="py-16 bg-gradient-to-b from-white/90 to-blue-50/70"
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
            Featured Products
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our handpicked selection of premium products
          </motion.p>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button 
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewAllClick}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductGrid;