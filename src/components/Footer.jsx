import React from "react";
import { skincare } from "../assets";

const Footer = () => {
  return (
    <div className="relative left-[-6%] w-[112%] bg-[#2D3B36] text-[#E7E8E0]">
      <div className="flex flex-col lg:flex-row justify-between w-[90%] m-auto">
        <div className="flex flex-col justify-between w-[90%] m-auto py-[8%]">
          <span className="text-[60px] leading-[100%] tracking-[-2%]">
            Join The Skincare <br />
            Community Now.
          </span>
          <div className="flex w-[80%] justify-between mt-[5%]">
            <span className="text-[20px] leading-[100%] tracking-[-5%] cursor-pointer hover:text-black">
              Facebook
            </span>
            <span className="text-[20px] leading-[100%] tracking-[-5%] cursor-pointer hover:text-black">
              Instagram
            </span>
            <span className="text-[20px] leading-[100%] tracking-[-5%] cursor-pointer hover:text-black">
              Youtube
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between w-[90%] m-auto py-[8%] ">
          <div className="text-[60px] leading-[100%] tracking-[-2%]">
            <span className="text-[30px]">
              Get in Touch
              <br />
            </span>
            <span className="cursor-pointer hover:text-black">
              contact.skincare.com
            </span>
          </div>
          <div className="flex w-[80%] justify-between mt-[5%]">
            <span className="text-[20px] leading-[100%] tracking-[-5%] cursor-pointer hover:text-black">
              Terms of Service
            </span>
            <span className="text-[20px] leading-[100%] tracking-[-5%] cursor-pointer hover:text-black">
              Privacy Policy
            </span>
            <span className="text-[20px] leading-[100%] tracking-[-5%] cursor-pointer hover:text-black">
              Cookies Policy
            </span>
          </div>
        </div>
      </div>

      <img src={skincare} alt="" />
    </div>
  );
};

export default Footer;
