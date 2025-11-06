import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SafeImage from './SafeImage';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-black/50" 
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.div 
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring',
              damping: 25,
              stiffness: 200,
              duration: 0.4
            }}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Shopping Cart</h2>
                <motion.button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {state.items.length === 0 ? (
                  <motion.div 
                    className="flex flex-col items-center justify-center h-full text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring' }}
                    >
                      <ShoppingBag className="h-16 w-16 mb-4" />
                    </motion.div>
                    <p className="text-lg font-medium">Your cart is empty</p>
                    <p className="text-sm">Add some products to get started</p>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    {state.items.map((item, index) => (
                      <motion.div 
                        key={item.id} 
                        className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <SafeImage
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                          <p className="text-gray-600 font-semibold">${item.price}</p>
                          
                          <div className="flex items-center space-x-2 mt-2">
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-200 rounded"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Minus className="h-4 w-4" />
                            </motion.button>
                            <span className="px-3 py-1 bg-white rounded border text-sm">
                              {item.quantity}
                            </span>
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-200 rounded"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Plus className="h-4 w-4" />
                            </motion.button>
                            <motion.button
                              onClick={() => removeItem(item.id)}
                              className="ml-auto text-red-500 hover:text-red-700 text-sm"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Remove
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            
              {/* Footer */}
              {state.items.length > 0 && (
                <motion.div 
                  className="border-t p-6 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total: ${state.total.toFixed(2)}</span>
                  </div>
                  <motion.button 
                    className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onClose();
                      // Navigate to cart checkout - we'll implement this
                      window.dispatchEvent(new CustomEvent('cart-checkout'));
                    }}
                  >
                    Proceed to Checkout
                  </motion.button>
                  <motion.button 
                    onClick={onClose}
                    className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue Shopping
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Cart;