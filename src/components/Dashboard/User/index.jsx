"use client";
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "../Sidebar";
import { RxDashboard } from "react-icons/rx";
import ProfileDropdown from "../ProfileDropdown";
import ComplainsTable from "./ComplainsTable";

const sidebarLinks = [
  {
    linkText: `Dashboard`,
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Complains`,
    linkIcon: <RxDashboard />,
  },
];

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="w-full flex justify-start items-stretch">
      <Sidebar
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        sidebarLinks={sidebarLinks}
      />
      <div className="bg-[#f1f5f9] w-full">
        {/* Header */}
        <div className="w-full bg-[#fff] px-8 py-3  flex justify-between items-center">
          <h1 className="font-poppins  font-semibold">
            <Link href="/" className="text-lg font-poppins mr-2">
              Home {` > `}
            </Link>
            <span className="font-normal text-[15px]">
              {" "}
              {sidebarLinks[currentTab].linkText}
            </span>
          </h1>
          <ProfileDropdown />
        </div>
        <div className="px-7 py-5">
          {currentTab === 1 && <ComplainsTable />}
          {/* {currentTab === 1 && <DataSharedWithMeTable />} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
