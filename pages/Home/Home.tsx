/**
 * Home Page
 * 
 * Main landing page with hero section, categories, featured products, and newsletter.
 * This is a complete page component that includes all home page sections.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Truck, Shield, Headphones, Smartphone, Shirt, Home as HomeIcon, Dumbbell, Book, Watch } from 'lucide-react';
import { Product } from 'types';
import { heroData, categoriesData } from 'data/homeData';
import { featuredProducts } from 'data/productsData';
import { ProductCard, SafeImage, HoverBorderGradient, GlobalReach } from 'components/ui';
import Newsletter from 'components/Newsletter';

interface HomeProps {
  onProductClick: (product: Product) => void;
  onViewCollectionsClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick, onViewCollectionsClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports'];

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Truck,
    Shield,
    Headphones,
    Smartphone,
    Shirt,
    Home: HomeIcon,
    Dumbbell,
    Book,
    Watch,
  };

  const filteredProducts = selectedCategory === 'All' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/70 to-blue-100/50"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center bg-blue-100/80 backdrop-blur-sm text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Star className="h-4 w-4 mr-2 fill-current" />
                {heroData.trustBadge.text}
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroData.title}
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {heroData.titleHighlight}
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {heroData.description}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 px-8 py-4 font-semibold text-lg"
                  onClick={onViewCollectionsClick}
                >
                  <span>{heroData.ctaText}</span>
                </HoverBorderGradient>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {heroData.features.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon];
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    >
                      {IconComponent && <IconComponent className="h-5 w-5 text-blue-600" />}
                      <span className="font-medium">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <motion.div
                  className="relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <SafeImage
                    src={heroData.heroImage}
                    alt="Shopping Experience"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  
                  <motion.div
                    className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ShoppingBag className="h-8 w-8" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{heroData.rating.value}/{heroData.rating.max}</span>
                    </div>
                  </motion.div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {heroData.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Global Reach Section */}
      <GlobalReach
        title="Global"
        titleHighlight="Reach"
        description="ShopNext delivers to customers worldwide. Experience seamless shopping from anywhere, with fast shipping and exceptional service across the globe."
        dots={[
          {
            start: { lat: 40.7128, lng: -74.0060 }, // New York
            end: { lat: 51.5074, lng: -0.1278 }, // London
          },
          {
            start: { lat: 40.7128, lng: -74.0060 }, // New York
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
          },
          {
            start: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: -23.5505, lng: -46.6333 }, // São Paulo
          },
        ]}
        lineColor="#3b82f6"
      />

      {/* Categories Section */}
      <motion.section 
        id="categories"
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
              {categoriesData.title}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {categoriesData.description}
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {categoriesData.categories.map((category, index) => {
              const IconComponent = iconMap[category.icon];
              // Map color strings to full Tailwind gradient classes
              const gradientClasses: Record<string, string> = {
                'from-blue-500 to-blue-600': 'from-blue-500 to-blue-600',
                'from-pink-500 to-pink-600': 'from-pink-500 to-pink-600',
                'from-green-500 to-green-600': 'from-green-500 to-green-600',
                'from-orange-500 to-orange-600': 'from-orange-500 to-orange-600',
                'from-purple-500 to-purple-600': 'from-purple-500 to-purple-600',
                'from-gray-500 to-gray-600': 'from-gray-500 to-gray-600',
              };
              const gradientClass = gradientClasses[category.color] || 'from-blue-500 to-blue-600';
              
              return (
                <motion.button
                  key={category.name}
                  onClick={() => {
                    setSelectedCategory(category.name);
                    onViewCollectionsClick();
                  }}
                  className="group relative cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Base background - same for all */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center transform transition-all duration-300 border border-gray-200/50 shadow-sm group-hover:shadow-xl overflow-hidden">
                    {/* Hover gradient background - positioned behind content */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0`}></div>
                    
                    {/* Content - positioned above gradient */}
                    <div className="relative z-10">
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 mx-auto mb-3 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      )}
                      <h3 className="font-semibold text-sm text-gray-800 group-hover:text-white transition-colors duration-300">{category.name}</h3>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products Section */}
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
              onClick={onViewCollectionsClick}
            >
              View All Products
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};

export default Home;

