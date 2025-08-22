import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onNavigate: (page: 'home' | 'products' | 'about') => void;
  onScrollToSection: (sectionId: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onNavigate, onScrollToSection, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();


  const handleNavClick = (item: string) => {
    if (item === 'Home') {
      onNavigate('home');
    } else if (item === 'Products') {
      onNavigate('products');
    } else if (item === 'About') {
      onNavigate('about');
    }
    setIsMenuOpen(false);
  };

  // Show simplified header only on specific pages (not products, product-details, or about)
  if (currentPage !== 'home' && currentPage !== 'products' && currentPage !== 'product-details' && currentPage !== 'about') {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-7xl mx-auto">
          <nav className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50/50 to-blue-100/30 opacity-80"></div>
            
            <div className="relative px-6 py-3">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <button 
                    onClick={() => onNavigate('home')}
                    className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform"
                  >
                    ShopNext
                  </button>
                </div>

                {/* Cart Icon */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-125 transition-all duration-500 blur-md"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-110 transition-all duration-300 blur-sm"></div>
                  <button 
                    onClick={onCartClick}
                    className="relative z-10 p-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-white/80 rounded-xl transform hover:scale-105 hover:shadow-xl hover:shadow-blue-200/50 border border-transparent hover:border-blue-200/30"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {state.items.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-lg animate-pulse">
                        {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }

  // Don't show header on products and product-details pages (but show on about page)
  if (currentPage === 'products' || currentPage === 'product-details') {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Navigation Container */}
        <nav className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Gradient Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50/50 to-blue-100/30 opacity-80"></div>
          
          {/* Navigation Content */}
          <div className="relative px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <button 
                  onClick={() => onNavigate('home')}
                  data-navigate-home
                  data-navigate-home
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform"
                >
                  ShopNext
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {['Home', 'Products', 'About'].map((item) => (
                  <div key={item} className="relative group">
                    {/* Enhanced Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-125 transition-all duration-500 blur-md"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-110 transition-all duration-300 blur-sm"></div>
                    
                    {/* Navigation Link with enhanced effects */}
                    <button
                      onClick={() => handleNavClick(item)}
                      className="relative z-10 px-6 py-2 text-gray-700 hover:text-blue-600 rounded-xl font-medium transition-all duration-300 hover:bg-white/80 hover:shadow-xl transform hover:scale-105 hover:shadow-blue-200/50 border border-transparent hover:border-blue-200/30"
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>

              {/* Search Bar */}
              <div className="hidden md:flex flex-1 max-w-md mx-6">
                <div className="relative w-full group">
                  {/* Search Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-105 transition-all duration-300 blur-sm"></div>
                  
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="relative z-10 w-full pl-10 pr-4 py-2 bg-white/60 border border-gray-200/50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-white/80 transition-all duration-300 backdrop-blur-sm"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 z-20" />
                </div>
              </div>

              {/* Right Icons */}
              <div className="flex items-center space-x-2">
                {/* Cart Icon */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-125 transition-all duration-500 blur-md"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-110 transition-all duration-300 blur-sm"></div>
                  <button 
                    onClick={onCartClick}
                    className="relative z-10 p-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-white/80 rounded-xl transform hover:scale-105 hover:shadow-xl hover:shadow-blue-200/50 border border-transparent hover:border-blue-200/30"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {state.items.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-lg animate-pulse">
                        {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                      </span>
                    )}
                  </button>
                </div>
                
                {/* Mobile menu button */}
                <div className="lg:hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-125 transition-all duration-500 blur-md"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-110 transition-all duration-300 blur-sm"></div>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="relative z-10 p-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-white/80 rounded-xl transform hover:scale-105 hover:shadow-xl hover:shadow-blue-200/50 border border-transparent hover:border-blue-200/30"
                  >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 relative">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-blue-100/30 opacity-80"></div>
              
              <div className="relative p-6 space-y-4">
                {/* Mobile Search */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-110 transition-all duration-500 blur-md"></div>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="relative z-10 w-full pl-10 pr-4 py-2 bg-white/60 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-white/80 transition-all duration-300 hover:shadow-lg"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 z-20" />
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {['Home', 'Products', 'About'].map((item) => (
                    <div key={item} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-110 transition-all duration-500 blur-md"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transform scale-98 group-hover:scale-105 transition-all duration-300 blur-sm"></div>
                      <button
                        onClick={() => handleNavClick(item)}
                        className="relative z-10 block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-white/80 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-200/30 border border-transparent hover:border-blue-200/30"
                      >
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;