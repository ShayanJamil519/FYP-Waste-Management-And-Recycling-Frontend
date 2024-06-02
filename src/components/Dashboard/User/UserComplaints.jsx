"use client";

import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from "../Pagination";
import usePagination from "@/utils/usePagination";
import { useGetComplaintsInDistrict } from "../../../hooks/complain-hook";
import DataLoader from "@/components/Shared/DataLoader";
import ViewUserComplaintsModal from "./ViewUserComplaintsModal";

const UserComplaints = () => {
  const [viewUserComplainModal, setViewUserComplainModal] = useState(false);
  const paginate = usePagination();

  const district = "south";
  const { data, isLoading, isError } = useGetComplaintsInDistrict(district);

  // Check loading and error states
  if (isLoading) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <DataLoader />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading complaints</div>;
  }

  const { currentPage, totalPages, visibleItems, goToPage } = paginate(
    data && data?.complaints
  );

  return (
    <div>
      {/* Table */}
      <div className="rounded-sm border border-stroke bg-white shadow-default  font-poppins ">
        <div className="py-4 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Top items
          </h4>
        </div>

        <div className="grid grid-cols-7 border-t border-stroke py-4 px-4  sm:grid-cols-8 md:px-6 2xl:px-7">
          <div className="col-span-2 flex items-center">
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
        <div className="h-[55vh] overflow-auto">
          {visibleItems &&
            visibleItems.map((item, key) => (
              <div
                className=" grid grid-cols-7 border-t border-stroke py-2 px-4  sm:grid-cols-8 md:px-6 2xl:px-7"
                key={key}
              >
                <div className="col-span-2 flex items-center">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className=" w-20 h-20 rounded-md">
                      <img src={item?.image?.url} alt="item" />
                    </div>
                    <p className="text-sm text-black dark:text-white">
                      {item?.district}
                    </p>
                  </div>
                </div>
                <div className="hidden items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">
                    {item?.area}
                  </p>
                </div>
                <div className=" flex items-center col-span-2">
                  <p className="text-sm text-black dark:text-white ">
                    {item?.description}
                  </p>
                </div>
                <div className=" flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item?.response.length > 0 ? (
                      item?.response.map((_i, index) => (
                        <span key={index}>{_i?.date}</span>
                      ))
                    ) : (
                      <span>No Response Found</span>
                    )}
                  </p>
                </div>
                <div className=" flex items-center">
                  <p className="text-sm text-meta-3">item.date</p>
                </div>
                <div className=" flex gap-3 justify-start items-center text-[20px]">
                  <MdEdit
                    className="cursor-pointer"
                    onClick={() => setViewUserComplainModal(true)}
                  />
                  <MdDelete className="cursor-pointer" />
                </div>
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

      {/* Edit Modal */}

      {viewUserComplainModal && (
        <ViewUserComplaintsModal
          setViewUserComplainModal={setViewUserComplainModal}
        />
      )}
    </div>
  );
};

export default UserComplaints;
