"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { useRouter } from "next/navigation";
import { heroSliderImages } from "@/app/data";

SwiperCore.use([Navigation, Pagination]);

const Hero = () => {
  const [value, setValue] = useState();

  const navigate = useRouter();

  return (
    <div className=" flex  relative min-h-[90vh] w-full ">
      <div
        style={{
          background:
            "linear-gradient( 135deg, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 0.2)), url('/home/hero__slider1.jpg') no-repeat center center/cover",
        }}
        className="w-[full] px-10 flex justify-start items-center"
      >
        <div className="w-[55%] text-[#fff] ">
          <h1 className="font-paralucent text-[80px] leading-[80px]">
            Competitive And Reliable Business Waste Collection!
          </h1>
          <p className="font-semibold font-poppins my-7">
            We’ll work with you to deliver your dumpster promptly when you need
            it, and create proper custom pickup schedule that makes sense,
            whether it’s daily,
          </p>
          {/* Buttons Container */}
          <div className="font-poppins flex justify-start items-center gap-10 text-[15px] font-semibold">
            <button className="flex justify-center items-center gap-3 bg-[#f29620] transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#000] outline-none border-0 px-10 py-5 rounded-sm">
              Explore Our Services{" "}
              <span className="p-0 rounded-full bg-[#fff]  transition duration-500 text-[#f29620] ">
                <IoIosArrowRoundForward className="text-[27px] font-bold" />
              </span>{" "}
              <style jsx>{`
                button:hover span {
                  background-color: #000;
                  color: #fff;
                }
              `}</style>
            </button>
            {/* ==== */}
            <button className="flex justify-center items-center gap-3 bg-[#fff] text-[#000] transition duration-500 ease-in-out hover:bg-[#f29620] hover:text-[#fff] outline-none border-0 px-10 py-[22px] rounded-sm">
              More About Us!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
