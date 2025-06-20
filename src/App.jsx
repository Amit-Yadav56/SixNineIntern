import About from "./components/About";
import BestSelling from "./components/BestSelling";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="absolute top-[50px] left-[5%] right-[5%]">
      <Header />
      <LandingPage />
      <About />
      <BestSelling />
    </div>
  );
}

export default App;
