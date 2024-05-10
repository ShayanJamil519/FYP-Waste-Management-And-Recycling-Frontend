"use client";
import Pagination from "../Pagination";
import usePagination from "@/utils/usePagination";
import IncentivesContractInteraction from "@/utils/incentivesContractIntegration";
import { useState } from "react";
import {
  useGetSubdivisionsAndUserCounts,
  useGetSubdivisionComplaints,
  useGetPredictData,
} from "../../../hooks/incentives";
import DataLoader from "@/components/Shared/DataLoader";
import UploadReportButton from "@/components/Shared/UploadReportButton";
import { useStateContext } from "@/app/StateContext";

import { useEffect } from "react";

const IncentivesTable = () => {
  const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
// console.log(currentMonth); 
  const district = "south";
  const [data, setData] = useState({});
  // https://cheerful-eel-garment.cyclic.app


  const { mutate: addMutate } = useGetPredictData(JSON.stringify(data));
  
  const [openReviewIncentiveModal, setOpenReviewIncentiveModal] =
    useState(false);
  const paginate = usePagination();

  // const {data:prediction, refetch} = useGetPredictData(data);
  const { data:data1, isLoading, isError } =
    useGetSubdivisionsAndUserCounts(district);
  const { data:data2 } = useGetSubdivisionComplaints(district);
  console.log("DATA22222222222222222")
  console.log(data2)

  const { currentPage, totalPages, visibleItems, goToPage } = paginate(
    data1
  );
  const handleButtonClick = async (product) => {

    console.log("product")
    console.log(product)
    const findSubdivisionData = (data, subdivision) => {
      return data[subdivision];  
    };
    
    const subdivisionData = findSubdivisionData(data2, product.subdivision);
    
    if (subdivisionData) {
      console.log(`Data for ${product.subdivision}:`, subdivisionData);
    } else {
      console.log(`${product.subdivision} not found`);
    }
    try {
      const {
        avgRecyclablePercentage,
        avgPlasticPercentage,
        avgGlassPercentage,
        avgMetalloids,
        subdivision
      } = product;
      
      const {
        total: subdivisionTotal,
        valid: subdivisionValid
      } = subdivisionData;
      
      // Now, you can use these variables to assign values to your target variables
      const recyclablePercentage = avgRecyclablePercentage;
      const plasticPercentage = avgPlasticPercentage;
      const glassPercentage = avgGlassPercentage;
      const Metalloids = avgMetalloids;
      const complaints = subdivisionTotal;
      const validcomplaints = subdivisionValid;
      setData({recyclablePercentage,plasticPercentage,glassPercentage,Metalloids,complaints,validcomplaints})

    addMutate(
      {},
      {
        onSuccess: async (response) => {
          console.log(response.data)
          await IncentivesContractInteraction.CalculateIncentives(
            subdivision,
            response.data,
            currentMonth
          );
          console.log("chandioooooooooooo")
                    
        },
        onError: (response) => {
          console.error("An error occurred:");
          console.log(response);
          console.log(response.response.data.message);
        },
      }
    );
      console.log("ATAD")
      console.log(data)
      // const {data:prediction, refetch} = useGetPredictData(data);
      // const {data:prediction} = useGetPredictData(data);
      // refetch();
      // Handle success, e.g., show a success message or update state
    } catch (error) {
      console.log("ERROR")
      console.log(error)
    }
  };

  // The rest of your component code goes here
  // recyclablePercentage, plasticPercentage, glassPercentage, Metalloids, complaints, validcomplaints
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
                  {product.userCount}
                </p>
              </div>
              <div className=" flex items-center justify-center col-span-2">
                <p className="text-sm text-black dark:text-white ">
                  {product.tokens}
                </p>
              </div>

              <button
                className="px-3 py-2 col-span-2 w-fit  text-[16px] text-[#fff] bg-[#296d8d] rounded-md"
                onClick={() => handleButtonClick(product)}
              >
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
