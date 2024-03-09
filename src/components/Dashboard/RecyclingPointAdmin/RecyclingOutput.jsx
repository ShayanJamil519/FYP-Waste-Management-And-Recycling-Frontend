import Input from "@/components/CC/Input";
import TextArea from "@/components/CC/TextArea";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useOutputEntry } from "../../../hooks/recyclePointEntries";
import { useStateContext } from "@/app/StateContext";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaUpload } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const RecyclingOutput = () => {
  const router = useRouter();
  const { user } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    inputEntryId: "",
    recyclablePercentage: "",
    plasticPercentage: "",
    glassPercentage: "",
    metalloidsPercentage: "",
    marketValue: "",
    image: "",
  });

  const { mutate: addMutate } = useOutputEntry(JSON.stringify(data));

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "image") {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setData({ ...data, [name]: reader.result });
  //       }
  //     };

  //     reader.readAsDataURL(event.target.files[0]);
  //   } else {
  //     setData({ ...data, [name]: value });
  //   }
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log("handleInput");
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    addMutate(
      {},
      {
        onSuccess: (response) => {
          toast.success(response?.data?.message);
          router.push("/");
          setIsLoading(false);
        },
        onError: (response) => {
          console.error("An error occurred:");
          console.log(response);
          toast.error(response.message);
          setIsLoading(false);
        },
      }
    );
  };

  const handleAvatarChange = (event) => {
    console.log("handleImage");
    const { name, value } = event.target;
    if (name === "image") {
      const reader = new FileReader();

      reader.onload = () => {
        console.log("handleImage22");
        if (reader.readyState === 2) {
          setData({ ...data, [name]: reader.result });
          setImage(reader.result);
        }
      };

      reader.readAsDataURL(event.target.files[0]);
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const removeAvatar = () => {
    setImage(null);
    // Update userData state if necessary
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
        <div className="my-3">
          {image ? (
            <div className="">
              <div className="w-24 h-24 mx-auto relative">
                <img
                  src={image}
                  alt="Image"
                  className="rounded-full w-full h-full  "
                />
                <button
                  onClick={removeAvatar}
                  className="absolute  top-0 right-0 p-[5px] bg-gray-200 rounded-full"
                >
                  <RxCross1 className="text-[#000] text-[14px] " />
                </button>
              </div>
            </div>
          ) : (
            <label htmlFor="avatar-upload" className="cursor-pointer">
              <div className="w-full h-32 bg-gray-200 rounded-md flex flex-col items-center  justify-center text-gray-700">
                <FaUpload className="text-2xl" />
                <p>Upload your image</p>
                <p className="text-xs mt-2">Click to browse your image here</p>
              </div>
            </label>
          )}
          <input
            id="avatar-upload"
            name="image"
            type="file"
            accept="image/*"
            required
            onChange={handleAvatarChange}
            className="hidden"
          />
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
        <div className="grid place-items-center mt-6">
          {isLoading ? (
            <FaSpinner className="animate-spin" /> // Show spinner if isLoading is true
          ) : (
            <button
              type="submit"
              className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
            >
              Send Output
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
          )}
        </div>
      </form>
    </div>
  );
};

export default RecyclingOutput;
