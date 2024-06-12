// "use client";
// import React from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";

// const Landfills = () => {
//   return (
//     <div className="w-full bg-[#f7f9f8] min-h-screen pt-16 md:pt-32 pb-10 md:pb-20 px-3 md:px-10">
//       <h6 className="text-center font-bold text-[#f29620]">
//         Safe And Trusted Waste Collection Service
//       </h6>
//       <h1 className="font-paralucent text-[27px] md:text-3xl lg:text-4xl mt-5 mb-16 lg:w-2/4 mx-auto text-left lg:text-center text-[#182822] leading-normal">
//         Devoted & Trustworthy Waste Collection Services
//       </h1>
//       <div className="overflow-x-auto lg:overflow-hidden w-full flex lg:flex-wrap  justify-start lg:justify-between items-start lg:gap-x-6 lg:gap-y-20">
//         {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 lg:shrink-unset  lg:w-[28%] w-[85%]  mr-6 lg:mr-unset"
//           >
//             <img
//               src="/home/services1.jpg"
//               alt="logo"
//               className="w-full sm:h-fit h-[300px] rounded-lg object-cover"
//             />
//             <div className="p-4 md:p-7 relative rounded-lg w-[90%] -mt-28 bg-[#fff] font-poppins transition duration-500 ease-in-out shadow-sm hover:shadow-lg shadow-[#ddd9d9]">
//               <h1 className="font-paralucent text-xl text-[#182822] hover:text-[#f29620] transition duration-500 ease-in-out cursor-pointer">
//                 Real-Time Waste Tracking
//               </h1>
//               <p className="text-[#62706b] text-[13px] sm:text-sm my-3 sm:my-5">
//                 Our platform offers a groundbreaking service by providing users
//                 with real-time insights into the entire waste management
//                 process. From generation to recycling and disposal, users can
//                 track and verify the journey of their waste.
//               </p>
//               <button className="flex justify-center items-center gap-3 transition duration-500 ease-in-out hover:bg-[#257830] text-[#20332c] hover:text-[#fff] outline-none border-2 hover:border-[#257830] border-[#20332c] px-8 py-4 rounded-sm">
//                 Explore More
//                 <span className="p-0 rounded-full bg-[#20332c] hover:bg-[#fff]  transition duration-500 text-[#fff] hover:text-[#257830] ">
//                   <IoIosArrowRoundForward className="text-[27px] font-bold" />
//                 </span>{" "}
//                 <style jsx>{`
//                   button:hover span {
//                     background-color: #fff;
//                     color: #257830;
//                   }
//                 `}</style>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Landfills;
"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useGetAllLandfillPoints } from "../../hooks/user-hook"; // Adjust the path as needed

const Landfills = () => {
  const { data, isLoading, error } = useGetAllLandfillPoints();
  console.log(data)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full bg-[#f7f9f8] min-h-screen pt-16 md:pt-32 pb-10 md:pb-20 px-3 md:px-10">
      <h6 className="text-center font-bold text-[#f29620]">
        Safe And Trusted Waste Collection Service
      </h6>
      <h1 className="font-paralucent text-[27px] md:text-3xl lg:text-4xl mt-5 mb-16 lg:w-2/4 mx-auto text-left lg:text-center text-[#182822] leading-normal">
        Devoted & Trustworthy Waste Collection Services
      </h1>
      <div className="overflow-x-auto lg:overflow-hidden w-full flex lg:flex-wrap justify-start lg:justify-between items-start lg:gap-x-6 lg:gap-y-20">
        {data.landfillPoints.map((point) => (
          <div
            key={point._id}
            className="flex-shrink-0 lg:shrink-unset lg:w-[28%] w-[85%] mr-6 lg:mr-unset"
          >
            <img
              src={point.image.url || "/default-image.jpg"}
              alt={point.name}
              className="w-full sm:h-fit h-[300px] rounded-lg object-cover"
            />
            <div className="p-4 md:p-7 relative rounded-lg w-[90%] -mt-28 bg-[#fff] font-poppins transition duration-500 ease-in-out shadow-sm hover:shadow-lg shadow-[#ddd9d9]">
              <h1 className="font-paralucent text-xl text-[#182822] hover:text-[#f29620] transition duration-500 ease-in-out cursor-pointer">
                {point.name}
              </h1>
              <p className="text-[#62706b] text-[13px] sm:text-sm my-3 sm:my-5">
                {point.district}
              </p>
              <button className="flex justify-center items-center gap-3 transition duration-500 ease-in-out hover:bg-[#257830] text-[#20332c] hover:text-[#fff] outline-none border-2 hover:border-[#257830] border-[#20332c] px-8 py-4 rounded-sm">
                Explore More
                <span className="p-0 rounded-full bg-[#20332c] hover:bg-[#fff] transition duration-500 text-[#fff] hover:text-[#257830] ">
                  <IoIosArrowRoundForward className="text-[27px] font-bold" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landfills;
