"use client";
import { useEffect, useState } from "react";
import { useComplain } from "../../hooks/complain-hook";
import Input from "../CC/Input";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useStateContext } from "@/app/StateContext";
import { FaUpload } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FaSpinner } from "react-icons/fa";

const ComplainForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { user } = useStateContext();
  const [latitude, setLatitude] = useState(null);
  const districtOptions = ["District 1", "District 2", "District 3"];
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const savedLatitude = localStorage.getItem("latitude");
    setLatitude(savedLatitude);
    const savedLongitude = localStorage.getItem("longitude");
    setLongitude(savedLongitude);
    console.log("PRINTTT")
    console.log(savedLatitude)
    console.log(savedLongitude)
  }, []);

  const [userData, setUserData] = useState({
    userId: user?.userId,
    district: "",
    area: "",
    description: "",
    latitude: parseFloat(localStorage.getItem("latitude")),
    longitude: parseFloat(localStorage.getItem("longitude")),
    image: "",
  });

  // const resetForm = () => {
  //   setUserData({
  //     userId: user?.userId,
  //     district: "",
  //     area: "",
  //     description: "",
  //     latitude: parseFloat(latitude),
  //     longitude: parseFloat(longitude),
  //     image: "",
  //   });
  //   setImage(null); // Reset the image state if necessary
  // };

  const { mutate: addMutate } = useComplain(JSON.stringify(userData));

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "image") {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setUserData({ ...userData, [name]: reader.result });
  //       }
  //     };

  //     reader.readAsDataURL(event.target.files[0]);
  //   } else {
  //     setUserData({ ...userData, [name]: value });
  //   }
  // };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log("handleInput");
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log("list")
    console.log(userData)
  };

  const handleSubmit = async (event) => {
    console.log(userData.latitude);
    console.log(userData.longitude);
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
          console.error("An error occurred bro:");
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
          setUserData({ ...userData, [name]: reader.result });
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
    <div
      style={{
        boxShadow: "0px 5px 43px 0px rgba(17, 29, 25, 0.12)",
      }}
      className="w-[70%] p-10 font-poppins"
    >
      <h1 className="font-bold text-2xl">Make a request</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        Please complete the form below, to request a quote, and we’ll be in
        touch. Or you can call us and our specialists will provide help!
      </p>
      <form className="w-full mt-10 " onSubmit={handleSubmit}>
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
            required
            name="image"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            name="userId"
            label="Enter Your ID"
            type="text"
            value={userData.userId}
            placeholder="Please write you details"
            onChange={handleInputChange}
          />
          {/* <Input
            name="district"
            label="Enter Your Destrict"
            type="text"
            value={userData.district}
            placeholder="Please write you details"
            onChange={handleInputChange}
          /> */}
          <div>
            <label
              htmlFor="district-select"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Your District
            </label>
            <select
              id="district-select"
              name="district"
              required
              value={userData.district}
              onChange={handleSelectChange}
              className="outline-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
            >
              <option value="">Select District</option>
              {districtOptions.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <Input
            name="area"
            label="Enter Your Area"
            type="text"
            value={userData.area}
            placeholder="Please write you details"
            onChange={handleInputChange}
          />
          <Input
            name="description"
            onChange={handleInputChange}
            value={userData.description}
            placeholder="Enter your text here..."
            label="Your Query"
          />
        </div>
        <div className="grid place-items-center mt-6">
          {isLoading ? (
            <FaSpinner className="animate-spin" /> // Show spinner if isLoading is true
          ) : (
            <button
              // onClick={resetForm}
              type="submit"
              className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
            >
              Submit Complain
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

export default ComplainForm;
