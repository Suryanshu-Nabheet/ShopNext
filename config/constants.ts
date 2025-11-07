/**
 * Global constants and configuration values
 * 
 * Centralized configuration for the entire application.
 * Update values here to change behavior across the app.
 */

// ============================================================================
// Application Constants
// ============================================================================

export const APP_NAME = 'ShopNext';
export const APP_TAGLINE = 'Modern e-commerce platform built with React & TypeScript';

// ============================================================================
// Business Constants
// ============================================================================

export const TAX_RATE = 0.08; // 8% tax rate
export const FREE_SHIPPING_THRESHOLD = 50; // Free shipping over $50
export const SHIPPING_COST = 9.99; // Standard shipping cost
export const RETURN_POLICY_DAYS = 30; // 30-day return policy

// ============================================================================
// Product Constants
// ============================================================================

export const PRODUCT_CATEGORIES = ['All', 'Electronics', 'Fashion', 'Home', 'Sports'] as const;
export const SORT_OPTIONS = {
  FEATURED: 'featured',
  PRICE_LOW: 'price-low',
  PRICE_HIGH: 'price-high',
  RATING: 'rating',
  REVIEWS: 'reviews',
} as const;

// ============================================================================
// Company Information
// ============================================================================

export const COMPANY_INFO = {
  name: 'ShopNext',
  address: '123 Commerce Street',
  city: 'New York',
  state: 'NY',
  zipCode: '10001',
  phone: '1-800-SHOP-NEXT',
  email: 'support@shopnext.com',
} as const;

// ============================================================================
// Developer Information
// ============================================================================

export const DEVELOPER_INFO = {
  name: 'Suryanshu Nabheet',
  title: 'Full-Stack Developer',
  email: 'suryanshunab@gmail.com',
  social: {
    twitter: 'https://x.com/SuryanshuXDev',
    linkedin: 'https://www.linkedin.com/in/suryanshu-nabheet/',
    github: 'https://github.com/Suryanshu-Nabheet',
    youtube: 'https://www.youtube.com/@SuryanshuNabheet/',
  },
} as const;

