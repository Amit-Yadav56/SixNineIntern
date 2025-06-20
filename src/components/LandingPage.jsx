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
        <div className="font-bold text-[5vw] leading-[90px] tracking-[-0.03em] uppercase">
          GLOW <br /> NATUR- <br />
          ALLY
        </div>
        <img src={skinCareCream} className="w-[15%]" alt="cream" />
      </div>
      {/*Section 2*/}
      <div className="w-full h-screen relative flex justify-center items-end">
        <div className="absolute inset-0 z-0 flex flex-col justify-end items-center px-4 gap-20">
          <div className="w-full flex justify-start">
            <button className="bg-[#2D3B36] text-white px-6 py-2 rounded-[100px] mt-4 w-[180px] h-[60px] cursor-pointer">
              Shop Now
            </button>
          </div>
          <p className="w-full text-center text-[20.7vw] leading-[0.73] font-semibold relative left-[-7.7%] text-[#2D3B36]">
            SKINCARE
          </p>
        </div>

        {/* Foreground image */}
        <img
          src={img1}
          alt=""
          className="w-[30vw] rounded-[30px] object-cover z-10 shadow-xl h-[50vh] mb-5"
        />
      </div>
    </div>
  );
};

export default LandingPage;
