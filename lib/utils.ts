/**
 * Utility functions
 * 
 * Helper functions used across the application for common operations.
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes
 * Utility function for combining className strings with proper Tailwind merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate discount percentage
 */
export const calculateDiscount = (originalPrice: number, currentPrice: number): number => {
  if (!originalPrice || originalPrice <= currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

/**
 * Format currency
 */
export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2)}`;
};

/**
 * Calculate order totals
 */
export interface OrderTotals {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export const calculateOrderTotals = (
  subtotal: number,
  taxRate: number = 0.08,
  freeShippingThreshold: number = 50,
  shippingCost: number = 9.99
): OrderTotals => {
  const tax = subtotal * taxRate;
  const shipping = subtotal > freeShippingThreshold ? 0 : shippingCost;
  const total = subtotal + tax + shipping;

  return {
    subtotal,
    tax,
    shipping,
    total
  };
};

/**
 * Format date
 */
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Generate order ID
 */
export const generateOrderId = (): string => {
  return `ORD-${Date.now()}`;
};

/**
 * Generate transaction ID
 */
export const generateTransactionId = (): string => {
  return `TXN-${Date.now()}`;
};

