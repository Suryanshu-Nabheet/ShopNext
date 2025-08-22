import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import CheckoutPage from './components/CheckoutPage';
import OrderConfirmation from './components/OrderConfirmation';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';
import { CartProvider } from './context/CartContext';
import { useCart } from './context/CartContext';
import CartCheckoutPage from './components/CartCheckoutPage';

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

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'about' | 'product-details' | 'checkout' | 'order-confirmation' | 'cart-checkout'>('home');
  const [checkoutData, setCheckoutData] = useState<{ product: Product; quantity: number } | null>(null);
  const [cartCheckoutData, setCartCheckoutData] = useState<{ items: any[]; total: number } | null>(null);
  const [orderData, setOrderData] = useState<any>(null);
  const { state } = useCart();

  // Listen for cart checkout event
  React.useEffect(() => {
    const handleCartCheckout = () => {
      if (state.items.length > 0) {
        setCartCheckoutData({ items: state.items, total: state.total });
        setCurrentPage('cart-checkout');
      }
    };

    window.addEventListener('cart-checkout', handleCartCheckout);
    return () => window.removeEventListener('cart-checkout', handleCartCheckout);
  }, [state.items, state.total]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-details');
  };

  const handleBuyNow = (product: Product, quantity: number) => {
    setCheckoutData({ product, quantity });
    setCurrentPage('checkout');
  };

  const handleOrderComplete = (orderData: any) => {
    setOrderData(orderData);
    setCurrentPage('order-confirmation');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
    setCheckoutData(null);
    setCartCheckoutData(null);
    setOrderData(null);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/80 via-blue-100/60 to-blue-200/40">
        <Header 
          onCartClick={() => setIsCartOpen(true)} 
          onNavigate={setCurrentPage}
          onScrollToSection={scrollToSection}
          currentPage={currentPage}
        />
        
        {currentPage === 'home' ? (
          <>
            <Hero onViewCollectionsClick={() => setCurrentPage('products')} />
            <Categories id="categories" />
            <ProductGrid 
              onProductClick={handleProductClick}
              onViewAllClick={() => setCurrentPage('products')}
            />
            <Newsletter />
            <Footer onNavigateHome={() => setCurrentPage('home')} />
          </>
        ) : currentPage === 'about' ? (
          <>
            <AboutPage onBack={() => setCurrentPage('home')} />
            <Footer onNavigateHome={() => setCurrentPage('home')} />
          </>
        ) : currentPage === 'product-details' && selectedProduct ? (
          <ProductDetailsPage 
            product={selectedProduct}
            onBack={() => setCurrentPage('products')}
            onBuyNow={handleBuyNow}
            onCartClick={() => setIsCartOpen(true)}
          />
        ) : currentPage === 'checkout' && checkoutData ? (
          <CheckoutPage 
            product={checkoutData.product}
            quantity={checkoutData.quantity}
            onBack={() => setCurrentPage('product-details')}
            onOrderComplete={handleOrderComplete}
          />
        ) : currentPage === 'cart-checkout' && cartCheckoutData ? (
          <CartCheckoutPage 
            items={cartCheckoutData.items}
            total={cartCheckoutData.total}
            onBack={() => setCurrentPage('home')}
            onOrderComplete={handleOrderComplete}
          />
        ) : currentPage === 'order-confirmation' && orderData ? (
          <OrderConfirmation 
            orderData={orderData}
            onBackToHome={handleBackToHome}
          />
        ) : (
          <ProductsPage 
            onProductClick={handleProductClick}
            onBack={() => setCurrentPage('home')}
            onCartClick={() => setIsCartOpen(true)}
          />
        )}
        
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;