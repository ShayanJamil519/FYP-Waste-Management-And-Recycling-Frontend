import RecyclingPoints from "@/components/RecyclingPoints";
import Hero from "@/components/Shared/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero
        title="Find Recycling Points"
        bgImage="/home/hero__slider1.jpg"
        page="showSearch"
      />
      <RecyclingPoints />
    </div>
  );
};

export default page;
