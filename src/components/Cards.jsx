import React, { useRef } from "react";
import { cart } from "../assets";
import gsap from "gsap";

const Cards = ({ cards, onAddToCart, cardRefs }) => {
  // Create an array of refs for each cart button
  const cartRefs = useRef([]);

  // Animate on hover
  const handleMouseEnter = (idx) => {
    gsap.to(cartRefs.current[idx], {
      backgroundColor: "#2D3B36",
      duration: 0.3,
    });
    gsap.to(cartRefs.current[idx].querySelector("img"), {
      filter: "invert(1)",
      duration: 0,
    });
  };

  const handleMouseLeave = (idx) => {
    gsap.to(cartRefs.current[idx], {
      backgroundColor: "#2D3B361A",
      duration: 0.3,
    });
    gsap.to(cartRefs.current[idx].querySelector("img"), {
      filter: "invert(0)",
      duration: 0,
    });
  };

  const handleCartClick = (card, idx) => {
    // Pop animation: scale down then up
    gsap.to(cartRefs.current[idx], {
      scale: 0.85,
      duration: 0.12,
      onComplete: () => {
        gsap.to(cartRefs.current[idx], {
          scale: 1.1,
          duration: 0.18,
          onComplete: () => {
            gsap.to(cartRefs.current[idx], { scale: 1, duration: 0.1 });
          },
        });
      },
    });
    onAddToCart(card);
  };

  return (
    <div className="flex justify-between w-full gap-8 mt-12 transition-all duration-500 ease-in-out overflow-hidden">
      {cards.map((card, idx) => (
        <div
          key={card.id}
          ref={(el) => cardRefs && (cardRefs.current[idx] = el)}
          className="bg-white rounded-3xl shadow-md shrink-0 w-[80vw] md:w-[90vw] h-[770px] p-6 flex flex-col items-center flex-wrap relative transition-transform duration-500 ease-in-out"
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
              <span className="text-[#2D3B3680] text-start text-[14px] tracking-[-5%]">
                FROM ${card.price}
              </span>
            </div>
            {/*Cart*/}
            <div
              ref={(el) => (cartRefs.current[idx] = el)}
              className="bg-[#2D3B361A] size-[80px] rounded-[10px] flex justify-center items-center cursor-pointer group"
              onClick={() => handleCartClick(card, idx)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              style={{ transition: "box-shadow 0.3s" }}
            >
              <img src={cart} alt="" className="transition-all duration-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
