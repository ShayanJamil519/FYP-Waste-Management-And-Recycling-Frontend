import { RxDashboard } from "react-icons/rx";

export const sidebarLinksDistrictAdmin = [
  {
    linkText: `Dashboard`,
    linkTo: "/dashboard/district-admin",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Complains`,
    linkTo: "/dashboard/district-admin/all-complaints",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Incentives`,
    linkTo: "/dashboard/district-admin/all-incentives",
    linkIcon: <RxDashboard />,
  },

  {
    linkText: `Community Waste Movements`,
    linkTo: "/dashboard/district-admin/community-waste-movements",
    linkIcon: <RxDashboard />,
  },
];

export const sidebarLinksRecyclingPointAdmin = [
  {
    linkText: `Dashboard`,
    linkTo: "/dashboard/recycling-point-admin",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Recycling Intake`,
    linkTo: "/dashboard/recycling-point-admin/recycling-intake",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Recycling Output`,
    linkTo: "/dashboard/recycling-point-admin/recycling-output",
    linkIcon: <RxDashboard />,
  },

  {
    linkText: `Input Entries`,
    linkTo: "/dashboard/recycling-point-admin/recycling-input-entries",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Output Entries`,
    linkTo: "/dashboard/recycling-point-admin/recycling-output-entries",
    linkIcon: <RxDashboard />,
  },
];

export const sidebarLinksLandfillAdmin = [
  {
    linkText: `Dashboard`,
    linkTo: "/dashboard/landfill-admin",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Landfill Intake`,
    linkTo: "/dashboard/landfill-admin/landfill-intake",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Landfill Entries`,
    linkTo: "/dashboard/landfill-admin/landfill-entries",
    linkIcon: <RxDashboard />,
  },
];

export const signupSliderImages = [
  {
    image: "/shared/signup_carousel_1.jpg",
  },
  {
    image: "/shared/recycle1.jpg",
  },
  {
    image: "/shared/recycle2.jpg",
  },
];

export const heroSliderImages = [
  {
    imageSrc: "/home/hero__slider1.jpg",
  },
];

export const howItWorksHomeData = [
  {
    imageSrc: "/home/how__it__works2.png",
    title: "Environment Friendly",
  },
  {
    imageSrc: "/home/how__it__works3.png",
    title: "User Incentives",
  },
  {
    imageSrc: "/home/how__it__works4.png",
    title: "User Complaints",
  },
];

export const howItWorksHomeListData = [
  {
    list: "Commercial & Business Waste Management Experts",
  },
  {
    list: "Provide Regular, Reliable and Convenient Services",
  },
];
