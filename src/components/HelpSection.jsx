import React, { useState, useRef, useEffect } from "react";
import { headPhone, product3, plus, minus } from "../assets";

const data = [
  {
    id: 1,
    question: "Are your products safe for sensitive skin?",
    answer:
      "Yes, our products are formulated with sensitive skin in mind. We use gentle, natural ingredients that are free from harsh chemicals and irritants.",
  },
  {
    id: 2,
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan.Check individual product details for specifics.",
  },
  {
    id: 3,
    question: "What’s your return policy?",
    answer:
      "We offer a 30-day return policy on unopened products. If you are not satisfied with your purchase, please contact our customer service for assistance.",
  },
  {
    id: 4,
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship internationally. Shipping costs and times vary by location.",
  },
  {
    id: 5,
    question: "How do i choose the right product?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email.",
  },
];

const HelpSection = () => {
  const [openId, setOpenId] = useState(null);
  const answerRefs = useRef({});

  const toggleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    data.forEach((item) => {
      const ref = answerRefs.current[item.id];
      if (ref) {
        if (openId === item.id) {
          // Expand
          ref.style.maxHeight = ref.scrollHeight + "px";
          ref.style.opacity = 1;
        } else {
          // Collapse
          ref.style.maxHeight = "0px";
          ref.style.opacity = 0;
        }
      }
    });
  }, [openId]);

  return (
    <div className="w-full flex justify-between items-center mb-[8%] relative">
      <div className="w-1/2 relative">
        <img src={product3} alt="" className="w-full" />
        <div className="absolute bottom-[10%] w-[400px] left-1/4 bg-[#EFF5E1] h-[100px] rounded-[200px] flex gap-[5%] justify-around items-center">
          <div className="size-[88px] border border-[#2D3B36] rounded-full flex items-center justify-center border-dashed">
            <div className="bg-[#2D3B36] rounded-full size-[80px] flex items-center justify-center">
              <img className="w-[50px] h-[50px]" src={headPhone} alt="" />
            </div>
          </div>
          <span className="text-[20px] w-[65%]">
            24/7 We’re Here
            <br /> to Help You
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start w-[40%] absolute right-0 h-full">
        <div className="flex justify-around border border-[#2D3B36] rounded-[100px] p-4 w-[341px] h-[60px] cursor-pointer ">
          <div className="w-[20px] h-[20px] bg-[#2D3B36] rounded-full" />
          <span className="text-[20px] leading-[100%]">
            Frequently Asked Question
          </span>
        </div>
        <span className="text-[60px]">
          Answers to Your
          <br /> Skincare Questions, All
          <br /> in One Place.
        </span>
        <p className="text-[18px] mb-6">
          If you have any questions or need assistance, feel free to reach out
          to us.
        </p>

        {/*Questions*/}
        <div className="w-full">
          {data.map((item) => (
            <div
              key={item.id}
              className="mb-4 relative p-4 border border-[#2D3B36] rounded-lg"
            >
              <div className="flex items-center justify-between w-full">
                <h3 className="text-[20px] font-semibold mb-2 w-[90%]">
                  {item.question}
                </h3>
                <button
                  className="h-full relative right-4 top-[36%] bg-transparent"
                  onClick={() => toggleAnswer(item.id)}
                  aria-label={
                    openId === item.id ? "Hide answer" : "Show answer"
                  }
                >
                  <img src={openId === item.id ? minus : plus} alt="" />
                </button>
              </div>
              <div
                ref={(el) => (answerRefs.current[item.id] = el)}
                style={{
                  maxHeight:
                    openId === item.id
                      ? `${answerRefs.current[item.id]?.scrollHeight}px`
                      : "0px",
                  opacity: openId === item.id ? 1 : 0,
                  overflow: "hidden",
                  transition:
                    "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease-in-out",
                }}
              >
                <p className="text-[16px] w-[90%] mt-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
