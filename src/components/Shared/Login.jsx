"use client";
import { FaTimes } from "react-icons/fa";
import { useStateContext } from "@/app/StateContext";
import Link from "next/link";
import { toast } from "react-toastify";
import { useUserLogin } from "../../hooks/auth-hook";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner } from 'react-icons/fa';

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
          if (pathname !== "/") {
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
            <h2 className="font-paralucent text-center text-[20px] lg:text-3xl lg:my-4">
              Login
            </h2>
            <div className="flex mt-3 sm:mt-1 lg:mt-6">
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
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleInputChange}
                  placeholder="Enter Your Email Address"
                  className="text-[10px] lg:text-base px-2 md:px-4 w-full py-3 rounded-lg outline-none bg-[#EAEAEA]"
                />
                <input
                  type="text"
                  name="password"
                  required
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="text-[10px]  py-3 lg:text-base px-2 md:px-4 w-full rounded-lg outline-none mt-3 bg-[#EAEAEA]"
                />
              </div>
              {/* <div className="grid place-items-center mt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`bg-[#32A632] text-[10px] lg:text-lg text-white rounded-full py-3 lg:py-2 px-24 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading && (
                    <FaSpinner className="animate-spin absolute left-0 right-0 mx-auto" /> // Show spinner if isLoading is true
                  )}
                  {!isLoading && 'Login'}
                </button>
              </div> */}
              <div className="grid place-items-center mt-6">
                {isLoading ? (
                  <FaSpinner className="animate-spin" /> // Show spinner if isLoading is true
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`bg-[#32A632] text-[10px] lg:text-lg text-white rounded-full py-3 lg:py-2 px-24`}
                  >
                    Login
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
