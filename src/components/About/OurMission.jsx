"use client";
import { aboutaccordionOurMissionData, howItWorksHomeData } from "@/app/data";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="mb-2 mt-5 w-full">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full px-4 py-3 text-[15px] text-white bg-[#32A632] hover:bg-green-600 rounded-md focus:outline-none"
      >
        <span className="text-[15px]">{title}</span>
        <span className="text-lg">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 mt-2 border text-[#63716c] text-[15px] rounded-md bg-white">
          {content}
        </div>
      )}
    </div>
  );
};

const OurMission = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-36 px-20">
      {/* Top Container */}

      <div className="flex justify-between items-start gap-10">
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
          <h1 className="font-paralucent text-5xl mb-4 text-[#182822] leading-normal">
            Our Mission
          </h1>

          <p className=" text-[#63716c]">
            This innovative approach not only minimizes the ecological footprint
            but also contributes to a cleaner, healthier environment for current
            and future generations
          </p>

          {/* Accordion */}
          <div className="w-full">
            {aboutaccordionOurMissionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
