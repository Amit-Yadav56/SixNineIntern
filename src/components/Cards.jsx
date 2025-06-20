import React from "react";
import { cart } from "../assets";

const Cards = ({ cards }) => {
  return (
    <div className="flex justify-between w-full gap-8 mt-12 transition-all duration-500 ease-in-out">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-3xl shadow-md w-[560px] h-[770px] p-6 flex flex-col items-center flex-wrap relative transition-transform duration-500 ease-in-out"
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
  );
};

export default Cards;
