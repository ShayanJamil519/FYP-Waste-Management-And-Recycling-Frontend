"use client";
import { howItWorksHomeData, howItWorksHomeListData } from "@/app/data";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";

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
      {/* Bottom Container */}
      <div className="flex justify-between items-start gap-10 mt-20">
        {/* Left Container */}
        <div
          style={{
            background:
              "url('/home/how__it__works1.jpg') no-repeat center center/cover",
          }}
          className="w-[60%] h-[550px] rounded-3xl sticky top-20 bottom-0"
        >
          <div className="absolute -left-12 bottom-28  w-full  h-48 flex justify-center items-stretch">
            <div className="w-[15%] bg-[#f29620] grid place-items-center rounded-s-xl cursor-pointer transition duration-500 ease-in-out hover:bg-[#257830]">
              <FaPlay className="text-[20px] text-[#fff]" />
            </div>
            <div className="w-full flex justify-center items-center rounded-e-xl py-10 bg-[#fff]">
              {howItWorksHomeData.map((item) => (
                <div
                  key={item.title}
                  className="px-7 flex flex-col justify-center items-center border-r-gray-300 border-r-2"
                >
                  <img
                    src={item.imageSrc}
                    alt="logo"
                    className="transition duration-400 ease-in-out hover:scale-110"
                  />
                  <h1 className="mt-3 text-center text-[#182822] font-semibold font-poppins">
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Container */}
        <div className="w-[40%] font-poppins ">
          <p className="mb-5 text-[#63716c]">
            We have already made huge strides in our sustainability journey by
            investing in plastic recycling and energy from waste infrastructure
            and low carbon collections, leading to a huge reduction in nation’s
            carbon smoke.
          </p>
          <p className=" text-[#63716c]">
            We already made huge strides in our sustainability journey by
            investing in recycling, offering low cost commercial waste
            collection services to meet all your waste.
          </p>
          <div className="w-full flex justify-center items-start rounded-md my-7 gap-5 py-7 px-7 bg-[#f7f9f8]">
            <img
              src="/home/how__it__works5.png"
              alt="logo"
              className="transition duration-400 ease-in-out hover:scale-110"
            />
            <div className="font-poppins">
              <p className="font-semibold text-[#58635f]">
                We will help you manage all waste removal, regardless of the
                size of waste, we will treat your trash in the best way for
                environment.
              </p>
              <div className="hover_effect flex justify-start items-center gap-3 mt-2 cursor-pointer ">
                <span className="text-[#257830] text-[15px] font-semibold font-poppins">
                  See How It Works?
                </span>
                <span className="p-1 rounded-full bg-[#257830] transition duration-500  text-[#fff] ">
                  <IoIosArrowRoundForward className="text-[25px] font-bold" />
                </span>{" "}
                <style jsx>{`
                  .hover_effect:hover span:nth-child(2) {
                    transform: scale(1.2);
                  }
                `}</style>
              </div>
            </div>
          </div>
          <p className=" text-[#63716c]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
          {/* Buttons Container */}
          <div className="font-poppins my-7 flex justify-start items-center gap-7 text-[15px] font-semibold">
            <button className="flex justify-center items-center gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] outline-none border-0 px-10 py-5 rounded-sm">
              Explore Products{" "}
              <span className="p-0 rounded-full bg-[#fff]  transition duration-500 text-[#20332c] ">
                <IoIosArrowRoundForward className="text-[27px] font-bold" />
              </span>{" "}
              <style jsx>{`
                button:hover span {
                  background-color: #fff;
                  color: #257830;
                }
              `}</style>
            </button>
            {/* ==== */}
            <button className="flex justify-center items-center gap-3 bg-[#fff] text-[#257830] border-2 border-[#257830] transition duration-500 ease-in-out hover:bg-[#257830] hover:text-[#fff] outline-none  px-10 py-[22px] rounded-sm">
              About Us
            </button>
          </div>
          {/* List */}
          <div className="w-full">
            {howItWorksHomeListData.map((item) => (
              <div
                key={item.list}
                className="flex justify-start items-center gap-5 py-5 border-b-[1px] border-[#d9e3e0]"
              >
                <div className="w-fit p-1 bg-[#f7f9f8]  rounded-full">
                  <IoIosCheckmark className="text-[#257830] text-[20px]" />
                </div>
                <p className="font-semibold text-[#58635f] text-sm">
                  {item.list}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
