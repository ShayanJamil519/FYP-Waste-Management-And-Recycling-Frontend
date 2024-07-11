"use client";
import { howItWorksHomeData, howItWorksHomeListData } from "@/app/data";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";

const HowItWorks = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen py-10 md:py-20 lg:py-36 px-4 md:px-10 lg:px-20">
      {/* Top Container */}
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:gap-unset gap-10 lg:px-10">
        <h1 className="font-paralucent text-[27px] md:text-3xl lg:text-4xl lg:w-3/4 text-[#182822]">
          Every action, from waste recycling statistics to user complaints and
          responses, is securely recorded, fostering a decentralized system
        </h1>

        <div className="relative">
          <div
            onClick={() => router.push("/contact")}
            class="sm:w-[8.5rem] sm:h-[8.5rem] w-[7.5rem] h-[7.5rem] text-uppercase transform -rotate-103 font-bold z-[-1] rotating"
          >
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
          <div className="sm:p-3 p-2 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#257830] transition duration-500  text-[#fff] hover:scale-110 cursor-pointer shadow-bubble">
            <IoIosArrowRoundForward className="text-[28px] font-bold" />
          </div>{" "}
        </div>
      </div>
      {/* Bottom Container */}
      <div className="flex lg:flex-row flex-col justify-between items-start gap-10 mt-10 lg:mt-20">
        {/* Left Container */}
        <div
          style={{
            background:
              "url('/home/how__it__works1.jpg') no-repeat center center/cover",
          }}
          className="lg:w-[60%] w-full h-[550px] sm:h-[650px] lg:h-[550px] rounded-3xl relative lg:sticky lg:top-20 lg:bottom-0"
        >
          <div className="absolute lg:-left-12 bottom-5 lg:bottom-28 w-[90%] sm:w-[80%] md:w-[90%] lg:w-full  lg:h-48 flex justify-center items-stretch">
            <div className="w-[25%] lg:w-[15%] bg-[#f29620] grid place-items-center rounded-s-xl cursor-pointer transition duration-500 ease-in-out hover:bg-[#257830]">
              <FaPlay className="text-[20px] text-[#fff]" />
            </div>
            <div className="w-full flex lg:flex-row gap-4 lg:gap-unset  flex-col justify-center items-center rounded-e-xl py-5  lg:py-10 bg-[#fff]">
              {howItWorksHomeData.map((item) => (
                <div
                  key={item.title}
                  className="px-7 flex flex-col justify-center items-center border-r-gray-300 lg:border-r-2"
                >
                  <img
                    src={item.imageSrc}
                    alt="logo"
                    className="transition duration-400 sm:w-[70px] w-[50px] lg:w-fit ease-in-out hover:scale-110"
                  />
                  <h1 className="lg:mt-3 text-center text-[#182822] sm:text-base text-[13px] lg:font-semibold font-poppins">
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Container */}
        <div className="lg:w-[40%] font-poppins ">
          <p className="mb-5 text-[#63716c]">
            In our commitment to sustainability, our project revolutionizes
            waste management by promoting efficient recycling practices and
            reducing environmental impact. By leveraging blockchain and AI
            integration, we create a decentralized platform that not only
            empowers users with real-time data
          </p>
          <p className=" text-[#63716c]">
            This innovative approach not only minimizes the ecological footprint
            but also contributes to a cleaner, healthier environment for current
            and future generations
          </p>
          <div className="w-full flex lg:flex-row flex-col justify-center items-start rounded-md my-7 gap-5 py-5 sm:py-7 px-4 sm:px-7 bg-[#f7f9f8]">
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
                <span
                  onClick={() => router.push("/about")}
                  className="text-[#257830] text-[15px] font-semibold font-poppins"
                >
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
            Our approach not only conserves natural resources but also fosters a
            more resilient and eco-friendly waste management system, thereby
            promoting sustainability at both local and global levels.
          </p>
          {/* Buttons Container */}
          <div className="font-poppins my-5 sm:my-7 flex sm:flex-row flex-col justify-start items-center gap-4 sm:gap-7 text-[15px] font-semibold">
            <button
              onClick={() => router.push("/about")}
              className="flex sm:w-1/2 lg:w-fit w-full justify-center items-center gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] outline-none border-0 px-10 py-5 rounded-sm"
            >
              Explore Our Goals{" "}
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
            <button
              onClick={() => router.push("/about")}
              className="flex sm:w-1/2 lg:w-fit w-full justify-center items-center gap-3 bg-[#fff] text-[#257830] border-2 border-[#257830] transition duration-500 ease-in-out hover:bg-[#257830] hover:text-[#fff] outline-none  px-10 py-[22px] rounded-sm"
            >
              About Us
            </button>
          </div>
          {/* List */}
          <div className="w-full">
            {howItWorksHomeListData.map((item) => (
              <div
                key={item.list}
                className="flex justify-start items-center gap-3 sm:gap-5 py-3 sm:py-5 border-b-[1px] border-[#d9e3e0]"
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
