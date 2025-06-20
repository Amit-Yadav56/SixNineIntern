import React, { useState } from "react";
import {
  cart,
  leftArrow,
  product1,
  product2,
  product3,
  rightArrow,
} from "../assets";

const cards = [
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

const BestSelling = () => {
  const [current, setCurrent] = useState(0);

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(cards[(current + i) % cards.length]);
    }
    return visible;
  };

  const handleRight = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleLeft = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
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
      <div className="flex justify-center gap-8 mt-12">
        {getVisibleCards().map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md w-[560px] h-[770px] p-6 flex flex-col items-center flex-wrap relative"
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-[90%] p-3 bg-[#FEFFF4] m-auto absolute h-[100px] bottom-[4%] rounded-[10px] flex justify-between items-center">
              <div className="flex flex-col justify-between h-full ml-3">
                <span className="text-[20px] tracking-[-5%]">{card.title}</span>
                <span className="text-[#2D3B3680] text-[14px] tracking-[-5%]">
                  FROM ${card.price}
                </span>
              </div>
              {/*Cart*/}
              <div className="bg-[#2D3B361A] size-[80px] rounded-[10px] flex justify-center items-center">
                <img src={cart} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
