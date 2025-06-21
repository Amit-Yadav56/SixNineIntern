import React, { useRef, useEffect } from "react";
import { img1, skinCareCream } from "../assets";
import gsap from "gsap";

const LandingPage = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const btnRefLg = useRef(null);
  const btnRefSm = useRef(null);
  const imgRefLg = useRef(null);
  const imgRefSm = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      section1Ref.current,
      { opacity: 0, y: 60, filter: "blur(8px)", scale: 0.98 },
      { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 1.2 }
    )
      .fromTo(
        section2Ref.current,
        { opacity: 0, y: 60, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 },
        "-=0.7"
      )
      // Animate both images if present
      .fromTo(
        imgRefLg.current,
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1.1 },
        "-=0.8"
      )
      .fromTo(
        imgRefSm.current,
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1.1 },
        "-=1.1"
      );
  }, []);

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, {
      backgroundColor: "#FEFFF4",
      color: "#2D3B36",
      duration: 0,
    });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      backgroundColor: "#2D3B36",
      color: "#FEFFF4",
      duration: 0,
    });
  };

  const handleClick = (ref) => {
    gsap.to(ref.current, {
      scale: 0.85,
      duration: 0.12,
      onComplete: () => {
        gsap.to(ref.current, {
          scale: 1.1,
          duration: 0.18,
          onComplete: () => {
            gsap.to(ref.current, { scale: 1, duration: 0.1 });
          },
        });
      },
    });
  };

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col justify-between">
      {/* Section 1 */}
      <div
        ref={section1Ref}
        className="flex justify-between items-start lg:items-center mt-16 relative h-[65%] lg:h-auto pb-[11.5vh]"
      >
        <div className="w-[335px] font-inter font-normal text-[20px] leading-[100%] indent-[105px] tracking-[0]">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your nautural glow every day.
        </div>
        {/* Show this text on large screens */}
        <div className="font-bold text-[5vw] leading-[90px] tracking-[-0.03em] uppercase hidden lg:block">
          GLOW <br /> NATUR- <br />
          ALLY
        </div>
        {/* Show this text on small/medium screens */}
        <div
          className="font-extrabold absolute block text-[#2D3B36] lg:hidden left-[-10%] bottom-0 text-center"
          style={{
            fontSize: "17.5vw",
            lineHeight: "110px",
            letterSpacing: "-3%",
            verticalAlign: "cap",
            textTransform: "uppercase",
            fontFamily: "inherit",
          }}
        >
          Glowwww
          <br />
          Naturally
        </div>
        <img
          src={skinCareCream}
          className="w-[47%] lg:w-[15%] md:block hidden"
          alt="cream"
        />
      </div>
      {/* Section 2 */}
      <div
        ref={section2Ref}
        className="w-[100vw] left-[-6%] h-screen relative flex justify-center items-end"
      >
        <div className="absolute p-0 bg-[#eff5e1] inset-0 z-0 flex flex-col justify-end lg:justify-between items-center px-4 gap-0">
          {/* For large screens: button and image are separate */}
          <div className="w-full justify-end lg:justify-start lg:flex hidden mt-16">
            <button
              ref={btnRefLg}
              className="bg-[#2D3B36] text-white px-6 py-2 rounded-[100px] mt-4 w-[180px] h-[60px] cursor-pointer mr-[10%] lg:ml-[10%] transition-all"
              onMouseEnter={() => handleMouseEnter(btnRefLg)}
              onMouseLeave={() => handleMouseLeave(btnRefLg)}
              onClick={() => handleClick(btnRefLg)}
            >
              Shop Now
            </button>
          </div>
          {/* For small/medium screens: button and image together */}
          <div className="w-full flex justify-around items-center lg:hidden px-2 mt-4 absolute bottom-[5%] z-10">
            <img
              ref={imgRefSm}
              src={img1}
              alt=""
              className="w-[45vw] rounded-[30px] object-cover shadow-xl  mb-0"
            />
            <button
              ref={btnRefSm}
              className="bg-[#2D3B36] text-white px-6 py-2 rounded-[100px] w-[150px] h-[50px] cursor-pointer transition-all"
              onMouseEnter={() => handleMouseEnter(btnRefSm)}
              onMouseLeave={() => handleMouseLeave(btnRefSm)}
              onClick={() => handleClick(btnRefSm)}
            >
              Shop Now
            </button>
          </div>
          <p className="w-full text-center text-[20.7vw] leading-[0.73] font-semibold relative left-[-1.5%] text-[#2D3B36]">
            SKINCARE
          </p>
        </div>
        {/* Foreground image for large screens only */}
        <img
          ref={imgRefLg}
          src={img1}
          alt=""
          className="w-[60vw] lg:w-[30vw] rounded-[30px] object-cover z-10 shadow-xl h-[50vh] mb-5 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default LandingPage;
