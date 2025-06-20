import React from "react";
import { banner } from "../assets";

const BuyNowBanner = () => {
  return (
    <div className="relative w-full mb-[15%]">
      <img src={banner} className="m-auto" alt="" />
      <div className="absolute bottom-[5%] flex flex-col justify-center items-center gap-[5rem]">
        <span className="text-[80px] justify-items-center w-[60%] text-[#FEFFF4] text-center leading-[100%] tracking-normal">
          Feel Beautiful Inside and Out with Every Product.
        </span>
        <button className="bg-[#FEFFF4] w-[180px] h-[60px] rounded-[100px] text-[20px]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BuyNowBanner;
