"use client";
import { aboutWasteBreakDownProgressBarData } from "@/app/data";
import React from "react";

const ProgressBar = ({ label, percentage }) => {
  const fillerStyles = {
    width: `${percentage}%`,
    backgroundColor: "orange",
    transition: "width 1s ease-in-out",
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className=" font-medium text-gray-700 text-[15px]">{label}</span>
        <span className="text-sm font-medium text-[#63716c]">{`${percentage}%`}</span>
      </div>
      <div className="w-full bg-gray-200 rounded h-2">
        <div style={fillerStyles} className="h-2 rounded bg-orange-500"></div>
      </div>
    </div>
  );
};

const WasteBreakDown = () => {
  return (
    <div className="min-h-screen pb-28 pl-10">
      {/* Top Container */}

      <div className="flex justify-between items-start gap-10">
        {/* Left Container */}

        <div className="w-[40%] font-poppins ">
          <h1 className="font-paralucent text-4xl mb-4 text-[#182822] leading-normal">
            Providing A Regular Trash Collection On A Scheduled Time Or Call In
            Service.
          </h1>

          <p className=" text-[#63716c]">
            This innovative approach not only minimizes the ecological footprint
            but also contributes to a cleaner, healthier environment for current
            and future generations
          </p>

          <div className="mt-9">
            {aboutWasteBreakDownProgressBarData.map((item, index) => (
              <ProgressBar
                key={index}
                label={item.label}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>

        {/* Right Container */}
        <div
          style={{
            background:
              "url('/home/how__it__works1.jpg') no-repeat center center/cover",
          }}
          className="w-[50%] min-h-[550px] rounded-s-3xl "
        ></div>
      </div>
    </div>
  );
};

export default WasteBreakDown;
