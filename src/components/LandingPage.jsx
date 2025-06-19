import React from "react";
import { img1, skinCareCream } from "../assets";
const LandingPage = () => {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col justify-between">
      {/*Section 1*/}
      <div className="flex justify-between items-center mt-16">
        <div className="w-[335px] font-inter font-normal text-[20px] leading-[100%] indent-[105px] tracking-[0]">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your nautural glow every day.
        </div>
        <div className="font-bold text-[100px] leading-[90px] tracking-[-0.03em] uppercase">
          GLOW <br /> NATUR- <br />
          ALLY
        </div>
        <img src={skinCareCream} className="w-[15%]" alt="cream" />
      </div>
      {/*Section 2*/}
      <div className="flex justify-center items-center relative h-[676px]">
        <div className="absolute inset-0 flex flex-col justify-end items-center z-0">
          <div className="w-full">
            <button className="bg-black text-white px-6 py-2 rounded">
              Shop Now
            </button>
          </div>
          <p className="font-extrabold text-[378px] leading-[100%] tracking-[0]">
            SKINCARE
          </p>
        </div>

        {/* Center image that pops out */}
        <img
          src={img1}
          alt=""
          className="h-[676px] w-[610px] rounded-[30px] object-cover z-10 shadow-xl mb-5"
        />
      </div>
    </div>
  );
};

export default LandingPage;
