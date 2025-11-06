import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Truck, Shield, Headphones } from 'lucide-react';
import SafeImage from './SafeImage';

interface HeroProps {
  onViewCollectionsClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewCollectionsClick }) => {
  const features = [
    { icon: Truck, text: 'Free Shipping' },
    { icon: Shield, text: 'Secure Payment' },
    { icon: Headphones, text: '24/7 Support' },
  ];

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/70 to-blue-100/50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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
              Trusted by 50,000+ customers
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover Amazing
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Products
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Shop the latest trends with unbeatable prices, fast shipping, and exceptional customer service.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                onClick={onViewCollectionsClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Collections
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <feature.icon className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main hero image */}
              <motion.div
                className="relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <SafeImage
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shopping Experience"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ShoppingBag className="h-8 w-8" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">4.9/5</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {[
            { number: '50K+', label: 'Happy Customers' },
            { number: '10K+', label: 'Products' },
            { number: '99%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
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
  );
};

export default Hero;