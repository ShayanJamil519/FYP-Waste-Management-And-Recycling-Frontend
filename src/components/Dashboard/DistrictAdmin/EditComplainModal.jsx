import React, { useState } from "react";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import Input from "@/components/CC/Input";
import TextArea from "@/components/CC/TextArea";
import ImageSlider from "../ImageSlider";
import { useAddResponseToComplaint } from "../../../hooks/complain-hook";
import { FaUpload } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import WrappedMapComponent from "./Map";
import { FaSpinner } from "react-icons/fa";

const Images = [
  "/home/hero__slider1.jpg",
  "/home/hero__slider1.jpg",
  "/home/hero__slider1.jpg",
  "/home/hero__slider1.jpg",
  "/home/hero__slider1.jpg",
  "/home/hero__slider1.jpg",
];


const EditComplainModal = ({ setOpenEditComplainModal, complaintId , latitude , longitude , imagee}) => {
  console.log(imagee)
  const router = useRouter();
  const [isLooading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState({

    comments: "",
    image: "",
  });
  const { addResponse, isLoading, isError, error } =
    useAddResponseToComplaint();

  const handleAvatarChange = (event) => {
    console.log("handleAvatar");
    const { name, value } = event.target;
    if (name === "image") {
      const reader = new FileReader();

      reader.onload = () => {
        console.log("handleAvatar22");
        if (reader.readyState === 2) {
          setInfo({ ...info, [name]: reader.result });
          setImage(reader.result);
        }
      };

      reader.readAsDataURL(event.target.files[0]);
    } else {
      setInfo({ ...info, [name]: value });
    }
  };

  const removeAvatar = () => {
    setImage(null);
    // Update userData state if necessary
  };

  const handleAddResponse = async (event) => {
    event.preventDefault();
    console.log("complaintttttttttID");
    console.log(complaintId);
    setIsLoading(true);
    console.log(info)
    try {
      await addResponse(complaintId, info);
      setIsLoading(false);
      setOpenEditComplainModal(false);
      // Optionally, you can add a redirect or any other logic here after successful response
    } catch (error) {
      setIsLoading(false);
      console.error("Error adding response:", error);
    }
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setInfo({ ...info, [name]: value });
  // };
  const handleInputChange = (event) => {
    if (event && event.target) {
      const { name, value } = event.target;
      setInfo({ ...info, [name]: value });
    }
  };

  return (
    <Modal onClose={() => setOpenEditComplainModal(false)}>
      <div className="h-[90vh] overflow-y-auto p-4 sm:p-5 md:p-10 bg-[#fff] rounded-md border-2 border-[#000] font-urbanist w-[97%] sm:w-[65%] md:w-[55%] lg:w-[80%] mx-auto">
        <h1 className="font-bold text-3xl">Add Response to a complain</h1>
        <p className="text-sm mt-3 leading-6 text-[#62706b]">
          Please complete the form below, to update a user about response on
          their complain
        </p>
        <form className="w-full mt-10" onSubmit={handleAddResponse}>
          <div className="my-3">
            {image ? (
              <div className="">
                <div className="w-24 h-24 mx-auto relative">
                  <img
                    src={image}
                    alt="Avatar"
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
                  <p>Upload image of the location</p>
                  <p className="text-xs mt-2">
                    Click to browse your image here
                  </p>
                </div>
              </label>
            )}
            <input
              id="avatar-upload"
              required
              name="image"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>

          

          <TextArea
            name="comments"
            value={info.comments}
            onChange={handleInputChange}
            placeholder="Enter your text here..."
            rows={6}
            label="Please write your details"
          />
          
        <div className="w-full h-32 bg-gray-200 rounded-md flex flex-col items-center justify-center text-gray-700">
          <img src={imagee} alt="Location" className="w-full h-full object-cover rounded-md" />
        </div>
      
          <WrappedMapComponent latitude={latitude} longitude={longitude} />

<div className="grid place-items-center mt-6">
          {isLooading ? (
            <FaSpinner className="animate-spin" /> // Show spinner if isLoading is true
          ) : (
            <button
              type="submit"
              className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
            >
              Submit
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
    </Modal>
  );
};

export default EditComplainModal;
