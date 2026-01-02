/**
 * Global TypeScript type definitions for ShopNext eCommerce application
 *
 * This file contains all shared interfaces, types, and enums used across the application.
 * Centralizing types here ensures consistency and makes refactoring easier.
 */

// ============================================================================
// Product Types
// ============================================================================

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  badge?: string;
  brand?: string;
}

// ============================================================================
// Cart Types
// ============================================================================

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" };

// ============================================================================
// Order Types
// ============================================================================

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
}

export interface OrderData {
  orderId: string;
  product?: Product;
  items?: CartItem[];
  quantity?: number;
  customerInfo: CustomerInfo;
  orderDate: string;
  total?: number;
  subtotal?: number;
  tax: string;
  shipping: number;
  grandTotal: string;
  isCartOrder?: boolean;
}

// ============================================================================
// Category Types
// ============================================================================

export interface Category {
  name: string;
  icon: string;
  color: string;
}

// ============================================================================
// Page Navigation Types
// ============================================================================

export type Page =
  | "home"
  | "products"
  | "about"
  | "product-details"
  | "checkout"
  | "order-confirmation"
  | "cart-checkout";
