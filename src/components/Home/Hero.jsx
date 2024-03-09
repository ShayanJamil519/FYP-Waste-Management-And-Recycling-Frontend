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
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

SwiperCore.use([Navigation, Pagination]);

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold as needed
  });

  const variants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const navigate = useRouter();

  return (
    <div className=" flex  relative min-h-[90vh] w-full ">
      <div
        ref={ref}
        style={{
          background:
            "linear-gradient( 135deg, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 0.2)), url('/home/hero__slider1.jpg') no-repeat center center/cover",
        }}
        className="w-[full] px-10 flex justify-start items-center"
      >
        <motion.div
          className="w-[60%] text-[#fff]"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h1 className="font-paralucent text-[80px] leading-[80px]">
            Accountable Waste Management And Recycling !
          </h1>
          <p className="font-semibold font-poppins my-7">
            Empowering citizens with transparent and immutable data, our <br />
            software utilizes blockchain to hold government authorities <br />
            accountable for efficient waste management
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
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
