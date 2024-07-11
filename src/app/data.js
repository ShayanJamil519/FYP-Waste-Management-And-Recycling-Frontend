import { RxDashboard } from "react-icons/rx";
import { FaServicestack, FaTruckPickup } from "react-icons/fa6";
import { MdOutlineEvent } from "react-icons/md";
import { TbReport, TbRecycle } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { CiViewTable } from "react-icons/ci";

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

export const sidebarLinksDistrictAdmin = [
  {
    linkText: `Dashboard`,
    linkTo: "/dashboard/district-admin",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Complains`,
    linkTo: "/dashboard/district-admin/all-complaints",
    linkIcon: <TbReport />,
  },
  {
    linkText: `Incentives`,
    linkTo: "/dashboard/district-admin/all-incentives",
    linkIcon: <GoGift />,
  },

  {
    linkText: `Community Waste Movements`,
    linkTo: "/dashboard/district-admin/community-waste-movements",
    linkIcon: <TbRecycle />,
  },
  {
    linkText: `Community Waste Movements Entries`,
    linkTo: "/dashboard/district-admin/community-waste-movement-entries",
    linkIcon: <CiViewTable />,
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
  {
    linkText: `Assign Roles`,
    linkTo: "/dashboard/admin/assign-roles",
    linkIcon: <RxDashboard />,
  },
];

export const sidebarLinksUser = [
  {
    linkText: `Dashboard`,
    linkTo: "/dashboard/user",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Complaints`,
    linkTo: "/dashboard/user/complaints",
    linkIcon: <RxDashboard />,
  },
  {
    linkText: `Claim Incentives`,
    linkTo: "/dashboard/user/claim-incentives",
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
    list: "Comprehensive Waste Management & Recycling Solutions",
  },
  {
    list: "Delivering Efficient, Sustainable, and User-Friendly Services",
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
    title: "User Registration",
    description:
      "Users sign up and set up their profiles with necessary details. They can then schedule waste pickups at their convenience, with real-time tracking at each stage of the process. Continuous updates based on user feedback ensure optimal performance and improvement.",
  },
  {
    icon: <FaTruckPickup />,
    title: "Waste Management",
    description:
      "Advanced technology sorts collected waste into recyclables, compostables, and landfill waste. Users can file and track complaints through the platform, ensuring quick resolution. Comprehensive reports and data insights help system improve their waste management practices.",
  },
  {
    icon: <MdOutlineEvent />,
    title: "System Integration",
    description:
      "The system integrates with external services using blockchain for secure transactions and API integration for enhanced functionality. Educational resources and community events promote sustainable practices, while robust security measures ensure data safety and regulatory compliance. ",
  },
];

export const aboutaccordionOurMissionData = [
  {
    title: "Reducing Waste",
    content:
      "Our primary goal is to reduce the amount of waste generated. We implement advanced sorting and processing technologies to ensure that as much waste as possible is diverted from landfills and repurposed in sustainable ways.",
  },
  {
    title: "Reduce Program",
    content:
      "The Reduce Program focuses on educating individuals and businesses about minimizing waste production. By promoting practices such as reducing single-use items and choosing products with minimal packaging, we aim to significantly lower the waste footprint.",
  },
  {
    title: "Recycle More",
    content:
      "We encourage and facilitate increased recycling efforts through user-friendly services and community initiatives. Our comprehensive recycling programs are designed to make recycling accessible and efficient for everyone.",
  },
  {
    title: "Reduce Program",
    content:
      "The Reduce Program focuses on educating individuals and businesses about minimizing waste production. By promoting practices such as reducing single-use items and choosing products with minimal packaging, we aim to significantly lower the waste footprint.",
  },
  {
    title: "Recycle More",
    content:
      "We encourage and facilitate increased recycling efforts through user-friendly services and community initiatives. Our comprehensive recycling programs are designed to make recycling accessible and efficient for everyone.",
  },
];

export const aboutWasteBreakDownProgressBarData = [
  { label: "Construction Waste", percentage: 95 },
  { label: "Manufacturing Waste", percentage: 88 },
  { label: "Retail Waste", percentage: 77 },
  { label: "Retail Waste", percentage: 20 },
  { label: "Retail Waste", percentage: 64 },
];

export const topicCardsData = [
  {
    category: "MEMBER POST",
    title: "Setting up content and creative project tasks",
    authorName: "Nelson Martinez",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "March 23, 2024 01:38",
  },
  {
    category: "DEMINAR",
    title: "Forecasting Made Easy: Smooth Resource Allocation...",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:46",
  },
  {
    category: "FROM WRIKE",
    title: "Exciting Announcement for PMI Certified Members!",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:37",
  },
  {
    category: "MEMBER POST",
    title: "Setting up content and creative project tasks",
    authorName: "Nelson Martinez",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "March 23, 2024 01:38",
  },
  {
    category: "DEMINAR",
    title: "Forecasting Made Easy: Smooth Resource Allocation...",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:46",
  },
  {
    category: "FROM WRIKE",
    title: "Exciting Announcement for PMI Certified Members!",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:37",
  },
  {
    category: "MEMBER POST",
    title: "Setting up content and creative project tasks",
    authorName: "Nelson Martinez",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "March 23, 2024 01:38",
  },
  {
    category: "DEMINAR",
    title: "Forecasting Made Easy: Smooth Resource Allocation...",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:46",
  },
  {
    category: "FROM WRIKE",
    title: "Exciting Announcement for PMI Certified Members!",
    authorName: "Lisa",
    authorImage: "/shared/testimonials__1.jpg",
    timestamp: "Monday at 19:37",
  },
];

export const postsData = [
  {
    id: 1,
    name: "janet andrews",
    date: "January 23, 2024 21:41",
    content:
      "One of the biggest challenges of Wrike is finding/coordinating tasks that relate to the same project but ALL HAVE DIFFERENT TICKET NUMBERS...",
    likes: 2,
    comments: [
      {
        id: 1,
        name: "janet andrews",
        date: "January 23, 2024 21:42",
        content: "Sorry for the unproofed comment above...",
      },
      {
        id: 2,
        name: "peter parker",
        date: "January 24, 2024 08:30",
        content:
          "This is indeed a significant issue that needs to be addressed!",
      },
    ],
  },
];
