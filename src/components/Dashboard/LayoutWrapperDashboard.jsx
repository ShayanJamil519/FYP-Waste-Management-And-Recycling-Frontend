"use client";

import { useStateContext } from "@/app/StateContext";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import DataLoader from "../Shared/DataLoader";
import Sidebar from "./Sidebar";
import {
  sidebarLinksAdmin,
  sidebarLinksDistrictAdmin,
  sidebarLinksLandfillAdmin,
  sidebarLinksRecyclingPointAdmin,
  generateSidebarLinksUser
  
} from "@/app/data";
import ProfileDropdown from "./ProfileDropdown";
import Cookies from "js-cookie";

export default function LayoutWrapperDashboard({ children }) {
  const { user, setUser } = useStateContext();
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams()
  

  useEffect(() => {
    const token = typeof window !== "undefined" ? Cookies.get("jwt") : null;
    console.log("url")
    const url = `${pathname}?${searchParams}`
    console.log(url)
    if (token) {
      const decodedCookieValue = jwt.decode(token.substring(7));
      setUser(decodedCookieValue);
      setLoading(false);
    }
    setLoading(false);
  }, []);

  let sidebarLinks = [];

  switch (user?.role) {
    case "DistrictAdmin":
      sidebarLinks = sidebarLinksDistrictAdmin;

      break;
    case "RecyclingPointAdmin":
      sidebarLinks = sidebarLinksRecyclingPointAdmin;
      break;

    case "LandfillAdmin":
      sidebarLinks = sidebarLinksLandfillAdmin;
      break;

    case "admin":
      sidebarLinks = sidebarLinksAdmin;
      break;

    case "user":
        sidebarLinks = sidebarLinksAdmin;
        break;
    default:
      // Default case or handle unknown roles
      break;
  }

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <DataLoader />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-start items-stretch ">
      <Sidebar sidebarLinks={sidebarLinks} />
      <div className="bg-[#f1f5f9] w-full overflow-y-auto h-screen">
        {/* Header */}
        <div className="w-full bg-[#fff] px-8 py-3  flex justify-between items-center">
          <h1 className="font-poppins  font-semibold">
            <Link href="/" className="text-lg font-poppins mr-2">
              Home {` > `}
            </Link>
            <span className="font-normal  capitalize text-[15px]">
              {" "}
              {pathname.split("/").pop()}
            </span>
          </h1>
          <ProfileDropdown />
        </div>
        <div className="px-7 py-5">{children}</div>
      </div>
    </div>
  );
}
