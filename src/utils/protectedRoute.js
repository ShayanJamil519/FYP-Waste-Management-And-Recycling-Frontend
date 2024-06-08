"use client";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import {
  sidebarLinksAdmin,
  sidebarLinksDistrictAdmin,
  sidebarLinksLandfillAdmin,
  sidebarLinksRecyclingPointAdmin,
  sidebarLinksUser,
} from "@/app/data";
import PageLoader from "@/components/Shared/PageLoader";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = typeof window !== "undefined" ? Cookies.get("jwt") : null;

    if (!token) {
      if (pathname !== "/") {
        router.push("/login");
      }
    } else {
      const decodedToken = jwt.decode(token.substring(7));
      const userRole = decodedToken?.role;

      const rolePaths = {
        admin: sidebarLinksAdmin[0]?.linkTo,
        DistrictAdmin: sidebarLinksDistrictAdmin[0]?.linkTo,
        RecyclingPointAdmin: sidebarLinksRecyclingPointAdmin[0]?.linkTo,
        LandfillAdmin: sidebarLinksLandfillAdmin[0]?.linkTo,
        user: sidebarLinksUser[0]?.linkTo,
      };

      const allowedBasePath = rolePaths[userRole];

      if (pathname.startsWith(allowedBasePath)) {
        setLoading(false);
        return;
      } else {
        router.push(allowedBasePath);
      }
    }

    setLoading(false);
  }, [pathname]);

  if (loading) {
    return <PageLoader />;
  }

  return children;
};

export default ProtectedRoute;
