"use client";

import { useUserSignup } from "../../hooks/auth-hook";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


import { FaSpinner } from "react-icons/fa";
import axios from 'axios';


// slider
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { signupSliderImages } from "@/app/data";
import Link from "next/link";
import { FaUpload } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const districtOptions = ["malir", "DistrictB", "DistrictC"];
  const subDivisionOptions = ["airport", "DivisionB", "DivisionC"];
  const [avatar, setAvatar] = useState(null);
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    ethAddress: "",
    district: "",
    subDivision: "",
    area: "",
    avatar: "",
    address:""
  });

  const { mutate: addMutate } = useUserSignup(JSON.stringify(userData));

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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    addMutate(
      {},
      {
        onSuccess: (response) => {
          toast.success(response?.data?.message);
          router.push("/login");
          setIsLoading(false);
        },
        onError: (response) => {
          toast.error(response.response.data.message);
          setIsLoading(false);
        },
      }
    );
  };

  const handleAvatarChange = (event) => {
    console.log("handleAvatar");
    const { name, value } = event.target;
    if (name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        console.log("handleAvatar22");
        if (reader.readyState === 2) {
          setUserData({ ...userData, [name]: reader.result });
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(event.target.files[0]);
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleAddressChange2 = async (event) => {
    console.log("handleAvatar");
    const { name, value } = event.target;
    if (name === "address") {
      const reader = new FileReader();

      reader.onload = async () => {
        console.log("handleAvatar22");
        if (reader.readyState === 2) {
          try {
            console.log(reader.result)
            // Send base64-encoded image to Azure Computer Vision API
            /*const response = await axios.post(
              `https://fyp-se20017.cognitiveservices.azure.com/vision/v3.2/ocr?language=en&detectOrientation=true`,
              {
                url: reader.result,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Ocp-Apim-Subscription-Key': process.env.NEXT_PUBLIC_OCR_API_KEY,
                },
              }
            );
        
            // Handle response
            const extractedText = response.data.regions.map(region =>
              region.lines.map(line => line.words.map(word => word.text).join(' ')).join('\n')
            ).join('\n');
            
            console.log(extractedText)*/
            const endpoint = 'https://fyp-se20017.cognitiveservices.azure.com/vision/v3.2/read/analyze';

    const params = {
      language: 'en',
    };

    const headers = {
      'Ocp-Apim-Subscription-Key':process.env.NEXT_PUBLIC_OCR_API_KEY ,
      'Content-Type': 'application/json',
    };

    const requestBody = {
      url: "https://www.stickergenius.com/wp-content/uploads/2013/10/your_text_wall.jpg",
    };
            const response = await axios.post(endpoint, requestBody, { params, headers });

    // Extract text from response
    const extractedText = response.data?.analyzeResult?.readResults?.[0]?.lines?.map(line => line.text).join('\n');
    console.log(extractedText)
    console.log(response)
    console.log(response.data)
          } catch (error) {
            console.log(error)
            console.error('Error extracting text:', error.response?.data || error.message);
            throw error;
          }
        }
        
        
      };
      

      reader.readAsDataURL(event.target.files[0]);
    } 
   /* console.log("handleAvatar33");
    const { name, value } = event.target;
    if (name === "address") {

        const selectedImage = event.target.files[0];
    
        const formData = new FormData();
        formData.append('file', selectedImage);
      console.log(formData)
        try {
          const response = await axios.post('https://api.ocr.space/parse/image', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'apikey': process.env.NEXT_PUBLIC_OCR_API_KEY,
              ocrengine : 2,
              language: "eng",
              detectOrientation:true
            },
          });
    
          console.log(response.data)
          console.log(response.data.ParsedResults[0].ParsedText);
        } catch (error) {
          console.error('Error extracting text:', error);
        }
    } else {

    }*/
};


  const removeAvatar = () => {
    setAvatar(null);
    // Update userData state if necessary
  };

  return (
    <div className=" flex items-center justify-center w-full ">
      <div className="w-full  bg-[#32A632] flex rounded-[15px] sm:rounded-[20px] flex-col lg:flex-row ">
        <div className="lg:w-[45%] sm:p-unset  flex items-center justify-center rounded-[15px] sm:rounded-[20px] w-full mx-auto relative ">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={1}
            spaceBetween={1}
            slidesPerGroup={1}
            autoplay={true}
            pagination={true}
            slideActiveClass="activeSlide"
            className="hero__caurosel w-[70%]  sm:w-[80%] mx-auto lg:w-[70%]"
          >
            {signupSliderImages.map((slide, index) => (
              <SwiperSlide key={index} className="z-10">
                <div className="h-[200px] rounded-2xl mx-auto w-full lg:h-[420px] relative">
                  <img
                    src={slide.image}
                    alt="logo"
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                <div className="h-7 sm:h-10"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lg:w-[55%] border-solid  bg-white px-6 rounded-[15px] sm:rounded-[20px] pt-5 pb-5 w-full">
          <p className="text-[#32A632] font-satisfy text-[12px] sm:text-[16px] lg:text-xl ">
            Welcome
          </p>
          <h2 className="font-extrabold font-paralucent text-[20px]  lg:text-3xl">
            Sign up with Us
          </h2>
          <div className="flex mt-1 sm:mt-1 lg:mt-6">
            <div
              className="bg-[#EAEAEA] rounded-md cursor-pointer w-full py-3 flex items-center gap-5 justify-center "
              // onClick={handleGoogleLogin}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_92_34580)">
                  <path
                    d="M9.62279 4.13105L5.54389 4.13086C5.36377 4.13086 5.21777 4.27684 5.21777 4.45695V5.75998C5.21777 5.94006 5.36377 6.08607 5.54387 6.08607H7.84086C7.58934 6.73883 7.11988 7.28549 6.52094 7.63283L7.50037 9.32832C9.0715 8.41967 10.0004 6.82535 10.0004 5.04062C10.0004 4.7865 9.98164 4.60484 9.94418 4.40029C9.9157 4.24488 9.78078 4.13105 9.62279 4.13105Z"
                    fill="#167EE6"
                  />
                  <path
                    d="M4.99979 8.04256C3.87568 8.04256 2.89436 7.42838 2.3673 6.51953L0.671875 7.49676C1.53467 8.99211 3.15096 9.99908 4.99979 9.99908C5.90676 9.99908 6.76256 9.75488 7.49978 9.32932V9.32699L6.52035 7.63148C6.07234 7.89133 5.55391 8.04256 4.99979 8.04256Z"
                    fill="#12B347"
                  />
                  <path
                    d="M7.5 9.33064V9.32832L6.52057 7.63281C6.07256 7.89264 5.55416 8.04389 5 8.04389V10.0004C5.90697 10.0004 6.76281 9.75621 7.5 9.33064Z"
                    fill="#0F993E"
                  />
                  <path
                    d="M1.95652 4.99963C1.95652 4.44555 2.10773 3.92717 2.36752 3.47918L0.67209 2.50195C0.24418 3.23686 0 4.09033 0 4.99963C0 5.90893 0.24418 6.7624 0.67209 7.4973L2.36752 6.52008C2.10773 6.07209 1.95652 5.55371 1.95652 4.99963Z"
                    fill="#FFD500"
                  />
                  <path
                    d="M4.99979 1.95652C5.73281 1.95652 6.40613 2.21699 6.93205 2.65025C7.0618 2.75713 7.25037 2.74941 7.36922 2.63057L8.29246 1.70732C8.4273 1.57248 8.4177 1.35176 8.27365 1.2268C7.3925 0.462363 6.24602 0 4.99979 0C3.15096 0 1.53467 1.00697 0.671875 2.50232L2.3673 3.47955C2.89436 2.5707 3.87568 1.95652 4.99979 1.95652Z"
                    fill="#FF4B26"
                  />
                  <path
                    d="M6.93227 2.65025C7.06201 2.75713 7.25061 2.74941 7.36943 2.63057L8.29268 1.70732C8.4275 1.57248 8.41789 1.35176 8.27387 1.2268C7.39271 0.462344 6.24623 0 5 0V1.95652C5.73301 1.95652 6.40635 2.21699 6.93227 2.65025Z"
                    fill="#D93F21"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_92_34580">
                    <rect width="10" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-[13px] sm:text-base"> Signup With Google</p>
            </div>
          </div>
          <div className="flex mt-3 sm:mt-2 gap-2 sm:gap-5 justify-start items-center">
            <p className="text-[10px] sm:text-sm">Or Continue With Email</p>
            <div className="h-[1px] bg-[#C9C6C6] w-1/2 sm:w-[60%]"></div>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="my-3">
              {avatar ? (
                <div className="">
                  <div className="w-24 h-24 mx-auto relative">
                    <img
                      src={avatar}
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
                    <p>Upload your image</p>
                    <p className="text-xs mt-2">
                      Click to browse your image here
                    </p>
                  </div>
                </label>
              )}
              <input
                id="avatar-upload"
                required
                name="avatar"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 ">
              <input
                type="text"
                placeholder="Enter Your name"
                name="name"
                required
                onChange={handleInputChange}
                className="text-[10px] py-3 lg:text-base px-2 md:px-4 w-full outline-none  rounded-lg bg-[#EAEAEA]"
              />
              <input
                type="email"
                placeholder="Enter Your Email Address"
                name="email"
                required
                onChange={handleInputChange}
                className="text-[10px] py-3 lg:text-base px-2 md:px-4 w-full outline-none rounded-lg  bg-[#EAEAEA]"
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                required
                onChange={handleInputChange}
                className="text-[10px] py-3 lg:text-base px-2 md:px-4 w-full outline-none rounded-lg  bg-[#EAEAEA]"
              />

              <input
                type="text"
                placeholder="area"
                name="area"
                required
                onChange={handleInputChange}
                className="text-[10px] py-3 lg:text-base px-2 md:px-4 w-full outline-none rounded-lg  bg-[#EAEAEA]"
              />

              <input
                type="text"
                placeholder="ethAddress"
                name="ethAddress"
                required
                onChange={handleInputChange}
                className="text-[10px] col-span-2 py-3 lg:text-base px-2 md:px-4 w-full outline-none rounded-lg  bg-[#EAEAEA]"
              />


              <div>
                <select
                  id="district-select"
                  name="district"
                  required
                  value={userData.district}
                  onChange={handleSelectChange}
                  className="text-[10px] col-span-2 py-3 lg:text-base px-2 md:px-4 w-full outline-none rounded-lg  bg-[#EAEAEA]"
                >
                  <option value="">Select District</option>
                  {districtOptions.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                
                <select
                  id="subDivision-select"
                  required
                  name="subDivision"
                  value={userData.subDivision}
                  onChange={handleSelectChange}
                  className="text-[10px] col-span-2 py-3 lg:text-base px-2 md:px-4 w-full outline-none rounded-lg  bg-[#EAEAEA]"
                >
                  <option value="">Select SubDivision</option>
                  {subDivisionOptions.map((subDivision, index) => (
                    <option key={index} value={subDivision}>
                      {subDivision}
                    </option>
                  ))}
                </select>
                
                
              </div>
              
              
            </div>
            <div className="my-3">
                <label htmlFor="address-upload" className="cursor-pointer">
                  <div className="w-full h-32 bg-gray-200 rounded-md flex flex-col items-center  justify-center text-gray-700">
                    <FaUpload className="text-2xl" />
                    <p>Upload your Cnic For Address Verification</p>
                    <p className="text-xs mt-2">
                      Click to browse your image here
                    </p>
                  </div>
                </label>
              
              <input
                id="address-upload"
                required
                name="address"
                type="file"
                accept="image/*"
                onChange={handleAddressChange2}
                className="hidden"
              />
            </div>
            <div className="grid place-items-center mt-6">
              {isLoading ? (
                <FaSpinner className="animate-spin" /> // Show spinner if isLoading is true
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`bg-[#32A632] text-[10px] lg:text-lg text-white rounded-full py-3 lg:py-2 px-24`}
                >
                  Sign Up
                </button>
              )}
            </div>
          </form>

          <p className="text-center my-2 font-semibold  text-[10px] lg:text-sm">
            Already With Us?
            <Link
              href="/login"
              className="text-[#32A632] ml-1 underline cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

const Select = ({ options, onChange, value, name, placeholder, error }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Wrapper function to integrate with Formik
  const handleSelect = (option) => {
    const changeEvent = {
      target: {
        name: name,
        value: option,
      },
    };
    onChange(changeEvent);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div className="">
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-xl bg-[#D4D4D433] text-sm p-3 font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {value ? (
            <span className="text-[#000]">{value}</span>
          ) : (
            <span className={` ${error ? "text-[#ffb8b8]" : "text-[#9ca3af]"}`}>
              {placeholder}
            </span>
          )}
          {isOpen ? (
            <IoIosArrowUp className="text-[22px] text-[#9ca3af] m-0" />
          ) : (
            <IoIosArrowDown className="text-[22px] text-[#9ca3af] m-0" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0  w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className="block w-full text-left px-4 py-2 text-sm text-[#6c7571] hover:bg-gray-100 hover:text-gray-900"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
