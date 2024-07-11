"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const servicesData = [
  {
    heading: "Efficient Waste Collection",
    para: "Our platform ensures timely and efficient waste collection through advanced scheduling and route optimization. Users can easily schedule pickups, and our system guarantees prompt and reliable service.",
    img: "/home/services1.jpg",
  },
  {
    heading: "Intelligent Recycling",
    para: "Leverage our state-of-the-art technology for intelligent and recycling. Our system automates the process, ensuring maximum resource recovery and minimal environmental impact.",
    img: "/home/how__it__works1.jpg",
  },
  {
    heading: "Community Engagement",
    para: "Engage with your community and promote sustainable practices. Our platform facilitates community involvement through educational resources, interactive events, and real-time feedback.",
    img: "/home/hero__slider1.jpg",
  },
];

const Services = () => {
  const router = useRouter();
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f7f9f8 70%, #fff 30%)",
      }}
      className="w-full min-h-screen pt-16 md:pt-32 pb-10 md:pb-20 px-3 md:px-10"
    >
      <h6 className="text-center font-bold text-[#f29620]">
        Safe And Trusted Waste Collection{" "}
      </h6>
      <h1 className="font-paralucent text-[27px] md:text-3xl lg:text-4xl mt-5 mb-16 lg:w-2/4 mx-auto text-left lg:text-center text-[#182822] leading-normal">
        Devoted & Trustworthy Waste Collection
      </h1>
      <div className="overflow-x-auto  flex  justify-start lg:justify-between items-start w-full lg:gap-8">
        {servicesData.map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 lg:shrink  lg:w-1/3 w-[85%] mr-6 lg:mr-unset"
          >
            <img
              src={_.img}
              alt="logo"
              className="w-full sm:h-[300px] h-[300px] rounded-lg object-cover"
            />
            <div className="p-4 md:p-7 relative rounded-lg w-[90%] -mt-28 bg-[#fff] font-poppins transition duration-500 ease-in-out shadow-sm hover:shadow-lg shadow-[#ddd9d9]">
              <h1 className="font-paralucent text-xl text-[#182822] hover:text-[#f29620] transition duration-500 ease-in-out cursor-pointer">
                {_?.heading}
              </h1>
              <p className="text-[#62706b] text-[13px] sm:text-sm my-3 sm:my-5">
                {_?.para}
              </p>
              <button
                onClick={() => router.push("/about")}
                className="flex justify-center items-center gap-3 transition duration-500 ease-in-out hover:bg-[#257830] text-[#20332c] hover:text-[#fff] outline-none border-2 hover:border-[#257830] border-[#20332c] px-8 py-4 rounded-sm"
              >
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
