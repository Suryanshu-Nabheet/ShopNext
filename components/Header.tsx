/**
 * Header Component (Resizable Navbar)
 * 
 * Modern resizable navbar that adapts on scroll.
 * Integrates with ShopNext's navigation and cart functionality.
 */

import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import { useCart } from 'context/CartContext';
import { Page } from 'types';
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from 'components/ui/resizable-navbar';

interface HeaderProps {
  onCartClick: () => void;
  onNavigate: (page: Page) => void;
  onScrollToSection: (sectionId: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onNavigate, currentPage }) => {
  // All hooks must be called at the top level, before any conditional returns
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const { state } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    if (item === 'Home') {
      onNavigate('home');
    } else if (item === 'Products') {
      onNavigate('products');
    } else if (item === 'About') {
      onNavigate('about');
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      name: 'Home',
      link: '#',
    },
    {
      name: 'Products',
      link: '#',
    },
    {
      name: 'About',
      link: '#',
    },
  ];

  const cartItemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  // Don't show navbar on products and product-details pages
  if (currentPage === 'products' || currentPage === 'product-details') {
    return null;
  }

  // Simplified navbar for checkout/order pages
  if (currentPage !== 'home' && currentPage !== 'about') {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-7xl mx-auto">
          <nav className="relative rounded-2xl overflow-hidden border border-white/30 backdrop-blur-xl bg-white/40 shadow-[0_4px_24px_0_rgba(59,130,246,0.1),0_0_0_1px_rgba(255,255,255,0.2)_inset]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white/30 to-blue-50/50 -z-10"></div>
            <div className="relative px-6 py-3">
              <div className="flex items-center justify-between">
                <NavbarLogo onClick={() => onNavigate('home')} />
                <button 
                  onClick={onCartClick}
                  className="relative p-2.5 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-white/50 rounded-xl backdrop-blur-sm border border-transparent hover:border-white/30 group"
                >
                  <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-110" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-lg animate-pulse">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo onClick={() => onNavigate('home')} visible={isNavbarVisible} />
          <CustomNavItems 
            items={navItems}
            onItemClick={handleNavClick}
            visible={isNavbarVisible}
          />
          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative p-2.5 text-gray-500 hover:text-blue-600 transition-all duration-300 hover:bg-white/50 rounded-xl backdrop-blur-sm border border-transparent hover:border-white/30 group opacity-80 hover:opacity-100"
            >
              <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-110" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-lg animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo onClick={() => onNavigate('home')} />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <button
                key={`mobile-link-${idx}`}
                onClick={() => handleNavClick(item.name)}
                className="relative text-gray-700 hover:text-blue-600 text-left w-full px-4 py-3 hover:bg-white/50 rounded-xl transition-all duration-200 font-medium backdrop-blur-sm border border-transparent hover:border-white/30"
              >
                <span className="block">{item.name}</span>
              </button>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4 border-t border-white/20">
              <button
                onClick={() => {
                  onCartClick();
                  setIsMobileMenuOpen(false);
                }}
                className="relative w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <ShoppingCart className="h-5 w-5" />
                Cart
                {cartItemCount > 0 && (
                  <span className="bg-white/20 backdrop-blur-sm text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border border-white/30">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

// Custom NavItems component that handles navigation properly
const CustomNavItems = ({ 
  items, 
  onItemClick,
  visible = false
}: { 
  items: { name: string; link: string }[];
  onItemClick: (item: string) => void;
  visible?: boolean;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
        visible ? "text-gray-700" : "text-gray-500"
      )}
    >
      {items.map((item, idx) => (
        <button
          onMouseEnter={() => setHovered(idx)}
          onClick={() => onItemClick(item.name)}
          className={cn(
            "relative px-4 py-2 transition-colors duration-200",
            visible 
              ? "text-gray-700 hover:text-blue-600" 
              : "text-gray-500/80 hover:text-gray-600"
          )}
          key={`link-${idx}`}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className={cn(
                "absolute inset-0 h-full w-full rounded-full backdrop-blur-sm shadow-sm",
                visible 
                  ? "bg-white/60 border border-white/40" 
                  : "bg-white/30 border border-white/20"
              )}
            />
          )}
          <span className="relative z-20 font-medium">{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Header;
