"use client";
import React, { useState } from "react";
import Input from "../CC/Input";
import Select from "../CC/Select";
import TextArea from "../CC/TextArea";
import { IoIosArrowRoundForward } from "react-icons/io";

const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [textValue, setTextValue] = useState("");

  const handleTextChange = (text) => {
    setTextValue(text);
  };

  const handleSelectChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      style={{
        boxShadow: "0px 5px 43px 0px rgba(17, 29, 25, 0.12)",
      }}
      className="w-[70%] p-10 font-poppins"
    >
      <h1 className="font-bold text-2xl">
        Get In Touch With Your Nearest Local Business Sales Executive!!
      </h1>
      <p className="text-sm mt-3 leading-6 text-[#ffa500]">
        Contact Us And We Will Respond Within The Next Two Working Days.
      </p>
      <form className="w-full mt-10 ">
        <div className="grid grid-cols-3 gap-4">
          <Input
            label="Name"
            type="text"
            placeholder="Please write your name"
          />

          <Input
            label="Email"
            type="email"
            placeholder="Please write your email"
          />
          <Input
            label="Phone number"
            type="number"
            placeholder="Please write your number"
          />
        </div>
        <TextArea
          value={textValue}
          onChange={handleTextChange}
          placeholder="Enter your text here..."
          rows={6}
          label="Your Query"
        />

        <button className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm">
          Submit Request
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
      </form>
    </div>
  );
};

export default ContactForm;
