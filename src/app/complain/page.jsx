"use client";
import Action from "@/components/Complain/Action";
import dynamic from "next/dynamic";

const ComplainForm = dynamic(
  () => import("@/components/Complain/ComplainForm"),
  {
    ssr: false,
  }
);

const MapComponent = dynamic(
  () => import("@/components/Complain/mapComponent"),
  {
    ssr: false,
  }
);

import Hero from "@/components/Shared/Hero";

const page = () => {
  return (
    <>
      <Hero title="Make a Complain" bgImage="/home/hero__slider1.jpg" />

      <div className="my-32 mx-10 bg-[#fff] min-h-[50vh] flex justify-center items-stretch gap-10">
        <Action />
        <div className="w-full">
          <ComplainForm />
          <MapComponent />
        </div>
      </div>
    </>
  );
};

export default page;
