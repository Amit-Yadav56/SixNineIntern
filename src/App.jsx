import About from "./components/About";
import AllProducts from "./components/AllProducts";
import BestSelling from "./components/BestSelling";
import BuyNowBanner from "./components/BuyNowBanner";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="absolute top-[50px] left-[5%] right-[5%]">
      <Header />
      <LandingPage />
      <About />
      <BestSelling />
      <div className="lg:block hidden">
        <BuyNowBanner />
      </div>
      <AllProducts />
    </div>
  );
}

export default App;
