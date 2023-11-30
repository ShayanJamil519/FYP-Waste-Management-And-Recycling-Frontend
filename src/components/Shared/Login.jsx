import { FaTimes } from "react-icons/fa";
import { useStateContext } from "@/app/StateContext";
import Link from "next/link";

const Login = () => {
  const { setOpenSignupModal, setOpenLoginModal } = useStateContext();

  return (
    <div className="w-full  flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-10 bg-black bg-opacity-80">
      <div className="w-[85%] md:w-[70%] lg:w-[40%] mx-auto  bg-white rounded-xl  ">
        <div className="w-full mx-auto border-2 rounded-xl">
          <div className="text-end ">
            <button
              className="bg-[#32A632] text-white p-1 rounded-full mt-2 mr-2"
              onClick={() => {
                setOpenLoginModal(false);
              }}
            >
              <FaTimes />
            </button>
          </div>
          <div className="px-4 lg:px-10">
            <h2 className="font-extrabold text-[20px] lg:text-3xl lg:my-6">
              Login with RecySense
            </h2>
            <div className="flex mt-3 sm:mt-1 lg:mt-6">
              <div className="bg-[#EAEAEA] p-2 rounded-full w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_92_34575)">
                    <path
                      d="M6.92971 12V6.52664H8.76615L9.04167 4.39294H6.92971V3.03088C6.92971 2.41332 7.10049 1.99246 7.98708 1.99246L9.116 1.99199V0.083538C8.92077 0.0581672 8.25061 0 7.47061 0C5.84186 0 4.72678 0.994179 4.72678 2.81956V4.39294H2.88477V6.52664H4.72678V12H6.92971Z"
                      fill="#3B5998"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_92_34575">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-[#EAEAEA] p-2 rounded-full ml-3 w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center ">
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
              </div>
              <div className="bg-[#EAEAEA] p-2 rounded-full ml-3 w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                <svg
                  className="w-[12px] h-[12px] sm:w-[24px] sm:h-[24px]"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_92_34590)">
                    <path
                      d="M6.92435 0H6.99549C7.05258 0.705221 6.7834 1.23216 6.45626 1.61375C6.13526 1.99271 5.69571 2.36025 4.98478 2.30448C4.93735 1.60936 5.20697 1.1215 5.53367 0.74079C5.83666 0.385983 6.39215 0.0702586 6.92435 0ZM9.07646 7.34027V7.36003C8.87667 7.96513 8.59168 8.48373 8.2439 8.965C7.92642 9.40192 7.53736 9.9899 6.84268 9.9899C6.24241 9.9899 5.84369 9.60392 5.22849 9.59338C4.57772 9.58284 4.21984 9.91613 3.62483 10H3.42196C2.98504 9.93677 2.63243 9.59074 2.37555 9.27897C1.61807 8.3577 1.03273 7.1677 0.923828 5.64484V5.19738C0.969935 4.1075 1.49951 3.22136 2.20341 2.7919C2.57491 2.56356 3.0856 2.36903 3.65425 2.45598C3.89796 2.49374 4.14694 2.57717 4.36518 2.65973C4.57201 2.73921 4.83065 2.88016 5.07567 2.8727C5.24166 2.86787 5.40677 2.78136 5.57407 2.72033C6.06413 2.54336 6.54452 2.34049 7.17773 2.43578C7.93871 2.55083 8.47883 2.88895 8.81256 3.41062C8.16881 3.82031 7.65987 4.43771 7.74682 5.49203C7.8241 6.44974 8.3809 7.01006 9.07646 7.34027Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_92_34590">
                      <rect width="10" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex mt-3 sm:mt-2 gap-2 sm:gap-5 justify-start items-center">
              <p className="text-[10px] sm:text-sm">Or Continue With Email</p>
              <div className="h-[1px] bg-[#C9C6C6] w-1/2 sm:w-[60%]"></div>
            </div>
            <form>
              <div className="mt-4">
                <input
                  type="email"
                  name="email"
                  required
                  //   onChange={handleInputChange}
                  placeholder="Enter Your Email Address"
                  className="text-[10px] lg:text-base px-2 md:px-4 w-full py-3 rounded-lg outline-none bg-[#EAEAEA]"
                />
                <input
                  type="text"
                  name="password"
                  required
                  //   onChange={handleInputChange}
                  placeholder="Password"
                  className="text-[10px]  py-3 lg:text-base px-2 md:px-4 w-full rounded-lg outline-none mt-3 bg-[#EAEAEA]"
                />
              </div>
              <div className="grid place-items-center mt-6">
                <button
                  type="submit"
                  className="bg-[#32A632] text-[10px] lg:text-lg text-white rounded-full py-3 lg:py-2 px-24"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center my-4 sm:mt-7 font-semibold  text-[10px] lg:text-sm">
              Not on FanGram?
              <Link
                href="#"
                className="text-[#32A632] ml-1 underline cursor-pointer"
                onClick={() => {
                  setOpenLoginModal(false);
                  setOpenSignupModal(true);
                }}
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
