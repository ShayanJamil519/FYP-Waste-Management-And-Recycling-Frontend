"use client";
import { useState } from "react";
import { useComplain } from "../../hooks/complain-hook";
import Input from "../CC/Input";
import Select from "../CC/Select";
import TextArea from "../CC/TextArea";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useUserId } from "../../hooks/auth-hook";

const ComplainForm = () => {
  const router = useRouter();
  const  {data}   = useUserId();
  console.log("abc")
  console.log(data);
  const [userData, setUserData] = useState({
    userId: data,
    district: "",
    area: "",
    description: "",
    image: "",
  });

// const {userId,district,area,description,image} = userData;
const { mutate: addMutate } = useComplain(JSON.stringify(userData));

  // const handleInputChange = (event) => {
  //   const { name, value, type } = event.target;
  
  //   if (type === "file") {
  //     const reader = new FileReader();
  
  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setUserData((prevUserData) => ({
  //           ...prevUserData,
  //           [name]: reader.result,
  //         }));
  //       }
  //     };
  
  //     reader.readAsDataURL(event.target.files[0]);
  //   } else {
  //     setUserData((prevUserData) => ({
  //       ...prevUserData,
  //       [name]: value,
  //     }));
  //   }
  // };
  

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === "image") {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setUserData((prevUserData) => ({
  //           ...prevUserData,
  //           [name]: reader.result,
  //         }));
  //       }
  //     };

  //     reader.readAsDataURL(event.target.files[0]);
  //   } else {
  //     setUserData((prevUserData) => ({
  //       ...prevUserData,
  //       [name]: value,
  //     }));
  //   }
  // };

  const handleInputChange = (event) => {

    const { name, value } = event.target;
    console.log("abc");
    console.log(name);
    console.log(value);
    if (name === "image") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setUserData({ ...userData, [name]: reader.result });
        }
      };

      reader.readAsDataURL(event.target.files[0]);
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  // const handleInputChange = (event) => {
  //   if (event.target.name === 'image') {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setUserData({ ...userData, image: reader.result });
  //       }
  //     };

  //     reader.readAsDataURL(event.target.files[0]);
  //   } else {
  //     const { name, value } = event.target;
  //     setUserData({ ...userData, [name]: value });
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    addMutate(
      {},
      {
        onSuccess: (response) => {
          if (response?.data?.error) {
            toast.error(response?.data?.error);
          }
          if (response?.data?.message) {
            toast.success(response?.data?.message);
            router.push("/");
          }
        },
      }
    );
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
        <div className="grid grid-cols-2 gap-5">
          <input
            name="userId"
            label="Enter Your ID"
            type="text"
            // value={userId}
            placeholder="Please write you details"
            onChange={handleInputChange}
          />
          <input
            name="district"
            label="Enter Your Destrict"
            type="text"
            // value={district}
            placeholder="Please write you details"
            onChange={handleInputChange}
          />
          <input
            name="area"
            label="Enter Your Area"
            type="text"
            // value={area}
            placeholder="Please write you details"
            onChange={handleInputChange}
          />
          <input
            cursor="pointer"
            type="file"
            // value={image}
            label="image"
            name="image"
            onChange={handleInputChange}
          />
          <input
            name="description"
            onChange={handleInputChange}
            // value={description}
            placeholder="Enter your text here..."
            label="Your Query"
          />
        </div>

        <button
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
      </form>
    </div>
  );
};

export default ComplainForm;
