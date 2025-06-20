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
  // Initialize cart count from sessionStorage or 0
  const [cartCount, setCartCount] = useState(() => {
    const stored = sessionStorage.getItem("cartCount");
    return stored ? parseInt(stored, 10) : 0;
  });

  // Sync cartCount to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  // Function to increment cart count
  const handleAddToCart = () => setCartCount((c) => c + 1);

  return (
    <div className="absolute top-[50px] left-[5%] right-[5%]">
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
