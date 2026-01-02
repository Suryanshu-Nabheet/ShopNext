/**
 * ProductCard Component
 *
 * Reusable product card component for displaying product information.
 * Handles product display, ratings, pricing, and add to cart functionality.
 */

import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "context/CartContext";
import { Product } from "types";
import SafeImage from "./SafeImage";
import { calculateDiscount } from "lib/utils";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(
  ({ product, onClick }) => {
    const { dispatch } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
      e.stopPropagation();
      dispatch({ type: "ADD_ITEM", payload: product });
    };

    const discount = calculateDiscount(
      product.originalPrice || 0,
      product.price
    );

    return (
      <div
        className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg cursor-pointer group overflow-hidden hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 ease-out"
        onClick={onClick}
      >
        <div className="relative">
          <SafeImage
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.badge && (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                -{discount}%
              </span>
            )}
          </div>

          {/* Quick Add to Cart */}
          {/* Quick Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 p-3 bg-white text-blue-600 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-out z-10"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>

        {/* Product Details */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews})</span>
          </div>

          <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>
    );
  }
);

export default ProductCard;
