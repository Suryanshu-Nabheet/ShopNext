import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Grid, List, ChevronDown, ShoppingCart } from 'lucide-react';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';

interface Product {
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

interface ProductsPageProps {
  onProductClick: (product: Product) => void;
  onBack: () => void;
  onCartClick: () => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onProductClick, onBack, onCartClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { state } = useCart();

  const allProducts: Product[] = [
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

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports'];
  const brands = ['All', ...Array.from(new Set(allProducts.map(p => p.brand).filter(Boolean)))];

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = product.rating >= minRating;

      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedBrand, priceRange, minRating, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/60 to-blue-100/40">
      {/* Header with Search */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Home
            </button>
            <h1 className="text-2xl font-bold text-gray-900">All Products</h1>
            <div className="flex items-center space-x-4">
              {/* Shopping Cart Button */}
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
              
              {/* View Mode Buttons */}
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar - 20% */}
          <div className="w-1/5 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2 text-blue-600"
                      />
                      <span className="text-sm text-gray-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Brand</h4>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1, 0].map(rating => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={minRating === rating}
                        onChange={(e) => setMinRating(parseInt(e.target.value))}
                        className="mr-2 text-blue-600"
                      />
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {rating === 0 ? 'All' : `${rating}+ stars`}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedBrand('All');
                  setPriceRange([0, 500]);
                  setMinRating(0);
                  setSearchTerm('');
                }}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Grid - 80% */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {allProducts.length} products
              </p>
            </div>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => onProductClick(product)}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedBrand('All');
                    setPriceRange([0, 500]);
                    setMinRating(0);
                    setSearchTerm('');
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;