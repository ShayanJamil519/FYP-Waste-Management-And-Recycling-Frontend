import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const HowItWorks = () => {
  return (
    <div className="min-h-screen py-36 px-20">
      {/* Top Container */}
      <div className="flex justify-between items-center px-10">
        <h1 className="font-paralucent text-4xl w-3/4 text-[#182822]">
          Providing Trusted, Competitive And Reliable Business Waste Collection
          On A Scheduled Time Or Call In Service.
        </h1>

        <div className="relative">
          <div class="w-[8.5rem] h-[8.5rem] text-uppercase transform -rotate-103 font-bold z-[-1] rotating">
            <svg viewBox="0 0 200 200">
              <path
                id="textPath"
                d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                transform="translate(100,100)"
                fill="none"
                strokeWidth="0"
              ></path>
              <g fontSize="13.1px">
                <text textAnchor="start">
                  <textPath
                    className="text-[#000] text-[24px] font-poppins font-semibold"
                    xlinkHref="#textPath"
                    startOffset="0%"
                  >
                    - Get In Touch - {`   `}Get In Touch - {`   `} Get In Touch
                    {`   `}{" "}
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
          <div className="p-3 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#257830] transition duration-500  text-[#fff] hover:scale-110 cursor-pointer shadow-bubble">
            <IoIosArrowRoundForward className="text-[28px] font-bold" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
