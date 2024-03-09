"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import ProfileDropdown from "./ProfileDropdown";
import ComplainsTable from "./DistrictAdmin/ComplainsTable";
import { Home as HomeDistrictAdmin } from "./DistrictAdmin/Home";
import IncentivesTable from "./DistrictAdmin/IncentivesTable";
import CommunityWasteMovements from "./DistrictAdmin/CommunityWasteMovements";
import { Home as HomeRecyclingPointAdmin } from "./RecyclingPointAdmin/Home";
import {
  sidebarLinksDistrictAdmin,
  sidebarLinksRecyclingPointAdmin,
} from "@/app/data";
import { useStateContext } from "@/app/StateContext";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import DataLoader from "../Shared/DataLoader";
import RecyclingIntake from "./RecyclingPointAdmin/RecyclingIntake";
import RecyclingOutput from "./RecyclingPointAdmin/RecyclingOutput";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const { user, setUser } = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = typeof window !== "undefined" ? Cookies.get("jwt") : null;
    if (token) {
      const decodedCookieValue = jwt.decode(token.substring(7));
      setUser(decodedCookieValue);
      setLoading(false);
    }
    setLoading(false);
  }, []);

  // If Loading
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <DataLoader />
      </div>
    );
  }

  let sidebarLinks = [];
  let components = [];

  switch (user?.role) {
    case "DistrictAdmin":
      sidebarLinks = sidebarLinksDistrictAdmin;
      components = [
        <HomeDistrictAdmin key="HomeDistrictAdmin" />,
        <ComplainsTable key="ComplainsTable" />,
        <IncentivesTable key="IncentivesTable" />,
        <CommunityWasteMovements key="CommunityWasteMovements" />,
      ];
      break;
    case "RecyclingPointAdmin":
      sidebarLinks = sidebarLinksRecyclingPointAdmin;
      components = [
        <HomeRecyclingPointAdmin key="HomeRecyclingPointAdmin" />,
        <RecyclingIntake key="RecyclingIntake" />,
        <RecyclingOutput key="RecyclingOutput" />,
      ];
      break;
    case "LandfillAdmin":
      sidebarLinks = sidebarLinksRecyclingPointAdmin;
      components = [<HomeRecyclingPointAdmin key="HomeRecyclingPointAdmin" />];

    default:
      // Default case or handle unknown roles
      break;
  }

  return (
    <div className="w-full flex justify-start items-stretch ">
      <Sidebar
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        sidebarLinks={sidebarLinks}
      />
      <div className="bg-[#f1f5f9] w-full overflow-y-auto h-screen">
        {/* Header */}
        <div className="w-full bg-[#fff] px-8 py-3  flex justify-between items-center">
          <h1 className="font-poppins  font-semibold">
            <Link href="/" className="text-lg font-poppins mr-2">
              Home {` > `}
            </Link>
            <span className="font-normal text-[15px]">
              {" "}
              {sidebarLinks && sidebarLinks[currentTab].linkText}
            </span>
          </h1>
          <ProfileDropdown />
        </div>
        <div className="px-7 py-5">{components && components[currentTab]}</div>
      </div>
    </div>
  );
};

export default Dashboard;
