/**
 * Product Details Page
 *
 * Complete product detail view with images, specifications, and purchase options.
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Plus,
  Minus,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Product } from "types";
import { useCart } from "context/CartContext";
import { SafeImage, Lens } from "components/ui";
import { getProductImages } from "data/productsData";
import { calculateDiscount } from "lib/utils";

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onBuyNow: (product: Product, quantity: number) => void;
  onCartClick: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  onBack,
  onBuyNow,
  onCartClick,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { dispatch, state } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_ITEM", payload: product });
    }
  };

  const handleBuyNow = () => {
    onBuyNow(product, quantity);
  };

  const discount = calculateDiscount(product.originalPrice || 0, product.price);

  // Get product images using centralized function
  const productImages = getProductImages(product.id, product.image);

  const features = [
    "Premium quality materials",
    "Durable construction",
    "Modern design",
    "Easy to use",
    "Excellent value for money",
  ];

  const specifications = [
    { label: "Brand", value: product.brand || "Premium Brand" },
    { label: "Category", value: product.category },
    { label: "Model", value: `${product.name.split(" ")[0]}-${product.id}` },
    { label: "Warranty", value: "1 Year" },
    { label: "Weight", value: "1.2 kg" },
    { label: "Dimensions", value: "25 x 15 x 10 cm" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/60 to-blue-100/40 relative pt-28">
      {/* Shopping Cart Button - Fixed in top right corner */}
      <div className="fixed top-6 right-6 z-50">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-125 transition-all duration-500 blur-md"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-110 transition-all duration-300 blur-sm"></div>
          <button
            onClick={onCartClick}
            className="relative z-10 p-3 bg-white/95 backdrop-blur-sm text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl transform hover:scale-105 hover:shadow-xl hover:shadow-blue-200/50 border border-gray-200/50 hover:border-blue-200/30"
          >
            <ShoppingCart className="h-6 w-6" />
            {state.items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg animate-pulse">
                {state.items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors mt-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to All Products
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <Lens>
                <SafeImage
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-xl"
                />
              </Lens>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none z-30">
                {product.badge && (
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    -{discount}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md transition-all duration-200 ${
                    selectedImage === index
                      ? "ring-2 ring-blue-500"
                      : "hover:shadow-lg"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeImage
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover rounded"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Product Info */}
            <div>
              <span className="text-sm text-blue-600 font-medium">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${(product.originalPrice! - product.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-gray-600">
                  Total: ${(product.price * quantity).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button
                onClick={handleBuyNow}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Buy Now
              </motion.button>

              <motion.button
                onClick={handleAddToCart}
                className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-4 px-6 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </motion.button>
            </div>

            {/* Shipping Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Free Shipping
                    </div>
                    <div className="text-sm text-gray-600">
                      On orders over $50
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Easy Returns
                    </div>
                    <div className="text-sm text-gray-600">
                      30-day return policy
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Secure Payment
                    </div>
                    <div className="text-sm text-gray-600">SSL encrypted</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Description & Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This premium {product.name.toLowerCase()} offers exceptional
                  quality and value. Crafted with attention to detail and
                  designed to meet your highest expectations. Perfect for
                  everyday use and special occasions, this product combines
                  functionality with style to deliver an outstanding user
                  experience.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Specifications
                </h3>
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-2 border-b border-gray-200"
                    >
                      <span className="font-medium text-gray-700">
                        {spec.label}
                      </span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
