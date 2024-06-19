import SpecificRecyclingPoint from "@/components/RecyclingPoints/SpecificRecyclingPoint";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <SpecificRecyclingPoint district={params?.district} />
    </div>
  );
};

export default page;
