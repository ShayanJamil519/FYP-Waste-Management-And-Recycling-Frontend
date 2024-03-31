"use client";
import { topicCardsData } from "@/app/data";
import React from "react";
import { useRouter } from "next/navigation";

const TopicCard = ({ category, title, authorName, authorImage, timestamp }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/forum/1")}
      className=" bg-[#fff] cursor-pointer font-poppins rounded p-6 max-w-sm mx-auto transition duration-300 ease-in-out transform  hover:shadow-lg"
    >
      <p className="text-xs uppercase text-gray-500 mb-2">{category}</p>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div className="flex items-center mt-3">
        <img
          src={authorImage}
          alt={authorName}
          className="w-9 h-9 rounded-full mr-2"
        />
        <div className="">
          <p className="font-medium">{authorName}</p>
          <p className="text-[10px] -mt-1 text-gray-500">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Topics = () => {
  return (
    <div className="w-full pt-24 pb-16 px-10 font-poppins bg-[#f7f9f8]">
      <h6 className="text-center font-semibold text-[#f29620]">
        New to the Community?
      </h6>
      <h1 className="font-paralucent text-4xl mt-1 mb-3 text-center text-[#182822] leading-normal">
        Browse community topics
      </h1>
      <div className="py-12 w-full">
        <div className="flex flex-wrap  justify-center items-center">
          {topicCardsData.map((topic, index) => (
            <div key={index} className="px-4 mb-8 w-full md:w-1/3">
              <TopicCard {...topic} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
