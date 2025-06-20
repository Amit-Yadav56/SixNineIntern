import React, { useState } from "react";
import { leftArrow, product1, product2, product3, rightArrow } from "../assets";
import Cards from "./Cards";

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

const BestSelling = ({ onAddToCart }) => {
  const [current, setCurrent] = useState(0);

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(cardsData[(current + i) % cardsData.length]);
    }
    return visible;
  };

  const handleRight = () => {
    setCurrent((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  const handleLeft = () => {
    setCurrent((prev) => (prev + 1) % cardsData.length);
  };

  return (
    <div className="my-[15%]">
      <div className="flex justify-between items-center">
        <div className="flex justify-around border border-[#2D3B36] rounded-[100px] p-4 w-[290px] h-[60px] cursor-pointer ">
          <div className="w-[20px] h-[20px] bg-[#2D3B36] rounded-full" />
          <span className="text-[20px] leading-[100%]">
            Best Selling Products
          </span>
        </div>
        <span className="text-[60px]">
          Skincare That Brings Out <br /> Your Natural Radiance
        </span>
        <div className="flex gap-10">
          <button
            className="w-[80px] h-[80px] rounded-full border border-[#2D3B36] justify-items-end flex items-center justify-center"
            onClick={handleLeft}
          >
            <img src={leftArrow} alt="Left" />
          </button>
          <button
            className="w-[80px] h-[80px] rounded-full border border-[#2D3B36] bg-[#2D3B36] flex items-center justify-center"
            onClick={handleRight}
          >
            <img src={rightArrow} alt="Right" />
          </button>
        </div>
      </div>
      {/* Cards */}
      <Cards cards={getVisibleCards()} onAddToCart={onAddToCart} />
    </div>
  );
};

export default BestSelling;
