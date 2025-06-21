import React from "react";
import { bagLogo, heart, profile } from "../assets";
const Header = ({ cartCount }) => {
  return (
    <div className="flex justify-between items-center w-[100vw] lg:w-full">
      {/* Logo */}
      <p className="font-extrabold text-[30px] leading-[100%] text-[#2D3B36] cursor-pointer">
        SKINCARE
      </p>
      {/* Navigation Links */}
      <div className="justify-evenly w-1/2 hidden md:flex">
        <a href="">All Products</a>
        <a href="">Serum</a>
        <a href="">Sunscreem</a>
        <a href="">Bundle</a>
      </div>
      {/*Tools*/}
      <div className="flex justify-between gap-3">
        <div className="flex gap-2 cursor-pointer items-center">
          <div className="size-[40px] bg-white rounded-full flex justify-center items-center">
            <img src={bagLogo} alt="cart" />
          </div>
          <span className="text-[#2D3B36] hidden lg:block mr-1.5 text-[20px] leading-[100%]">
            Cart ({cartCount})
          </span>
        </div>
        <div className="size-[40px] bg-white cursor-pointer rounded-full flex justify-center items-center">
          <img src={heart} alt="likes" />
        </div>
        <div className="size-[40px] bg-white cursor-pointer rounded-full flex justify-center items-center">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
