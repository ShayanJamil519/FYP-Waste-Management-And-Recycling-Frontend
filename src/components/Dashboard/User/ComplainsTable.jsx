import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from "../Pagination";
import usePagination from "@/utils/usePagination";
import { useState } from "react";
import EditComplainModal from "./EditComplainModal";

const productData = [
  {
    image: "/home/contact__avatar.jpg",
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: "/home/contact__avatar.jpg",
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: "/home/contact__avatar.jpg",
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    image: "/home/contact__avatar.jpg",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
  {
    image: "/home/contact__avatar.jpg",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
  {
    image: "/home/contact__avatar.jpg",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
  {
    image: "/home/contact__avatar.jpg",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
  {
    image: "/home/contact__avatar.jpg",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
  {
    image: "/home/contact__avatar.jpg",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
  {
    image: "/home/contact__avatar.jpg",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
  {
    image: "/home/contact__avatar.jpg",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
  {
    image: "/home/contact__avatar.jpg",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
];

const ComplainsTable = () => {
  const [openEditComplainModal, setOpenEditComplainModal] = useState(false);
  const paginate = usePagination();

  const { currentPage, totalPages, visibleItems, goToPage } =
    paginate(productData);

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
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Product Name</p>
          </div>
          <div className=" hidden items-center sm:flex">
            <p className="font-medium">Category</p>
          </div>
          <div className=" flex items-center">
            <p className="font-medium">Price</p>
          </div>
          <div className=" flex items-center">
            <p className="font-medium">Sold</p>
          </div>
          <div className=" flex items-center">
            <p className="font-medium">Profit</p>
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
              <div className="col-span-3 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className=" w-15 rounded-md">
                    <img src={product.image} alt="Product" />
                  </div>
                  <p className="text-sm text-black dark:text-white">
                    {product.name}
                  </p>
                </div>
              </div>
              <div className="hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {product.category}
                </p>
              </div>
              <div className=" flex items-center">
                <p className="text-sm text-black dark:text-white">
                  ${product.price}
                </p>
              </div>
              <div className=" flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.sold}
                </p>
              </div>
              <div className=" flex items-center">
                <p className="text-sm text-meta-3">${product.profit}</p>
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
