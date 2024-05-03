"use client";
import Input from "../../CC/Input";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

const ClaimIncentivesForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className=" p-10 font-poppins bg-[#fff] ">
      <h1 className="font-bold text-2xl">Make a request</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        Please complete the form below, to request a quote, and we’ll be in
        touch. Or you can call us and our specialists will provide help!
      </p>
      <form className="w-full mt-10 " onSubmit={() => console.log("Submit")}>
        <div className="grid grid-cols-1 gap-5">
          <Input
            name="userId"
            label="Enter Your ID"
            type="text"
            placeholder="Please write you details"
          />
        </div>

        <div className="grid place-items-center mt-6">
              {isLoading ? (
                <button
                  type="submit"
                  className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out outline-none border-0 px-7 py-5 rounded-sm"
                  disabled
                >
                  <FaSpinner className="animate-spin mr-2 text-white" />
                  <span className={"text-white"}>Loading...</span>
                </button>
              ) : (
                <button
                  type="submit"
                  // onClick={resetForm}
                  className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
                >
                  Submit
                  <span className="p-0 rounded-full bg-[#fff] transition duration-500 text-[#20332c]">
                    <IoIosArrowRoundForward className="text-[27px] font-bold" />
                  </span>{" "}
                  <style jsx>{`
                    button:hover span {
                      background-color: #fff;
                      color: #257830;
                    }
                  `}</style>
                </button>
              )}
            </div>
      </form>
    </div>
  );
};

export default ClaimIncentivesForm;
