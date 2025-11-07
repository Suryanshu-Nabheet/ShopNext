/**
 * Centralized product data
 * 
 * All product information is stored here for easy management and updates.
 * This includes product details, images, pricing, and metadata.
 */

import { Product } from 'types';

// ============================================================================
// All Products Database
// ============================================================================

export const allProducts: Product[] = [
  // Electronics (12 products)
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 129.99,
    originalPrice: 199.99,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    reviews: 234,
    category: "Electronics",
    brand: "AudioTech",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    reviews: 423,
    category: "Electronics",
    brand: "TechPro",
    badge: "New"
  },
  {
    id: 3,
    name: "Wireless Earbuds Pro",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviews: 189,
    category: "Electronics",
    brand: "AudioTech"
  },
  {
    id: 4,
    name: "4K Webcam HD",
    price: 79.99,
    image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    reviews: 156,
    category: "Electronics",
    brand: "CamTech"
  },
  {
    id: 5,
    name: "Gaming Mechanical Keyboard",
    price: 149.99,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviews: 298,
    category: "Electronics",
    brand: "GameGear"
  },
  {
    id: 6,
    name: "Wireless Gaming Mouse",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    reviews: 167,
    category: "Electronics",
    brand: "GameGear"
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviews: 203,
    category: "Electronics",
    brand: "SoundWave"
  },
  {
    id: 8,
    name: "USB-C Hub 7-in-1",
    price: 39.99,
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    reviews: 134,
    category: "Electronics",
    brand: "TechPro"
  },
  {
    id: 9,
    name: "Smartphone Stand Adjustable",
    price: 24.99,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.2,
    reviews: 89,
    category: "Electronics",
    brand: "AccessPro"
  },
  {
    id: 10,
    name: "Wireless Charging Pad",
    price: 34.99,
    image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    reviews: 178,
    category: "Electronics",
    brand: "ChargeTech"
  },
  {
    id: 11,
    name: "LED Monitor 24 inch",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviews: 245,
    category: "Electronics",
    brand: "ViewTech"
  },
  {
    id: 12,
    name: "Power Bank 20000mAh",
    price: 49.99,
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    reviews: 167,
    category: "Electronics",
    brand: "PowerMax"
  },

  // Fashion (10 products)
  {
    id: 13,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviews: 156,
    category: "Fashion",
    brand: "StyleCo"
  },
  {
    id: 14,
    name: "Leather Backpack",
    price: 149.99,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    reviews: 178,
    category: "Fashion",
    brand: "LeatherCraft",
    badge: "Premium"
  },
  {
    id: 15,
    name: "Denim Jacket Classic",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    reviews: 134,
    category: "Fashion",
    brand: "DenimWorks"
  },
  {
    id: 16,
    name: "Casual Sneakers",
    price: 89.99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    reviews: 198,
    category: "Fashion",
    brand: "FootComfort"
  },
  {
    id: 17,
    name: "Wool Scarf",
    price: 39.99,
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    reviews: 87,
    category: "Fashion",
    brand: "WarmWear"
  },
  {
    id: 18,
    name: "Leather Belt",
    price: 49.99,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviews: 123,
    category: "Fashion",
    brand: "LeatherCraft"
  },
  {
    id: 19,
    name: "Summer Dress",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviews: 156,
    category: "Fashion",
    brand: "StyleCo"
  },
  {
    id: 20,
    name: "Baseball Cap",
    price: 24.99,
    image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.2,
    reviews: 98,
    category: "Fashion",
    brand: "CapStyle"
  },
  {
    id: 21,
    name: "Formal Shirt",
    price: 59.99,
    image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    reviews: 167,
    category: "Fashion",
    brand: "FormalWear"
  },
  {
    id: 22,
    name: "Sunglasses Classic",
    price: 79.99,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    reviews: 145,
    category: "Fashion",
    brand: "EyeStyle"
  },

  // Home (10 products)
  {
    id: 23,
    name: "Minimalist Desk Lamp",
    price: 79.99,
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviews: 89,
    category: "Home",
    brand: "LightCo"
  },
  {
    id: 24,
    name: "Coffee Maker Pro",
    price: 199.99,
    image: "https://images.pexels.com/photos/4226883/pexels-photo-4226883.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviews: 145,
    category: "Home",
    brand: "BrewMaster"
  },
  {
    id: 25,
    name: "Ceramic Dinnerware Set",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    reviews: 123,
    category: "Home",
    brand: "TableCraft"
  },
  {
    id: 26,
    name: "Throw Pillow Set",
    price: 39.99,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    reviews: 87,
    category: "Home",
    brand: "ComfortHome"
  },
  {
    id: 27,
    name: "Wall Clock Modern",
    price: 49.99,
    image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    reviews: 98,
    category: "Home",
    brand: "TimeStyle"
  },
  {
    id: 28,
    name: "Storage Basket Set",
    price: 59.99,
    image: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviews: 134,
    category: "Home",
    brand: "OrganizePro"
  },
  {
    id: 29,
    name: "Essential Oil Diffuser",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.pexels.com/photos/6207516/pexels-photo-6207516.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviews: 156,
    category: "Home",
    brand: "AromaLife"
  },
  {
    id: 30,
    name: "Kitchen Knife Set",
    price: 129.99,
    image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    reviews: 189,
    category: "Home",
    brand: "ChefPro"
  },
  {
    id: 31,
    name: "Bamboo Cutting Board",
    price: 34.99,
    image: "https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    reviews: 112,
    category: "Home",
    brand: "EcoKitchen"
  },
  {
    id: 32,
    name: "Smart Thermostat",
    price: 249.99,
    originalPrice: 299.99,
    image: "https://images.pexels.com/photos/8031918/pexels-photo-8031918.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    reviews: 234,
    category: "Home",
    brand: "SmartHome",
    badge: "Smart"
  },

  // Sports (8 products)
  {
    id: 33,
    name: "Running Shoes",
    price: 119.99,
    originalPrice: 159.99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    reviews: 267,
    category: "Sports",
    brand: "RunFast"
  },
  {
    id: 34,
    name: "Yoga Mat Premium",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviews: 203,
    category: "Sports",
    brand: "YogaLife"
  },
  {
    id: 35,
    name: "Resistance Bands Set",
    price: 29.99,
    image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    reviews: 145,
    category: "Sports",
    brand: "FitGear"
  },
  {
    id: 36,
    name: "Water Bottle Insulated",
    price: 24.99,
    image: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviews: 178,
    category: "Sports",
    brand: "HydroMax"
  },
  {
    id: 37,
    name: "Gym Gloves",
    price: 19.99,
    image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    reviews: 98,
    category: "Sports",
    brand: "GripPro"
  },
  {
    id: 38,
    name: "Foam Roller",
    price: 39.99,
    image: "https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    reviews: 134,
    category: "Sports",
    brand: "RecoverFast"
  },
  {
    id: 39,
    name: "Basketball",
    price: 34.99,
    image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    reviews: 89,
    category: "Sports",
    brand: "SportsPro"
  },
  {
    id: 40,
    name: "Tennis Racket",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    reviews: 156,
    category: "Sports",
    brand: "TennisAce"
  }
];

// ============================================================================
// Featured Products (for home page)
// ============================================================================

export const featuredProducts: Product[] = [
  allProducts[0], // Wireless Bluetooth Headphones
  allProducts[1], // Premium Cotton T-Shirt
  allProducts[2], // Smart Watch Series 5
  allProducts[3], // Minimalist Desk Lamp
  allProducts[4], // Running Shoes
  allProducts[5], // Leather Backpack
  allProducts[6], // Coffee Maker Pro
  allProducts[7], // Yoga Mat Premium
];

// ============================================================================
// Product Image Maps (for product detail pages)
// ============================================================================

export const productImageMap: Record<number, string[]> = {
  1: [
    "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],
  2: [
    "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1034064/pexels-photo-1034064.jpeg?auto=compress&cs=tinysrgb&w=600"
  ],
  // Add more image maps as needed - using first image as fallback for others
};

/**
 * Get product images for a given product ID
 * Returns array of image URLs, or falls back to the product's main image
 */
export const getProductImages = (productId: number, defaultImage: string): string[] => {
  return productImageMap[productId] || [defaultImage, defaultImage, defaultImage, defaultImage];
};

