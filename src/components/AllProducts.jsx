import React from "react";
import Cards from "./Cards";
import { product1, product2, product3 } from "../assets";

const cardsData = [
  {
    id: 1,
    title: "ALYA SKIN CLEANSER.",
    price: 29.99,
    img: product1,
  },
  {
    id: 2,
    title: "RITUAL OF SAKURA.",
    price: 27.99,
    img: product2,
  },
  {
    id: 3,
    title: "THE BODY LOTION.",
    price: 19.99,
    img: product3,
  },
];

const AllProducts = ({ onAddToCart }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const buttons = ["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGGING"];

  return (
    <div className="w-full flex flex-col gap-[4rem] justify-center items-center text-center mb-[15%]">
      <span className="text-[60px] leading-[100%] tracking-[-2%]">
        Feel Beautiful Inside and Out <br /> with Every Product.
      </span>
      <div className="flex gap-4">
        {buttons.map((label, idx) => (
          <button
            key={label}
            className={`w-[175px] h-[60px] rounded-[100px] border border-[#2D3B36] transition-colors
              ${
                activeIndex === idx
                  ? "bg-[#2D3B36] text-[#FEFFF4]"
                  : "bg-[#FEFFF4] text-[#2D3B36]"
              }
            `}
            onClick={() => setActiveIndex(idx)}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Pass onAddToCart to Cards */}
      <Cards cards={cardsData} onAddToCart={onAddToCart} current={0} />
    </div>
  );
};

export default AllProducts;
