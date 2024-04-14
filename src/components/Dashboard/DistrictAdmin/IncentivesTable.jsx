"use client";
import Pagination from "../Pagination";
import usePagination from "@/utils/usePagination";
import { useState } from "react";

const productData = [
  {
    subdivision: "Nazimabad",
    totalUsers: 10,
    tokens: "10",
  },
  {
    subdivision: "Nazimabad",
    totalUsers: 10,
    tokens: "Not alloted yet",
  },
  {
    subdivision: "Nazimabad",
    totalUsers: 10,
    tokens: "10",
  },
  {
    subdivision: "Nazimabad",
    totalUsers: 10,
    tokens: "Not alloted yet",
  },
  {
    subdivision: "Nazimabad",
    totalUsers: 10,
    tokens: "10",
  },
];

const IncentivesTable = () => {
  const [openReviewIncentiveModal, setOpenReviewIncentiveModal] =
    useState(false);
  const paginate = usePagination();

  const { currentPage, totalPages, visibleItems, goToPage } =
    paginate(productData);

  return (
    <div>
      {/* Table */}
      <div className="rounded-sm border border-stroke bg-white shadow-default  font-poppins ">
        <div className="py-4 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Incentive Details For South District
          </h4>
        </div>

        <div className="grid grid-cols-7 border-t border-stroke py-4 px-4  sm:grid-cols-7 md:px-6 2xl:px-7">
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Subdivision</p>
          </div>
          <div className=" hidden items-center justify-center sm:flex">
            <p className="font-medium">Total Users</p>
          </div>
          <div className=" flex items-center justify-center col-span-2">
            <p className="font-medium">Tokens Alloted Per House</p>
          </div>
          <div className=" flex justify-center items-center">
            <p className="font-medium">Action</p>
          </div>
        </div>

        {/* Table Body */}
        <div className="h-[55vh] overflow-auto">
          {visibleItems.map((product, key) => (
            <div
              className=" grid grid-cols-7 border-t border-stroke py-6 px-4  sm:grid-cols-7 md:px-6 2xl:px-7"
              key={key}
            >
              <div className="col-span-2 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <p className="text-sm text-black dark:text-white">
                    {product.subdivision}
                  </p>
                </div>
              </div>
              <div className="hidden items-center justify-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {product.totalUsers}
                </p>
              </div>
              <div className=" flex items-center justify-center col-span-2">
                <p className="text-sm text-black dark:text-white ">
                  {product.tokens}
                </p>
              </div>

              <button className="px-3 py-2 col-span-2 w-fit  text-[16px] text-[#fff] bg-[#296d8d] rounded-md">
                Calculate Incentives
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={goToPage}
      />
    </div>
  );
};

export default IncentivesTable;
