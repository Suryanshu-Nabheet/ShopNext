import React from 'react';
import { X, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SafeImage from './SafeImage';

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
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { dispatch } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative">
              <SafeImage
                src={product.image}
                alt={product.name}
                className="w-full h-96 md:h-full object-cover"
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
                    -{discount}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8">
              <div className="mb-4">
                <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                <h1 className="text-2xl font-bold text-gray-900 mt-1">{product.name}</h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  This premium product offers exceptional quality and value. Crafted with attention to detail 
                  and designed to meet your highest expectations. Perfect for everyday use and special occasions.
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                
              </div>

              {/* Features */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Free shipping on orders over $50</li>
                  <li>• 30-day return policy</li>
                  <li>• Quality guarantee</li>
                  <li>• 24/7 customer support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;