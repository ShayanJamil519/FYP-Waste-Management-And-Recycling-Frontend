"use client";
import { useGetComplaintsInDistrict } from "@/hooks/complain-hook";
import usePagination from "@/utils/usePagination";
import React from "react";
import DataLoader from "../Shared/DataLoader";
import Pagination from "../Dashboard/Pagination";
import Link from "next/link";

const SpecificRecyclingPoint = ({ district }) => {
  const decodedDistrict = decodeURIComponent(district);

  const paginate = usePagination();

  const { data, isLoading, isError } =
    useGetComplaintsInDistrict(decodedDistrict);

  const { currentPage, totalPages, visibleItems, goToPage } = paginate(
    data && data?.complaints
  );

  if (isLoading) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <DataLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        Error loading complaints
      </div>
    );
  }

  if (visibleItems?.length === 0) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        No recycling points available for {decodedDistrict} district.
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-10 pb-20 bg-[#f7f9f8]">
      <h6 className="text-center font-bold text-[#f29620]">
        Safe And Trusted Waste Collection Service
      </h6>
      <h1 className="font-paralucent text-[27px] md:text-3xl lg:text-4xl mt-3 mb-5 lg:w-2/4 mx-auto text-center text-[#182822] leading-normal">
        Recycling Points in {decodedDistrict} district
      </h1>

      <div className="w-[90%] md:w-[80%] mx-auto overflow-x-auto lg:overflow-hidden">
        <div className="rounded-sm border border-stroke bg-white shadow-default   font-poppins ">
          <div className="py-4 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              koi bhi heading daaldai relevant
            </h4>
            <Link
              href="#"
              className="bg-[#f29620] text-[#fff] py-2 px-3 rounded-md text-sm"
            >
              View Blockchain Data
            </Link>
          </div>

          <div className="grid grid-cols-7 border-t border-stroke py-4 px-4  sm:grid-cols-8 md:px-6 2xl:px-7">
            <div className="col-span-1 flex items-center">
              <p className="font-medium">Image</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-medium">District</p>
            </div>
            <div className=" hidden items-center sm:flex">
              <p className="font-medium">Area</p>
            </div>
            <div className=" flex items-center col-span-2">
              <p className="font-medium">Description</p>
            </div>
            <div className=" flex items-center">
              <p className="font-medium">Response</p>
            </div>
            <div className=" flex items-center">
              <p className="font-medium">Date</p>
            </div>
            <div className=" flex items-center">
              <p className="font-medium">Actions</p>
            </div>
          </div>

          {/* Table Body */}
          <div className="h-auto overflow-auto">
            {visibleItems &&
              visibleItems.map((item, key) => (
                <div
                  key={key}
                  className=" grid grid-cols-7 border-t border-stroke py-2 px-4  sm:grid-cols-8 md:px-6 2xl:px-7"
                >
                  <div className="col-span-1 flex items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className=" w-20 h-12 rounded-md">
                        {/* <img
                        src={item?.image?.url}
                        alt="item"
                        className="w-full h-full rounded-md"
                      /> */}
                        image
                      </div>
                    </div>
                  </div>
                  <div className="hidden col-span- items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">
                      district
                    </p>
                  </div>
                  <div className="hidden items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">area</p>
                  </div>
                  <div className=" flex items-center col-span-2">
                    <p className="text-sm text-black dark:text-white ">
                      description
                    </p>
                  </div>
                  <div className=" flex items-center">
                    <p className="text-sm text-black dark:text-white">
                      response
                    </p>
                  </div>
                  <div className=" flex items-center">
                    <p className="text-sm text-meta-3">date hai</p>
                  </div>
                  <div className=" flex gap-3 justify-start items-center text-[20px]">
                    icon hoga
                  </div>
                </div>
              ))}
          </div>
        </div>

        {visibleItems?.length > 5 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={goToPage}
          />
        )}
      </div>
    </div>
  );
};

export default SpecificRecyclingPoint;
