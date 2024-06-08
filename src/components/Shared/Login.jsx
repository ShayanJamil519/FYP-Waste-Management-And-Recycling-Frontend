"use client";
import { FaTimes } from "react-icons/fa";
import { useStateContext } from "@/app/StateContext";
import Link from "next/link";
import { toast } from "react-toastify";
import { useUserLogin } from "../../hooks/auth-hook";
import { IoIosArrowRoundForward } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoggedIn, setOpenSignupModal, setOpenLoginModal } =
    useStateContext();

  const router = useRouter();
  const pathname = usePathname();

  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });

  const { mutate: addMutate } = useUserLogin(JSON.stringify(userData));

  const handleInputChange = (event) => {
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
          setOpenLoginModal(false);
          setIsLoggedIn(true);
          if (pathname !== "/" || pathname !== "/signup") {
            router.back();
          }
          setIsLoading(false);
        },
        onError: (response) => {
          console.error("An error occurred:");
          console.log(response);
          console.log(response.response.data.message);
          toast.error(response.response.data.message);
          setIsLoading(false);
        },
      }
    );
  };

  return (
    <div className=" flex items-center justify-center w-full h-full ">
      <div className="  bg-white rounded-xl  ">
        <div className="w-full mx-auto border-2 rounded-xl">
          <div className="px-4 lg:px-8">
            <h2 className="font-paralucent text-center text-[20px] lg:text-3xl mt-7 lg:my-4">
              Login
            </h2>
            <div className="flex mt-3 sm:mt-1 lg:mt-6">
              <div
                className="bg-[#EAEAEA] rounded-md cursor-pointer w-full py-3 flex items-center gap-3 sm:gap-5 justify-center "
                // onClick={handleGoogleLogin}
              >
                <FcGoogle className=" text-[24px] sm:text-[30px]" />
                <p className="text-[13px] sm:text-base"> Login With Google</p>
              </div>
            </div>
            <div className="flex mt-3 sm:mt-2 gap-2 sm:gap-5 justify-start items-center font-poppins">
              <p className="text-[10px] sm:text-sm">Or Continue With Email</p>
              <div className="h-[1px] bg-[#C9C6C6] w-1/2 sm:w-[54%]"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <input
                  type="email"
                  name="name"
                  required
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="text-[10px] lg:text-base px-2 md:px-4 w-full py-3 rounded-lg outline-none bg-[#EAEAEA]"
                />
                <input
                  type="password"
                  name="password"
                  required
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="text-[10px]  py-3 lg:text-base px-2 md:px-4 w-full rounded-lg outline-none mt-3 bg-[#EAEAEA]"
                />
              </div>

              <div className="grid place-items-center mt-6 font-poppins">
                {isLoading ? (
                  <button
                    type="submit"
                    className="lg:mt-4 mt-2 w-full flex justify-center items-center font-semibold text-sm sm:text-lg gap-3 bg-[#20332c] transition duration-500 ease-in-out outline-none border-0 px-7 lg:py-4 py-3 rounded-md"
                    disabled
                  >
                    <FaSpinner className="animate-spin mr-2 text-white" />
                    <span className={"text-white"}>Loading...</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    // onClick={resetForm}
                    className="lg:mt-4 mt-2 w-full flex justify-center items-center font-semibold text-sm sm:text-lg gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 lg:py-4 py-3 rounded-md"
                  >
                    login
                    <span className="p-0 rounded-full bg-[#fff] transition duration-500 text-[#20332c]">
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
            <p className="text-center my-4 sm:mt-7 font-semibold  text-[10px] lg:text-sm">
              Not With Us?
              <Link
                href="/signup"
                className="text-[#32A632] ml-1 underline cursor-pointer"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
