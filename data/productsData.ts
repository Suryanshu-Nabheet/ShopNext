/**
 * Centralized product data
 *
 * All product information is stored here for easy management and updates.
 * This includes product details, images, pricing, and metadata.
 */

import { Product } from "types";

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
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviews: 234,
    category: "Electronics",
    brand: "AudioTech",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviews: 423,
    category: "Electronics",
    brand: "TechPro",
    badge: "New",
  },
  {
    id: 3,
    name: "Wireless Earbuds Pro",
    price: 89.99,
    originalPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviews: 189,
    category: "Electronics",
    brand: "AudioTech",
  },
  {
    id: 4,
    name: "4K Webcam HD",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1593167180182-58849b291d90?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviews: 156,
    category: "Electronics",
    brand: "CamTech",
  },
  {
    id: 5,
    name: "Gaming Mechanical Keyboard",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1587829741301-3e5f2711d9bc?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviews: 298,
    category: "Electronics",
    brand: "GameGear",
  },
  {
    id: 6,
    name: "Wireless Gaming Mouse",
    price: 69.99,
    originalPrice: 89.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviews: 167,
    category: "Electronics",
    brand: "GameGear",
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviews: 203,
    category: "Electronics",
    brand: "SoundWave",
  },
  {
    id: 8,
    name: "USB-C Hub 7-in-1",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1628236166565-d9df40232537?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    reviews: 134,
    category: "Electronics",
    brand: "TechPro",
  },
  {
    id: 9,
    name: "Smartphone Stand Adjustable",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1000&auto=format&fit=crop",
    rating: 4.2,
    reviews: 89,
    category: "Electronics",
    brand: "AccessPro",
  },
  {
    id: 10,
    name: "Wireless Charging Pad",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1662916893021-f4d2f0eb1203?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviews: 178,
    category: "Electronics",
    brand: "ChargeTech",
  },
  {
    id: 11,
    name: "LED Monitor 24 inch",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviews: 245,
    category: "Electronics",
    brand: "ViewTech",
  },
  {
    id: 12,
    name: "Power Bank 20000mAh",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviews: 167,
    category: "Electronics",
    brand: "PowerMax",
  },

  // Fashion (10 products)
  {
    id: 13,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviews: 156,
    category: "Fashion",
    brand: "StyleCo",
  },
  {
    id: 14,
    name: "Leather Backpack",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviews: 178,
    category: "Fashion",
    brand: "LeatherCraft",
    badge: "Premium",
  },
  {
    id: 15,
    name: "Denim Jacket Classic",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1601333762716-448c51f63aefe?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviews: 134,
    category: "Fashion",
    brand: "DenimWorks",
  },
  {
    id: 16,
    name: "Casual Sneakers",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviews: 198,
    category: "Fashion",
    brand: "FootComfort",
  },
  {
    id: 17,
    name: "Wool Scarf",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    reviews: 87,
    category: "Fashion",
    brand: "WarmWear",
  },
  {
    id: 18,
    name: "Leather Belt",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviews: 123,
    category: "Fashion",
    brand: "LeatherCraft",
  },
  {
    id: 19,
    name: "Summer Dress",
    price: 69.99,
    originalPrice: 89.99,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "Fashion",
    brand: "StyleCo",
  },
  {
    id: 20,
    name: "Baseball Cap",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
    rating: 4.2,
    reviews: 98,
    category: "Fashion",
    brand: "CapStyle",
  },
  {
    id: 21,
    name: "Formal Shirt",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviews: 167,
    category: "Fashion",
    brand: "FormalWear",
  },
  {
    id: 22,
    name: "Sunglasses Classic",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviews: 145,
    category: "Fashion",
    brand: "EyeStyle",
  },

  // Home (10 products)
  {
    id: 23,
    name: "Minimalist Desk Lamp",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1507473888900-52e1ad14b755?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviews: 89,
    category: "Home",
    brand: "LightCo",
  },
  {
    id: 24,
    name: "Coffee Maker Pro",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviews: 145,
    category: "Home",
    brand: "BrewMaster",
  },
  {
    id: 25,
    name: "Ceramic Dinnerware Set",
    price: 89.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1624647900994-473d0a6af5c0?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviews: 123,
    category: "Home",
    brand: "TableCraft",
  },
  {
    id: 26,
    name: "Throw Pillow Set",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    reviews: 87,
    category: "Home",
    brand: "ComfortHome",
  },
  {
    id: 27,
    name: "Wall Clock Modern",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1563861826-6b6536755027?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviews: 98,
    category: "Home",
    brand: "TimeStyle",
  },
  {
    id: 28,
    name: "Storage Basket Set",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1596708688849-5f257529f796?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviews: 134,
    category: "Home",
    brand: "OrganizePro",
  },
  {
    id: 29,
    name: "Essential Oil Diffuser",
    price: 69.99,
    originalPrice: 89.99,
    image:
      "https://images.unsplash.com/photo-1608528577891-9da14839cf44?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "Home",
    brand: "AromaLife",
  },
  {
    id: 30,
    name: "Kitchen Knife Set",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    reviews: 189,
    category: "Home",
    brand: "ChefPro",
  },
  {
    id: 31,
    name: "Bamboo Cutting Board",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1632057796919-482c3c97d622?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviews: 112,
    category: "Home",
    brand: "EcoKitchen",
  },
  {
    id: 32,
    name: "Smart Thermostat",
    price: 249.99,
    originalPrice: 299.99,
    image:
      "https://images.unsplash.com/photo-1585806683103-1c881c615598?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    reviews: 234,
    category: "Home",
    brand: "SmartHome",
    badge: "Smart",
  },

  // Sports (8 products)
  {
    id: 33,
    name: "Running Shoes",
    price: 119.99,
    originalPrice: 159.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviews: 267,
    category: "Sports",
    brand: "RunFast",
  },
  {
    id: 34,
    name: "Yoga Mat Premium",
    price: 49.99,
    originalPrice: 69.99,
    image:
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    reviews: 203,
    category: "Sports",
    brand: "YogaLife",
  },
  {
    id: 35,
    name: "Resistance Bands Set",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviews: 145,
    category: "Sports",
    brand: "FitGear",
  },
  {
    id: 36,
    name: "Water Bottle Insulated",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-0111419575c5?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviews: 178,
    category: "Sports",
    brand: "HydroMax",
  },
  {
    id: 37,
    name: "Gym Gloves",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
    rating: 4.3,
    reviews: 98,
    category: "Sports",
    brand: "GripPro",
  },
  {
    id: 38,
    name: "Foam Roller",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?q=80&w=1000&auto=format&fit=crop",
    rating: 4.5,
    reviews: 134,
    category: "Sports",
    brand: "RecoverFast",
  },
  {
    id: 39,
    name: "Basketball",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1519861531473-920026393112?q=80&w=1000&auto=format&fit=crop",
    rating: 4.4,
    reviews: 89,
    category: "Sports",
    brand: "SportsPro",
  },
  {
    id: 40,
    name: "Tennis Racket",
    price: 89.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1000&auto=format&fit=crop",
    rating: 4.6,
    reviews: 156,
    category: "Sports",
    brand: "TennisAce",
  },
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
    "https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  2: [
    "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1034064/pexels-photo-1034064.jpeg?auto=compress&cs=tinysrgb&w=600",
  ],
  // Add more image maps as needed - using first image as fallback for others
};

/**
 * Get product images for a given product ID
 * Returns array of image URLs, or falls back to the product's main image
 */
export const getProductImages = (
  productId: number,
  defaultImage: string
): string[] => {
  return (
    productImageMap[productId] || [
      defaultImage,
      defaultImage,
      defaultImage,
      defaultImage,
    ]
  );
};
