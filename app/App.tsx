/**
 * Main App Component
 *
 * Root application component that handles routing and page navigation.
 * Manages global state and coordinates between different pages.
 */

import React, { useState, Suspense, lazy } from "react";
import { CartProvider, useCart } from "context/CartContext";
import { Product, Page, OrderData, CartItem } from "types";
import Header from "components/Header";
import Cart from "components/Cart";
import Footer from "components/Footer";

// Lazy load pages for better performance
const Home = lazy(() => import("pages/Home"));
const Products = lazy(() => import("pages/Products"));
const ProductDetails = lazy(() => import("pages/ProductDetails"));
const Checkout = lazy(() => import("pages/Checkout"));
const CartCheckout = lazy(() => import("pages/CartCheckout"));
const OrderConfirmation = lazy(() => import("pages/OrderConfirmation"));
const About = lazy(() => import("pages/About"));

// Loading Component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [checkoutData, setCheckoutData] = useState<{
    product: Product;
    quantity: number;
  } | null>(null);
  const [cartCheckoutData, setCartCheckoutData] = useState<{
    items: CartItem[];
    total: number;
  } | null>(null);
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const { state } = useCart();

  // Listen for cart checkout event
  React.useEffect(() => {
    const handleCartCheckout = () => {
      if (state.items.length > 0) {
        setCartCheckoutData({ items: state.items, total: state.total });
        setCurrentPage("cart-checkout");
      }
    };

    window.addEventListener("cart-checkout", handleCartCheckout);
    return () =>
      window.removeEventListener("cart-checkout", handleCartCheckout);
  }, [state.items, state.total]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage("product-details");
  };

  const handleBuyNow = (product: Product, quantity: number) => {
    setCheckoutData({ product, quantity });
    setCurrentPage("checkout");
  };

  const handleOrderComplete = (orderData: OrderData) => {
    setOrderData(orderData);
    setCurrentPage("order-confirmation");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setSelectedProduct(null);
    setCheckoutData(null);
    setCartCheckoutData(null);
    setOrderData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/80 via-blue-100/60 to-blue-200/40">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={setCurrentPage}
        onScrollToSection={scrollToSection}
        currentPage={currentPage}
      />

      <Suspense fallback={<PageLoader />}>
        {currentPage === "home" ? (
          <>
            <Home
              onProductClick={handleProductClick}
              onViewCollectionsClick={() => setCurrentPage("products")}
            />
            <Footer onNavigate={setCurrentPage} />
          </>
        ) : currentPage === "about" ? (
          <>
            <About onBack={() => setCurrentPage("home")} />
            <Footer onNavigate={setCurrentPage} />
          </>
        ) : currentPage === "product-details" && selectedProduct ? (
          <ProductDetails
            product={selectedProduct}
            onBack={() => setCurrentPage("products")}
            onBuyNow={handleBuyNow}
            onCartClick={() => setIsCartOpen(true)}
          />
        ) : currentPage === "checkout" && checkoutData ? (
          <Checkout
            product={checkoutData.product}
            quantity={checkoutData.quantity}
            onBack={() => setCurrentPage("product-details")}
            onOrderComplete={handleOrderComplete}
          />
        ) : currentPage === "cart-checkout" && cartCheckoutData ? (
          <CartCheckout
            items={cartCheckoutData.items}
            total={cartCheckoutData.total}
            onBack={() => setCurrentPage("home")}
            onOrderComplete={handleOrderComplete}
          />
        ) : currentPage === "order-confirmation" && orderData ? (
          <OrderConfirmation
            orderData={orderData}
            onBackToHome={handleBackToHome}
          />
        ) : (
          <Products
            onProductClick={handleProductClick}
            onBack={() => setCurrentPage("home")}
            onCartClick={() => setIsCartOpen(true)}
          />
        )}
      </Suspense>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
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
