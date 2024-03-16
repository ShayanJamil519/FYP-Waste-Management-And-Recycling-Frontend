"use client";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from "../Pagination";
import usePagination from "@/utils/usePagination";
import { useState } from "react";
import RecyclingInputEntryModal from "./RecyclingPointModal";
import RecyclingPointModal from "./RecyclingPointModal";
import { useGetAllRecyclingPoints } from "../../../hooks/recyclePointEntries";
import DataLoader from "@/components/Shared/DataLoader";
const productData = [
  {
    district: "",
    area: "",
    description: "",
    resonse: "",
    date: "",
  },
];

const AllRecyclingPointsTable = () => {
  const [tableData, setTableData] = useState(productData);
  const [openRecyclingPointModal, setOpenRecyclingPointModal] = useState(false);

  const paginate = usePagination();

  const { data, isLoading, isError } = useGetAllRecyclingPoints();
  console.log(data);
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
    data && data?.recyclingPoints
  );

  return (
    <div>
      {/* Table */}
      <div className="rounded-sm border border-stroke bg-white shadow-default  font-poppins ">
        <div className="py-4 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Top Products
          </h4>
        </div>

        <div className="grid grid-cols-7 border-t border-stroke py-4 px-4  sm:grid-cols-8 md:px-6 2xl:px-7">
          <div className="col-span-2 flex items-center">
            <p className="font-medium">District</p>
          </div>
          <div className=" hidden items-center sm:flex">
            <p className="font-medium">Name</p>
          </div>
          <div className=" flex items-center col-span-2">
            <p className="font-medium">ID</p>
          </div>
          <div className=" flex items-center">
            <p className="font-medium">Image</p>
          </div>
          <div className=" flex items-center">
            <p className="font-medium">Amount</p>
          </div>
          <div className=" flex items-center">
            <p className="font-medium">Actions</p>
          </div>
        </div>

        {/* Table Body */}
        <div className="h-[55vh] overflow-auto">
          {visibleItems.map((product, key) => (
            <div
              className=" grid grid-cols-7 border-t border-stroke py-6 px-4  sm:grid-cols-8 md:px-6 2xl:px-7"
              key={key}
            >
              <div className="col-span-2 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <p className="text-sm text-black dark:text-white">
                    {product.district}
                  </p>
                </div>
              </div>
              <div className="hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {product.name}
                </p>
              </div>
              <div className=" flex items-center col-span-2">
                <p className="text-sm text-black dark:text-white ">
                  {product._id}
                </p>
              </div>
              <div className="col-span-2 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className=" w-20 h-20 rounded-md">
                    <img src={product?.image?.url} alt="item" />
                  </div>
                </div>
              </div>
              {/* <div className=" flex items-center">
                <p className="text-sm text-meta-3">{product.date}</p>
              </div> */}
              <div className=" flex gap-3 justify-start items-center text-[20px]">
                <MdEdit
                  className="cursor-pointer"
                  onClick={() => setOpenRecyclingPointModal(true)}
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

      {openRecyclingPointModal && (
        <RecyclingPointModal
          setOpenRecyclingPointModal={setOpenRecyclingPointModal}
        />
      )}
    </div>
  );
};

export default AllRecyclingPointsTable;
