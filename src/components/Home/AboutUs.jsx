import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="w-full text-[#000]">
      {/* Top Container */}
      <div className="flex gap-7 justify-between items-start px-10 py-10 border-b-[1px] border-[#ddd]">
        {/* Left Container */}
        <div className="flex gap-5 justify-start items-center w-1/2">
          {/* Left Container */}
          <div className="flex w-1/3 justify-start items-center">
            <img
              src="/home/contact__avatar.jpg"
              alt="logo"
              className="w-[55px] h-[55px] rounded-full border-[5px] border-[#fff] -mr-2 z-10"
            />
            <span className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#000] text-[20px] text-[#fff] transition duration-500 ease-in-out hover:bg-[#f29620] cursor-pointer z-0">
              <FaPhoneAlt />
            </span>
          </div>
          {/* Right Container */}
          <div>
            <p className="text-[#62706b] text-[15px] font-poppins font-semibold">
              Reliable and trusted services to meet all your waste requirements,
              feel free to request a free quote today!!
            </p>
            <div className="group flex justify-start items-center gap-3 mt-2 cursor-pointer transition duration-500 hover:scale-125">
              <span className="text-[#257830] text-[15px] font-semibold font-poppins">
                Contact Us Now
              </span>
              <span className="p-1 rounded-full bg-[#257830] group-hover:scale-125 transition-transform   text-[#fff] ">
                <IoIosArrowRoundForward className="text-[25px] font-bold" />
              </span>{" "}
            </div>
          </div>
        </div>
        {/* Right Container */}
        <div className="-mt-32 flex gap-10">
          {/* First Div */}
          <div className="text-[#fff] bg-[#257830] font-poppins px-8 py-7 h-fit w-[320px] rounded-md relative">
            <h1 className="font-semibold text-lg">
              Trusted 97% <br /> Satisfaction
            </h1>
            <p className="mt-3 mb-5 text-sm">
              We understand that we must lead by example and are committed to
              further improving health.
            </p>
            <div className="group flex justify-start items-center gap-3 mt-3 cursor-pointer transition duration-500 hover:scale-125">
              <span className="p-0 rounded-full bg-[#fff] group-hover:scale-125 transition-transform   text-[#257830] ">
                <IoIosArrowRoundForward className="text-[23px] font-bold" />
              </span>{" "}
              <span className="text-[#fff] text-[14px] font-semibold font-poppins">
                Explore More
              </span>
            </div>
            <img
              src="/home/about__icon1.png"
              alt="logo"
              className="absolute bottom-2 right-2"
            />
          </div>
          {/* Second Div */}
          <div className="text-[#fff] bg-[#f29620] font-poppins px-8 py-7 w-[320px] h-fit rounded-md relative">
            <h1 className="font-semibold text-lg">Sustainable Management</h1>
            <p className="mt-3 mb-5 text-sm">
              Almost 6000 employees to carry out all essential operations daily
              to support our economy.
            </p>
            <div className="group flex justify-start items-center gap-3 mt-3 cursor-pointer transition duration-500 hover:scale-125">
              <span className="p-0 rounded-full bg-[#fff] group-hover:scale-125 transition-transform   text-[#f29620] ">
                <IoIosArrowRoundForward className="text-[23px] font-bold" />
              </span>{" "}
              <span className="text-[#fff] text-[14px] font-semibold font-poppins">
                Explore More
              </span>
            </div>
            <img
              src="/home/about__icon2.png"
              alt="logo"
              className="absolute bottom-2 right-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
