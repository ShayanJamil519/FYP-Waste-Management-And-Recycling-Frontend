import { postsData } from "@/app/data";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Post = () => {
  return (
    <div className="bg-white font-normal font-poppins p-4 rounded-md">
      <h1 className=" text-3xl font-semibold mb-3 underline text-[#182822] leading-normal">
        Setting up content and creative project tasks
      </h1>

      <div className="flex items-center justify-start space-x-2 mb-5">
        <img
          src="/shared/testimonials__1.jpg"
          alt="janet andrews"
          className="w-12 h-12 rounded-full"
        />
        <div className="">
          <p className="text-lg">janet andrews</p>
          <p className="text-xs text-gray-500">January 23, 2024 21:41</p>
        </div>
      </div>
      <p className="text-[#000] font-light leading-relaxed">
        One of the biggest challenge of Wrike is finding/coordinating tasks that
        relate to the same project but ALL HAVE DIFFERENT TICKET NUMBERS. A fix
        would be having Wrike to generate dash numbers for sub-tasks, e.g. task
        number is 1234567899; then by default sub-tasks just get a dash number:
        1234567899-1, 1234567899-2, etc.
      </p>
      <div className="flex items-center justify-between">
        <button className="flex items-center text-gray-600 mt-4">
          <FaHeart className="text-[20px] mr-2" />
          <span className="text-[15px] font-semibold">2</span>
        </button>
        <div className="flex items-center gap-5">
          <FaFacebookF className="text-[18px] cursor-pointer" />
          <FaLinkedinIn className="text-[18px] cursor-pointer" />
          <FaXTwitter className="text-[18px] cursor-pointer" />
        </div>
      </div>

      <div className="bg-[#e7e9e8] w-full h-[1px] mt-4"></div>

      {true && (
        <div className="mt-4 space-y-4">
          <h3 className="font-semibold">2 Comments</h3>
          {[1, 2, 3].map((comment) => (
            <Comment key={comment} {...comment} />
          ))}
        </div>
      )}
    </div>
  );
};

const Comment = () => {
  return (
    <div className="bg-gray-100 p-3 rounded-md shadow">
      <div className="flex items-center space-x-2">
        <img
          src="/shared/testimonials__1.jpg"
          alt="janet andrews"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="font-medium">janet andrews</p>
          <p className="text-xs text-gray-500">January 23, 2024 21:42</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-normal text-[#63716c]">
        Sorry for the unproofed comment above: One of the biggest challenges of
        Wrike is finding/coordinating tasks that relate to the same project but
        ALL HAVE DIFFERENT TICKET NUMBERS. A fix would be having Wrike generate
        dash numbers for sub-tasks, e.g. task number is 1234567899; then by
        default sub-tasks just get a dash number: 1234567899-1, 1234567899-2,
        etc.
      </p>
    </div>
  );
};

const SpecificPost = () => {
  return (
    <div className="w-[80%] py-20 mx-auto font-poppins">
      <Post />
    </div>
  );
};

export default SpecificPost;
