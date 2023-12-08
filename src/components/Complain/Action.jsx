"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Action = () => {
  return (
    <div className="w-[30%] h-fit sticky top-20 bottom-0 rounded-2xl bg-[#257830] px-10 py-20 font-poppins text-[#fff]">
      <h1 className="font-semibold text-xl">
        Trusted And Reliable Waste Collection!
      </h1>
      <p className="text-sm mt-3 leading-6">
        We offer customers regular collection of trash, on a scheduled or call
        basis, with a safe level of service.
      </p>
      <button className="mt-6 flex justify-center items-center font-semibold text-sm gap-3 bg-[#fff] transition duration-500 ease-in-out hover:bg-[#20332c] text-[#20332c] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm">
        Get Started Now
        <span className="p-0 rounded-full bg-[#20332c]  transition duration-500 text-[#fff] ">
          <IoIosArrowRoundForward className="text-[27px] font-bold" />
        </span>{" "}
        <style jsx>{`
          button:hover span {
            background-color: #fff;
            color: #20332c;
          }
        `}</style>
      </button>
      <div className="font-poppins text-[#fff] mt-10">
        <p className="flex justify-start items-center gap-6 mb-2">
          <MdMarkEmailUnread className="text-[25px]" />
          <span className="cursor-pointer">Trashco@7oroof.com</span>
        </p>
        <p className="flex justify-start items-center gap-6">
          <FaPhone className="text-[21px]" />
          <span className="cursor-pointer">+2 01161145741</span>
        </p>
      </div>
    </div>
  );
};

export default Action;
