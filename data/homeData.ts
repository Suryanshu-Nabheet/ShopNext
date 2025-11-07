/**
 * Home page data
 * 
 * All static content, images, and configuration for the home page.
 */

// ============================================================================
// Hero Section Data
// ============================================================================

export const heroData = {
  title: "Discover Amazing",
  titleHighlight: "Products",
  description: "Shop the latest trends with unbeatable prices, fast shipping, and exceptional customer service.",
  ctaText: "Shop Collections",
  heroImage: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600",
  trustBadge: {
    text: "Trusted by 50,000+ customers",
    icon: "Star"
  },
  features: [
    { icon: "Truck", text: "Free Shipping" },
    { icon: "Shield", text: "Secure Payment" },
    { icon: "Headphones", text: "24/7 Support" },
  ],
  stats: [
    { number: "50K+", label: "Happy Customers" },
    { number: "10K+", label: "Products" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support" },
  ],
  rating: {
    value: 4.9,
    max: 5,
    reviews: "50,000+"
  }
};

// ============================================================================
// Categories Section Data
// ============================================================================

export const categoriesData = {
  title: "Shop by Category",
  description: "Explore our wide range of products across different categories",
  categories: [
    { name: "Electronics", icon: "Smartphone", color: "from-blue-500 to-blue-600" },
    { name: "Fashion", icon: "Shirt", color: "from-pink-500 to-pink-600" },
    { name: "Home & Garden", icon: "Home", color: "from-green-500 to-green-600" },
    { name: "Sports", icon: "Dumbbell", color: "from-orange-500 to-orange-600" },
    { name: "Books", icon: "Book", color: "from-purple-500 to-purple-600" },
    { name: "Watches", icon: "Watch", color: "from-gray-500 to-gray-600" },
  ]
};

// ============================================================================
// Newsletter Section Data
// ============================================================================

export const newsletterData = {
  title: "Stay Updated",
  description: "Subscribe to our newsletter and be the first to know about new products, exclusive deals, and special offers.",
  placeholder: "Enter your email",
  buttonText: "Subscribe",
  stats: [
    { number: "10K+", label: "Newsletter Subscribers" },
    { number: "Weekly", label: "Exclusive Deals" },
    { number: "24/7", label: "Customer Support" },
  ]
};

