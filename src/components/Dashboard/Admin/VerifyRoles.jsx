"use client";

import Input from "@/components/CC/Input";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import WasteManagementContractInteraction from "@/utils/wasteMangementContractInteraction";

import { FaSpinner } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const rolesData = [
  {
    value: 0,
    text: "DistrictAdmin",
  },
  {
    value: 1,
    text: "RecyclableAdmin",
  },
  {
    value: 2,
    text: "LandfillAdmin",
  },
  {
    value: 3,
    text: "User",
  },
  {
    value: 4,
    text: "None",
  },
];

const VerifyRoles = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const roleValue = await WasteManagementContractInteraction.GetUserRole(
        data?.address
      );

      let roleText;

      switch (roleValue) {
        case 0:
          roleText = "DistrictAdmin";
          break;
        case 1:
          roleText = "RecyclableAdmin";
          break;
        case 2:
          roleText = "LandfillAdmin";
          break;
        case 3:
          roleText = "User";
          break;
        case 4:
          roleText = "None";
          break;
        default:
          roleText = "Unknown";
      }

      toast.success(`User role is: ${roleText}`);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className=" mt-5 p-4 sm:p-5 md:p-10 bg-[#fff] rounded-md  font-poppins">
      <h1 className="font-bold text-3xl">Verify User Roles</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        Enter the address of the user below to verify their assigned role in the
        waste management system.
      </p>
      <form className="w-full mt-10 " onSubmit={handleSubmit}>
        <Input
          label="Address"
          type="text"
          placeholder="Please paste your address"
          name="address"
          onChange={handleInputChange}
          require={true}
        />

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
              Verify Role
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

export default VerifyRoles;
