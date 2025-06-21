import React, { useRef, useEffect } from "react";
import { img1, skinCareCream } from "../assets";
import gsap from "gsap";

const LandingPage = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Section 1: fade in, move up, slight blur to sharp
    tl.fromTo(
      section1Ref.current,
      { opacity: 0, y: 60, filter: "blur(8px)", scale: 0.98 },
      { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 1.2 }
    )
      // Section 2: fade in, move up (no blur)
      .fromTo(
        section2Ref.current,
        { opacity: 0, y: 60, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 },
        "-=0.7"
      )
      // Foreground image: fade in, scale up, soft shadow (no blur)
      .fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1.1 },
        "-=0.8"
      );
  }, []);

  // GSAP button animation handlers
  const handleMouseEnter = () => {
    gsap.to(btnRef.current, {
      backgroundColor: "#FEFFF4",
      color: "#2D3B36",
      duration: 0,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      backgroundColor: "#2D3B36",
      color: "#FEFFF4",
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
    <div className="h-[calc(100vh-80px)] flex flex-col justify-between">
      {/*Section 1*/}
      <div
        ref={section1Ref}
        className="flex justify-between items-center mt-16"
      >
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
      <div
        ref={section2Ref}
        className="w-[100vw] left-[-6%] h-screen relative flex justify-center items-end"
      >
        <div className="absolute p-0 bg-[#eff5e1] inset-0 z-0 flex flex-col justify-end items-center px-4 gap-20">
          <div className="w-full flex justify-start">
            <button
              ref={btnRef}
              className="bg-[#2D3B36] text-white px-6 py-2 rounded-[100px] mt-4 w-[180px] h-[60px] cursor-pointer ml-[10%] transition-all"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              Shop Now
            </button>
          </div>
          <p className="w-full text-center text-[20.7vw] leading-[0.73] font-semibold relative left-[-1.5%] text-[#2D3B36]">
            SKINCARE
          </p>
        </div>
        {/* Foreground image */}
        <img
          ref={imgRef}
          src={img1}
          alt=""
          className="w-[30vw] rounded-[30px] object-cover z-10 shadow-xl h-[50vh] mb-5"
        />
      </div>
    </div>
  );
};

export default LandingPage;
