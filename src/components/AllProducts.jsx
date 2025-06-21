import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import { leftArrow, product1, product2, product3, rightArrow } from "../assets";
import gsap from "gsap";

const cardsData = [
  {
    id: 1,
    title: "ALYA SKIN CLEANSER.",
    price: 29.99,
    img: product1,
  },
  {
    id: 2,
    title: "RITUAL OF SAKURA.",
    price: 27.99,
    img: product2,
  },
  {
    id: 3,
    title: "THE BODY LOTION.",
    price: 19.99,
    img: product3,
  },
];

const AllProducts = ({ onAddToCart }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const buttons = ["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGGING"];
  const [current, setCurrent] = useState(0);
  const [leftPressed, setLeftPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);

  // Refs for animation
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]); // <-- create cardRefs

  // Animate text only once when section enters viewport
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // Animate cards every time current changes
  useEffect(() => {
    if (!cardRefs.current) return;
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
      }
    );
  }, [current]);

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(cardsData[(current + i) % cardsData.length]);
    }
    return visible;
  };

  const handleRight = () => {
    setCurrent((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  const handleLeft = () => {
    setCurrent((prev) => (prev + 1) % cardsData.length);
  };

  // Animation handlers for tactile feedback
  const handlePress = (setter) => {
    setter(true);
    setTimeout(() => setter(false), 150); // quick tap effect
  };

  // Render cards with refs for animation
  const visibleCards = getVisibleCards();

  return (
    <div className="lg:w-full w-[90vw] m-auto flex flex-col gap-[4rem] justify-center items-center text-center mb-[15%]">
      <span className="text-[3vw] leading-[100%] tracking-[-2%]">
        Feel Beautiful Inside and Out <br /> with Every Product.
      </span>
      <div className="flex gap-4 flex-wrap justify-center">
        {buttons.map((label, idx) => (
          <button
            key={label}
            className={`w-[175px] h-[60px] rounded-[100px] border border-[#2D3B36] transition-colors
              ${
                activeIndex === idx
                  ? "bg-[#2D3B36] text-[#FEFFF4]"
                  : "bg-[#FEFFF4] text-[#2D3B36]"
              }
            `}
            onClick={() => setActiveIndex(idx)}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Pass onAddToCart to Cards */}
      <Cards
        cards={visibleCards}
        onAddToCart={onAddToCart}
        cardRefs={cardRefs}
      />
      <div className="flex gap-10 justify-center mt-[4rem] lg:hidden">
        {/* Left Button */}
        <button
          className={`
                    w-[80px] h-[80px] rounded-full border border-[#2D3B36]
                    flex items-center justify-center
                    transition-transform duration-150
                    ${leftPressed ? "scale-90 bg-[#e6eae2]" : ""}
                    active:scale-90
                  `}
          onClick={handleLeft}
          onMouseDown={() => handlePress(setLeftPressed)}
          onMouseUp={() => setLeftPressed(false)}
          onMouseLeave={() => setLeftPressed(false)}
          onTouchStart={() => handlePress(setLeftPressed)}
          onTouchEnd={() => setLeftPressed(false)}
          aria-label="Previous"
        >
          <img src={leftArrow} alt="Left" />
        </button>
        {/* Right Button */}
        <button
          className={`
                    w-[80px] h-[80px] rounded-full border border-[#2D3B36] bg-[#2D3B36]
                    flex items-center justify-center
                    transition-transform duration-150
                    ${rightPressed ? "scale-90 bg-[#1a211d]" : ""}
                    active:scale-90
                  `}
          onClick={handleRight}
          onMouseDown={() => handlePress(setRightPressed)}
          onMouseUp={() => setRightPressed(false)}
          onMouseLeave={() => setRightPressed(false)}
          onTouchStart={() => handlePress(setRightPressed)}
          onTouchEnd={() => setRightPressed(false)}
          aria-label="Next"
        >
          <img src={rightArrow} alt="Right" />
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
