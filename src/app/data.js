import { RxDashboard } from "react-icons/rx";
import { FaServicestack, FaTruckPickup } from "react-icons/fa6";
import { MdOutlineEvent } from "react-icons/md";

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

export const generateSidebarLinksUser = (id) => {
  const sidebarLinks = [
    {
      linkText: `Home`,
      linkTo: "/dashboard/user/home",
      linkIcon: <RxDashboard />,
    },
    {
      linkText: `Replies`,
      linkTo: `/dashboard/user/${id}/replies`,
      linkIcon: <RxDashboard />,
    },
  ];

  return sidebarLinks;
};

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

export const sidebarLinksAdmin = [
  {
    linkText: `Dashboard`,
    linkTo: "/dashboard/admin",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `New Landfill`,
    linkTo: "/dashboard/admin/new-landfill",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `New Recycling Point`,
    linkTo: "/dashboard/admin/new-recycling-point",
    linkIcon: <RxDashboard />,
  },

  {
    linkText: `All Landfills`,
    linkTo: "/dashboard/admin/all-landfills",
    linkIcon: <RxDashboard />,
  },

  {
    linkText: `All Recycling Points`,
    linkTo: "/dashboard/admin/all-recycling-points",
    linkIcon: <RxDashboard />,
  },

  {
    linkText: `All Users`,
    linkTo: "/dashboard/admin/all-users",
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

export const testimonialsData = [
  {
    name: "Lamar Owens",
    title: "CEO",

    image: "/shared/testimonials__1.jpg",
    text: "I felt really comfortable and trust them. They have a lot of security measures in place. Pretty cheap for such great peace of mind!",
  },
  {
    name: "Jessica Pearson",
    title: "Marketing Director",
    image: "/shared/testimonials__1.jpg",
    text: "The service was exceptional! The staff was attentive and professional. Highly recommend to anyone looking for top-notch service.",
  },
  {
    name: "Chris Wong",
    title: "Freelance Developer",
    image: "/shared/testimonials__1.jpg",
    text: "Their dedication to maintaining high standards is evident in their work. Absolutely no complaints and will be returning for their services again!",
  },
];

export const aboutServicesData = [
  {
    icon: <FaServicestack />,
    title: "Corporate Services",
    description:
      "Guaranteed that all of your universal waste management is performed safely and responsibly.",
  },
  {
    icon: <FaTruckPickup />,
    title: "Convenient Pickup",
    description:
      "We offer business pickup services to safely recycle your electronics in a safe manner.",
  },
  {
    icon: <MdOutlineEvent />,
    title: "E-waste Events",
    description:
      "We work with non-profits, businesses, and other organizations to host community e-waste events.",
  },
];

export const aboutaccordionOurMissionData = [
  {
    title: "Reducing Waste",
    content:
      "Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    title: "Reduce Program",
    content: "Additional content for Reduce Program goes here...",
  },
  {
    title: "Recycle More",
    content: "Additional content for Recycle More goes here...",
  },
  {
    title: "Reduce Program",
    content: "Additional content for Reduce Program goes here...",
  },
  {
    title: "Recycle More",
    content: "Additional content for Recycle More goes here...",
  },
];

export const aboutWasteBreakDownProgressBarData = [
  { label: "Construction Waste", percentage: 95 },
  { label: "Manufacturing Waste", percentage: 88 },
  { label: "Retail Waste", percentage: 77 },
  { label: "Retail Waste", percentage: 20 },
  { label: "Retail Waste", percentage: 64 },
];
