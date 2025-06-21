import React, { useRef, useEffect } from "react";
import { img2, lock } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutText = `Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.`;

const About = () => {
  const paraRef = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    // Animate first paragraph (word by word)
    const words = paraRef.current.querySelectorAll(".about-word");
    gsap.set(words, { color: "#bfc4bb", opacity: 0.5 });

    const anim = gsap.to(words, {
      color: "#2D3B36",
      opacity: 1,
      stagger: {
        each: 0.08,
        from: "start",
      },
      duration: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animate section 2 (fade in and move up)
    gsap.fromTo(
      section2Ref.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 85%",
        },
      }
    );

    // Cleanup
    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Split the paragraph into words and wrap each in a span
  const renderAnimatedParagraph = () =>
    aboutText.split(" ").map((word, idx) => (
      <span
        key={idx}
        className="about-word"
        style={{ display: "inline-block", whiteSpace: "pre" }}
      >
        {word + " "}
      </span>
    ));

  return (
    <div className="flex flex-col items-center justify-center mt-[5%]">
      <h1
        ref={paraRef}
        className="w-[90vw] font-normal text-[53px] leading-[78px] tracking-[-0.035em] text-[#2D3B364D]"
        style={{ transition: "color 0.3s" }}
      >
        {renderAnimatedParagraph()}
      </h1>
      {/*section 2*/}
      <div
        ref={section2Ref}
        className="flex flex-col lg:flex-row mt-[12%] w-full justify-between"
      >
        <div className="w-[90vw] lg:w-[40%] flex flex-col gap-10  justify-center lg:justify-between">
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
            <div className="mt-9 flex gap-[8%] mb-9">
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
