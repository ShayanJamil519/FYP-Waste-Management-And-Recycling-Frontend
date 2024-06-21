"use client";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from "../Pagination";
import usePagination from "@/utils/usePagination";
import { useState } from "react";
import LandfillEntryModal from "./LandfillEntryModal";
import {
  useGetAllLandfills,
  useDeleteLandfill,
} from "@/hooks/landfillEntries";
import DataLoader from "@/components/Shared/DataLoader";

const AllLandfillsTable = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [admin, setAdmin] = useState(null);
  const deleteLandfillMutation = useDeleteLandfill();
  const [openLandfillEntryModal, setOpenLandfillEntryModal] = useState(false);
  const paginate = usePagination();
  const { data, isLoading, isError } = useGetAllLandfills();
  console.log(data);

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      // Find the last space before maxLength
      let lastSpaceIndex = description.lastIndexOf(" ", maxLength);
      // Truncate the description and add ellipsis
      return description.substring(0, lastSpaceIndex) + "...";
    }
  };


  const handleDeleteLandfill = async (id) => {
    try {
      await deleteLandfillMutation.mutateAsync(id);
      // Handle success, e.g., show a success message or update state
    } catch (error) {
      // Handle error, e.g., display error message
    }
  };

  const handleEditLandfill = (id,admin) => {
    console.log("Itemmmmmmmmmmmmmm");
    console.log(visibleItems);
    // console.log(visibleItems);
    setOpenLandfillEntryModal(true);
    setSelectedId(id);
    setAdmin(admin);
    // You can use the complaintId here or pass it to the modal component
  };
  // Check loading and error states
  if (isLoading) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <DataLoader />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading Landfills</div>;
  }

  const { currentPage, totalPages, visibleItems, goToPage } = paginate(
    data && data?.landfillPoints
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

        <div className="grid grid-cols-6 border-t border-stroke py-4 px-4  sm:grid-cols-7 md:px-6 2xl:px-7">
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Image</p>
          </div>
          <div className=" hidden items-center sm:flex">
            <p className="font-medium">Name</p>
          </div>
          <div className=" flex items-center col-span-1">
            <p className="font-medium">District</p>
          </div>
          <div className=" flex items-center col-span-2">
            <p className="font-medium">Id</p>
          </div>
          {/* <div className=" flex items-center">
            <p className="font-medium">Amount</p>
          </div> */}
          <div className=" flex items-center">
            <p className="font-medium">Actions</p>
          </div>
        </div>

        {/* Table Body */}
        <div className="h-[55vh] overflow-auto">
          {visibleItems.map((product, key) => (
            
              <div
              className=" grid grid-cols-6 border-t border-stroke py-2 px-4  sm:grid-cols-7 md:px-6 2xl:px-7"
              key={key}
            >
              <div className="col-span-2 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className=" w-20 h-20 rounded-md">
                    <img src={product?.image?.url} alt="" />
                  </div>
                  {/* <p className="text-sm text-black dark:text-white">
                    {item?.district}
                  </p> */}
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <p className="text-sm text-black dark:text-white">
                    {product.name}
                  </p>
                </div>
              </div>
              <div className="hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {product.district}
                </p>
              </div>
              <div className=" flex items-center col-span-2">
                <p className="text-sm text-black dark:text-white ">
                  {truncateDescription(product._id,25)}
                </p>
              </div>
              <div className=" flex gap-3 justify-start items-center text-[20px]">
                <MdEdit
                  className="cursor-pointer"
                  onClick={() => handleEditLandfill(product._id,product.admin)}
                />
                <MdDelete className="cursor-pointer" onClick={() => handleDeleteLandfill(product._id)} />
              </div>
            </div>
          ))}
        </div>
        {/* <div className="h-[55vh] overflow-auto">
          {visibleItems.map((product, key) => (
            <div
              className=" grid grid-cols-6 border-t border-stroke py-6 px-4  sm:grid-cols-7 md:px-6 2xl:px-7"
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
                  {truncateDescription(product._id,12)}
                </p>
              </div>
              <div className=" flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.subDivision}
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
                <p className="text-sm text-meta-3">{product.email}</p>
              </div> */}
              {/* <div className=" flex gap-3 justify-start items-center text-[20px]">
                <MdEdit
                  className="cursor-pointer"
                  onClick={() => handleEditLandfill(product._id,product.admin)}
                />
                <MdDelete
                  className="cursor-pointer"
                   
                />
              </div>
            </div>
          ))}
        </div> */} 
      </div>
      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={goToPage}
      />

      {/* Edit Modal */}

      {openLandfillEntryModal && (
        <LandfillEntryModal
          setOpenLandfillEntryModal={setOpenLandfillEntryModal}
          id={selectedId}
          admin={admin}
        />
      )}
    </div>
  );
};

export default AllLandfillsTable;
