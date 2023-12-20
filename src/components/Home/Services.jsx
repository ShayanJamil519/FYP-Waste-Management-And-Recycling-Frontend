"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Services = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f7f9f8 70%, #fff 30%)",
      }}
      className="w-full min-h-screen pt-32 pb-20 px-10"
    >
      <h6 className="text-center font-bold text-[#f29620]">
        Safe And Trusted Waste Collection Service
      </h6>
      <h1 className="font-paralucent text-4xl mt-5 mb-16 w-2/4 mx-auto text-center text-[#182822] leading-normal">
        Devoted & Trustworthy Waste Collection Services
      </h1>
      <div className="flex justify-center items-center w-full gap-10">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="w-1/3">
            <img
              src="/home/services1.jpg"
              alt="logo"
              className="w-full rounded-lg"
            />
            <div className="p-7 relative rounded-lg w-[90%] -mt-28 bg-[#fff] font-poppins transition duration-500 ease-in-out shadow-sm hover:shadow-lg shadow-[#ddd9d9]">
              <h1 className="font-paralucent text-xl text-[#182822] hover:text-[#f29620] transition duration-500 ease-in-out cursor-pointer">
              Real-Time Waste Tracking
              </h1>
              <p className="text-[#62706b] text-sm my-5">
              Our platform offers a groundbreaking service by providing users with real-time insights into the entire waste management process. From generation to recycling and disposal, users can track and verify the journey of their waste.
              </p>
              <button className="flex justify-center items-center gap-3 transition duration-500 ease-in-out hover:bg-[#257830] text-[#20332c] hover:text-[#fff] outline-none border-2 hover:border-[#257830] border-[#20332c] px-8 py-4 rounded-sm">
                Explore More
                <span className="p-0 rounded-full bg-[#20332c] hover:bg-[#fff]  transition duration-500 text-[#fff] hover:text-[#257830] ">
                  <IoIosArrowRoundForward className="text-[27px] font-bold" />
                </span>{" "}
                <style jsx>{`
                  button:hover span {
                    background-color: #fff;
                    color: #257830;
                  }
                `}</style>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
