import React from "react";
import { skincare } from "../assets";

const Footer = () => {
  return (
    <div className="relative left-[-6%] w-[112%] bg-[#2D3B36] text-[#E7E8E0]">
      <div className="flex justify-between w-[90%] m-auto py-[8%]">
        <span className="text-[60px] leading-[100%] tracking-[-2%]">
          Join The Skincare <br />
          Community Now.
        </span>
        <div className="text-[60px] leading-[100%] tracking-[-2%]">
          <span className="text-[30px]">
            Get in Touch
            <br />
          </span>
          contact.skincare.com
        </div>
      </div>

      <div className="flex justify-between w-[90%] m-auto py-8 mb-[5%]">
        <div className="flex w-[30%] justify-between">
          <span className="text-[20px] leading-[100%] tracking-[-5%] ">
            Facebook
          </span>
          <span className="text-[20px] leading-[100%] tracking-[-5%] ">
            Instagram
          </span>
          <span className="text-[20px] leading-[100%] tracking-[-5%] ">
            Youtube
          </span>
        </div>
        <div className="flex w-[30%] justify-between">
          <span className="text-[20px] leading-[100%] tracking-[-5%] ">
            Terms of Service
          </span>
          <span className="text-[20px] leading-[100%] tracking-[-5%] ">
            Privacy Policy
          </span>
          <span className="text-[20px] leading-[100%] tracking-[-5%] ">
            Cookies Policy
          </span>
        </div>
      </div>

      <img src={skincare} alt="" />
    </div>
  );
};

export default Footer;
