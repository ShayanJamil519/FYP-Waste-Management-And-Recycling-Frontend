"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/app/StateContext";
import Login from "./Login";
import SignUp from "./Signup";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

import ProfileDropdown from "../Dashboard/ProfileDropdown";

const headerLinks = [
  {
    linkText: "Home",
    linkTo: "/",
  },

  // {
  //   linkText: "Company",
  //   linkTo: "/company",
  // },

  // {
  //   linkText: "Services",
  //   linkTo: "/services",
  // },
  {
    linkText: "About Us",
    linkTo: "/about",
  },
  {
    linkText: "Community Forum",
    linkTo: "/forum",
  },

  {
    linkText: "Contact Us",
    linkTo: "/contact",
  },
];

const Header = () => {
  const router = useRouter();

  const {
    isLoggedIn,
    setIsLoggedIn,
    setUser,
    openLoginModal,
    setOpenLoginModal,
    openSignupModal,
  } = useStateContext();
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  useEffect(() => {
    const token = Cookies.get("jwt");
    if (token) {
      setIsLoggedIn(true);
      const decodedCookieValue = jwt.decode(token.substring(7));
      setUser(decodedCookieValue);
    }
  }, [isLoggedIn]);

  return (
    <div className="bg-[#fff] font-poppins py-3 border-b-[1px] text-[#000] block z-50  sticky top-0 left-0 right-0 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-90">
      <div className="w-[90%] md:w-[90%] mx-auto flex justify-between items-center">
        <div className="flex w-full justify-between items-center gap-16">
          <div className="lg:flex justify-start items-center gap-3  hidden ">
            <Link href="/">
              <img
                src="/shared/header__logo.png"
                alt="logo"
                className="w-[50px]"
              />
            </Link>
            <h1 className="text-[#000]">Recy-Sense</h1>
          </div>

          <div className="lg:hidden block">
            <Link href="/">
              <img
                src="/shared/header__logo__small.png"
                alt="logo"
                className="w-[50px]"
              />
            </Link>
            <h1 className="text-[#000]">Recy-Sense</h1>
          </div>

          <div className="hidden lg:flex justify-start items-center gap-10">
            <div className="flex justify-start items-center gap-10">
              {headerLinks.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-start items-start flex-col"
                >
                  <Link
                    className={`${
                      router.pathname === item.linkTo
                        ? "text-[#32A632]"
                        : "text-[#000]"
                    }`}
                    key={index}
                    href={item.linkTo}
                  >
                    {item.linkText}
                  </Link>

                  {router.pathname === item.linkTo && (
                    <div className="bg-[#32A632] h-[1px] w-[80%]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center gap-3 md:gap-5">
            <div className="flex justify-between items-center gap-3 md:gap-5">
              <button className="hidden lg:block outline-none border-[1px] py-2 px-4 rounded-[40px] border-[#000] text-[#000]">
                <Link href="/complain">Make a Complain</Link>
              </button>
              {isLoggedIn ? (
                <ProfileDropdown />
              ) : (
                <button
                  className="outline-none lg:text-base text-[14px] py-[5px] sm:py-2 px-3 sm:px-4  rounded-[40px] bg-[#32A632] text-[#fff]"
                  // onClick={() => setOpenLoginModal(true)}
                  onClick={() => router.push("/login")}
                >
                  Login/Signup
                </button>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/toggle__open.png"
                alt="logo"
                className="lg:hidden block cursor-pointer"
                onClick={handleNavbar}
              />
              {openLoginModal && <Login />}
              {openSignupModal && <SignUp />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dawer */}
      {openNavbar && (
        <div
          className="block  basis-full overflow-hidden  lg:hidden w-[90%] mx-auto"
          style={{ height: "auto" }}
        >
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            {headerLinks.map((item) => (
              <li
                key={item.linkTo}
                onClick={handleNavbar}
                className={`text-[#000] block antialiased font-sans text-sm leading-normal  p-1  lg:transition-transform lg:hover:scale-105`}
              >
                <Link className="flex items-center" href={item.linkTo}>
                  {item.linkText}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={"/promotion"}
            onClick={handleNavbar}
            className="text-center text-sm py-2 px-4  text-[#000] bg-[#32A632] hover:shadow-lg block w-full mb-2 rounded-[16px] capitalize shadow-none"
          >
            <span>Promote My Business</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
