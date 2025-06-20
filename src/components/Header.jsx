import React from "react";
import { bagLogo, heart, profile } from "../assets";
const Header = ({ cartCount }) => {
  return (
    <div className="flex justify-between items-center">
      {/* Logo */}
      <p className="font-extrabold text-[30px] leading-[100%] text-[#2D3B36]">
        SKINCARE
      </p>
      {/* Navigation Links */}
      <div className="flex justify-evenly w-1/2">
        <a href="">All Products</a>
        <a href="">Serum</a>
        <a href="">Sunscreem</a>
        <a href="">Bundle</a>
      </div>
      {/*Tools*/}
      <div className="flex justify-between gap-3">
        <div className="flex gap-2">
          <img src={bagLogo} alt="cart" />
          <span className="text-[#2D3B36] mr-1.5 text-[20px] leading-[100%]">
            Cart ({cartCount})
          </span>
        </div>
        <img src={heart} alt="likes" />
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
