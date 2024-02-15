import Input from "@/components/CC/Input";
import TextArea from "@/components/CC/TextArea";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useOutputEntry } from "../../../hooks/recyclePointEntries";
import { useStateContext } from "@/app/StateContext";

const RecyclingOutput = () => {
  const router = useRouter();
  
  const { user } = useStateContext();

  const [data, setData] = useState({
    inputEntryId: "",
    recyclablePercentage: "",
    plasticPercentage: "",
    glassPercentage: "",
    metalloidsPercentage: "",
    marketValue: "",
  });

  const { mutate: addMutate } = useOutputEntry(JSON.stringify(data));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "image") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setData({ ...data, [name]: reader.result });
        }
      };

      reader.readAsDataURL(event.target.files[0]);
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    console.log(data.inputEntryId)
    event.preventDefault();
    addMutate(
      {},
      {
        onSuccess: (response) => {
          toast.success(response?.data?.message);
          router.push("/");
        },
        onError: (response) => {
          console.error("An error occurred:");
          console.log(response.response.data.message);
          toast.error(response.response.data.message);
        },
      }
    );
  };
  return (
    <div className="p-4 sm:p-5 md:p-10 bg-[#fff] rounded-md  font-poppins">
      <h1 className="font-bold text-3xl">Recycling Output</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        Please complete the form below, to request a quote, and we’ll be in
        touch. Or you can call us and our specialists will provide help!
      </p>
      <form className="w-full mt-10 " onSubmit={handleSubmit}>
        {/* File Upload */}
        <div
          id="FileUpload"
          className="relative mb-5 block w-full text-[#64748b] cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4  sm:py-7 bg-[#eff4fb]"
        >
          <Input
            type="file"
            // accept="image/*"
            label="image"
            name="image"
            onChange={handleInputChange}
            className="absolute inset-0 z-10 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
          />
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border bg-[#fff] ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                  fill="#3C50E0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                  fill="#3C50E0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                  fill="#3C50E0"
                />
              </svg>
            </span>
            <p>
              <span className="text-[#476ee4]">Click to upload</span> or drag
              and drop
            </p>
            <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-5">
          <Input
            label="inputEntryId"
            type="text"
            placeholder="Please write you details"
            name="inputEntryId"
            onChange={handleInputChange}
            value={data.inputEntryId}
          />
          <Input
            label="recyclablePercentage"
            type="text"
            placeholder="Please write you details"
            name="recyclablePercentage"
            onChange={handleInputChange}
            value={data.recyclablePercentage}
          />
          <Input
            label="plasticPercentage"
            type="text"
            placeholder="Please write you details"
            name="plasticPercentage"
            onChange={handleInputChange}
            value={data.plasticPercentage}
          />
          <Input
            label="glassPercentage"
            type="text"
            placeholder="Please write you details"
            name="glassPercentage"
            onChange={handleInputChange}
            value={data.glassPercentage}
          />
          <Input
            label="metalloidsPercentage"
            type="text"
            placeholder="Please write you details"
            name="metalloidsPercentage"
            onChange={handleInputChange}
            value={data.metalloidsPercentage}
          />
          <Input
            label="marketValue"
            type="text"
            placeholder="Please write you details"
            name="marketValue"
            onChange={handleInputChange}
            value={data.marketValue}
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
        >
          Send Tokens
          <span className="p-0 rounded-full bg-[#fff]  transition duration-500 text-[#20332c] ">
            <IoIosArrowRoundForward className="text-[27px] font-bold" />
          </span>{" "}
          <style jsx>{`
            button:hover span {
              background-color: #fff;
              color: #257830;
            }
          `}</style>
        </button>
      </form>
    </div>
  );
};

export default RecyclingOutput;
