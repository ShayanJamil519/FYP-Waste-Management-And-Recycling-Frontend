"use client";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from "../Pagination";
import usePagination from "@/utils/usePagination";
import { useEffect, useState } from "react";
import EditComplainModal from "./EditComplainModal";
import {useGetComplaintsInDistrict} from "../../../hooks/complain-hook";
import { data } from "autoprefixer";
// const productData = [
//   {
//     image: "/home/waste.jpeg",
//     district: "South",
//     area: "Malir",
//     description: "In Front of my house",
//     resonse: "Processing",
//     date: "12/20/2023",
//   },
//   {
//     image: "/home/garbage.jpg",
//     district: "North",
//     area: "Nazimabad",
//     description: "On my street",
//     resonse: "Rejected",
//     date: "12/20/2023",
//   },
//   {
//     image: "/home/waste.jpeg",
//     district: "East",
//     area: "Korangi",
//     description: "In Front of my house",
//     resonse: "Approved",
//     date: "12/20/2023",
//   },
//   {
//     image: "/home/garbage.jpg",
//     district: "South",
//     area: "Malir",
//     description: "On my street",
//     resonse: "Processing",
//     date: "12/20/2023",
//   },
//   {
//     image: "/home/waste.jpeg",
//     district: "East",
//     area: "Korangi",
//     description: "In Front of my house",
//     resonse: "Approved",
//     date: "12/20/2023",
//   },
//   {
//     image: "/home/garbage.jpg",
//     district: "South",
//     area: "Malir",
//     description: "On my street",
//     resonse: "Processing",
//     date: "12/20/2023",
//   },
//   {
//     image: "/home/waste.jpeg",
//     district: "East",
//     area: "Korangi",
//     description: "In Front of my house",
//     resonse: "Approved",
//     date: "12/20/2023",
//   },
//   {
//     image: "/home/garbage.jpg",
//     district: "South",
//     area: "Malir",
//     description: "In Front of my house",
//     resonse: "Processing",
//     date: "12/20/2023",
//   },
//   {
//     image: "/home/waste.jpeg",
//     district: "North",
//     area: "Nazimabad",
//     description: "On my street",
//     resonse: "Rejected",
//     date: "12/20/2023",
//   },
//   {
//     image: "/home/garbage.jpg",
//     district: "East",
//     area: "Korangi",
//     description: "In Front of my house",
//     resonse: "Approved",
//     date: "12/20/2023",
//   },
//   {
//     image: "/home/waste.jpeg",
//     district: "South",
//     area: "Malir",
//     description: "In Front of my house",
//     resonse: "Processing",
//     date: "12/20/2023",
//   },
//   {
//     image: "/home/garbage.jpg",
//     district: "East",
//     area: "Korangi",
//     description: "On my street",
//     resonse: "Approved",
//     date: "12/20/2023",
//   },
// ];

const ComplainsTable = () => {
  const [openEditComplainModal, setOpenEditComplainModal] = useState(false);
  const paginate = usePagination();
  const district = 'south'; // Set your district here
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("hello")
    const fetchData = async () => {
      try {
        console.log("helloJee")
        const data = useGetComplaintsInDistrict(district);
        setComplaints(data);
        console.log(data)

      } catch (error) {
        setError(error);
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [district]);


  const { currentPage, totalPages, visibleItems, goToPage } =
    paginate(data);


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
          {visibleItems.map((product, key) => (
            <div
              className=" grid grid-cols-7 border-t border-stroke py-2 px-4  sm:grid-cols-8 md:px-6 2xl:px-7"
              key={key}
            >
              <div className="col-span-2 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className=" w-20 h-20 rounded-md">
                    <img src={product.image} alt="Product" />
                  </div>
                  <p className="text-sm text-black dark:text-white">
                    {product.district}
                  </p>
                </div>
              </div>
              <div className="hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {product.area}
                </p>
              </div>
              <div className=" flex items-center col-span-2">
                <p className="text-sm text-black dark:text-white ">
                  {product.description}
                </p>
              </div>
              <div className=" flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.resonse}
                </p>
              </div>
              <div className=" flex items-center">
                <p className="text-sm text-meta-3">{product.date}</p>
              </div>
              <div className=" flex gap-3 justify-start items-center text-[20px]">
                <MdEdit
                  className="cursor-pointer"
                  onClick={() => setOpenEditComplainModal(true)}
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

      {openEditComplainModal && (
        <EditComplainModal
          setOpenEditComplainModal={setOpenEditComplainModal}
        />
      )}
    </div>
  );
};

export default ComplainsTable;
