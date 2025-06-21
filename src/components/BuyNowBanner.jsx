import React, { useRef } from "react";
import { banner } from "../assets";
import gsap from "gsap";

const BuyNowBanner = () => {
  const btnRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(btnRef.current, {
      backgroundColor: "#2D3B36",
      color: "#FEFFF4",
      duration: 0,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      backgroundColor: "#FEFFF4",
      color: "#2D3B36",
      duration: 0,
    });
  };

  const handleClick = () => {
    gsap.to(btnRef.current, {
      scale: 0.85,
      duration: 0.12,
      onComplete: () => {
        gsap.to(btnRef.current, {
          scale: 1.1,
          duration: 0.18,
          onComplete: () => {
            gsap.to(btnRef.current, { scale: 1, duration: 0.1 });
          },
        });
      },
    });
  };

  return (
    <div className="relative w-full mb-[15%]">
      <img src={banner} className="m-auto w-full" alt="" />
      <div className="absolute bottom-[5%] flex flex-col justify-center items-center gap-[5rem]">
        <span className="text-[80px] justify-items-center w-[60%] text-[#FEFFF4] text-center leading-[100%] tracking-normal">
          Feel Beautiful Inside and Out with Every Product.
        </span>
        <button
          ref={btnRef}
          className="bg-[#FEFFF4] w-[180px] h-[60px] rounded-[100px] text-[20px] transition-all"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BuyNowBanner;
