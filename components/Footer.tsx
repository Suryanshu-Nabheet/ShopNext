/**
 * Footer Component
 * 
 * Modern footer with glassmorphism design matching the website theme.
 * Includes brand information, navigation links, social media, and tech stack.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Youtube, Heart, Mail, MapPin, Phone, ShoppingBag, Package, Shield, Headphones } from 'lucide-react';
import { DEVELOPER_INFO, APP_TAGLINE, COMPANY_INFO } from 'config/constants';

interface FooterProps {
  onNavigateHome?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateHome }) => {
  const handleLogoClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Twitter, href: DEVELOPER_INFO.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: DEVELOPER_INFO.social.linkedin, label: 'LinkedIn' },
    { icon: Github, href: DEVELOPER_INFO.social.github, label: 'GitHub' },
    { icon: Youtube, href: DEVELOPER_INFO.social.youtube, label: 'YouTube' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#', action: () => onNavigateHome?.() },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
  ];

  const features = [
    { icon: ShoppingBag, text: 'Free Shipping' },
    { icon: Package, text: 'Easy Returns' },
    { icon: Shield, text: 'Secure Payment' },
    { icon: Headphones, text: '24/7 Support' },
  ];

  const techStack = ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'];

  return (
    <footer className="relative w-full mt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/60 to-blue-100/40"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 border-t border-white/30 backdrop-blur-xl bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.button
                onClick={handleLogoClick}
                className="group inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                  ShopNext
                </h3>
              </motion.button>
              <p className="text-gray-600 text-sm leading-relaxed">
                {APP_TAGLINE}
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-3 pt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/60 backdrop-blur-sm rounded-lg text-gray-600 hover:text-blue-600 hover:bg-white/80 transition-all duration-300 border border-white/30 hover:border-blue-200/50 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      onClick={link.action}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center group"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Features</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 text-sm">
                    <feature.icon className="h-4 w-4 mr-2 text-blue-600" />
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.zipCode}</span>
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <Phone className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-blue-600 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <Mail className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-600 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="border-t border-white/30 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Built with:</span>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-white/40 hover:border-blue-200/50 hover:bg-white/80 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <span className="font-medium">{DEVELOPER_INFO.name}</span>
                <span className="mx-2">•</span>
                <span>{DEVELOPER_INFO.title}</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/30 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600 flex items-center">
                © {new Date().getFullYear()} <span className="font-semibold text-gray-900 mx-1">ShopNext</span>
                <span className="mx-2">•</span>
                Made with
                <Heart className="h-4 w-4 text-red-500 mx-1.5 animate-pulse" />
                by {DEVELOPER_INFO.name}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
                <span>•</span>
                <a href={DEVELOPER_INFO.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                  <Github className="h-3 w-3" />
                  Open Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
