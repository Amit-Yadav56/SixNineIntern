import React from "react";
import { img2, lock } from "../assets";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h1 className="font-normal text-[53px] leading-[78px] tracking-[-0.035em] text-[#bfc4bb]">
        Experience the ultimate in skincare with our expertly formulated
        products, crafted to nourish, protect, and rejuvenate your skin.
        Combining the finest natural ingredients with advanced science, our
        collection ensures every skin type can achieve a radiant, healthy glow.
        Embrace your beauty with confidence every day. Experience the ultimate
        in skincare with our expertly formulated products, crafted to nourish,
        protect, and rejuvenate your skin.
      </h1>
      <div className="flex flex-col lg:flex-row mt-24 w-full justify-between">
        <div className="w-[40%] flex flex-col gap-10 justify-between">
          <div className="flex justify-around border border-[#2D3B36] rounded-[100px] p-4 w-[260px]">
            <div className="w-[20px] h-[20px] bg-[#2D3B36] rounded-full" />
            <span className="text-[20px] leading-[100%]">Why Our Products</span>
          </div>
          <div className="flex flex-col gap-10">
            <span className="text-[60px]">
              YOUR SKIN DESERVES THE BEST CARE.
            </span>
            <span className="text-[18px] leading-[24px]">
              Discover a curated collection of skincare products designed to
              rejuvenate, protect, and pamper your skin. Explore our rage
              crafted with love backed by science, and inspired by nature.
            </span>
          </div>
          <div className="flex flex-col gap-[10%]">
            {/* #1 */}
            <div className="mt-9 flex gap-[8%]">
              <span className="text-[60px] bg-gradient-to-b from-[#293330] to-[white] bg-clip-text text-transparent">
                01
              </span>

              <div className="flex flex-col gap-6">
                <span className="text-[60px] leading-[100%]">
                  Bio Ingredients
                </span>
                <span className="text-[18px] leading-[24px] w-[80%]">
                  Get naturally beautiful and transform with our bio ingredients
                  creams for healthy, radiant skin.
                </span>
              </div>
            </div>
            {/* #2 */}
            <div className="mt-9 flex gap-[8%]">
              <span className="text-[60px] bg-gradient-to-b from-[#293330] to-[white] bg-clip-text text-transparent">
                02
              </span>

              <div className="flex flex-col gap-6">
                <span className="text-[60px] leading-[100%]">
                  Everything Natural{" "}
                </span>
                <span className="text-[18px] leading-[24px] w-[80%]">
                  Pure ingredients for pure skin. The Perfect solution for your
                  skin care needs.
                </span>
              </div>
            </div>
            {/* #3 */}
            <div className="mt-9 flex gap-[8%]">
              <span className="text-[60px] bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent">
                03
              </span>

              <div className="flex flex-col gap-6">
                <span className="text-[60px] leading-[100%]">
                  All Handmade{" "}
                </span>
                <span className="text-[18px] leading-[24px] w-[80%]">
                  Made with love and care. Just for you. Give your skin the
                  tender loving care it deserves.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Image section */}
        <div className="flex flex-col">
          <div className="relative">
            <img className="lg:w-[42vw] rounded-4xl" src={img2} alt="" />
            <div className="absolute bottom-[10%] w-[400px] left-1/4 bg-[#EFF5E1] h-[100px] rounded-[200px] flex gap-[5%] justify-around items-center">
              <div className="size-[88px] border border-[#2D3B36] rounded-full flex items-center justify-center border-dashed">
                <div className="bg-[#2D3B36] rounded-full size-[80px] flex items-center justify-center">
                  <img className="w-[50px] h-[50px]" src={lock} alt="" />
                </div>
              </div>
              <span className="text-[20px] w-[65%]">
                Best Skin Care Product <br /> Award Wining
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-[20px]">Since 2001</span>
            <span className="text-[20px]">LEARN MORE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
