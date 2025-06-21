import React, { useState, useEffect } from "react";
import About from "./components/About";
import AllProducts from "./components/AllProducts";
import BestSelling from "./components/BestSelling";
import BuyNowBanner from "./components/BuyNowBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelpSection from "./components/HelpSection";
import LandingPage from "./components/LandingPage";
import Cards from "./components/Cards"; // If you use Cards directly

function App() {
  // Loading state and counter
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  // Initialize cart count from sessionStorage or 0
  const [cartCount, setCartCount] = useState(() => {
    const stored = sessionStorage.getItem("cartCount");
    return stored ? parseInt(stored, 10) : 0;
  });

  // Loading effect: count from 1 to 100
  useEffect(() => {
    if (loading && count < 100) {
      const timer = setTimeout(() => setCount(count + 1), 10);
      return () => clearTimeout(timer);
    }
    if (count === 100 && loading) {
      setTimeout(() => setLoading(false), 200); // Small delay before showing app
    }
  }, [loading, count]);

  // Sync cartCount to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  // Function to increment cart count
  const handleAddToCart = () => setCartCount((c) => c + 1);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-end justify-end">
        <div className="mb-[5%] mr-[5%] text-[#2D3B36] font-normal text-[140px] leading-[60px] uppercase tracking-[-0.05em]">
          {count}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-[50px] md:left-[5%] md:right-[5%]">
      <Header cartCount={cartCount} />
      <LandingPage />
      <About />
      <BestSelling onAddToCart={handleAddToCart} />
      <div className="lg:block hidden">
        <BuyNowBanner />
      </div>
      {/* Pass handleAddToCart to AllProducts or Cards as needed */}
      <AllProducts onAddToCart={handleAddToCart} />
      <HelpSection />
      <Footer />
    </div>
  );
}

export default App;
