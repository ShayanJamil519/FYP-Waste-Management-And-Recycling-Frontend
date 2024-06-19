import SpecificLandfill from "@/components/Landfills/SpecificLandfill";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <SpecificLandfill district={params?.district} />
    </div>
  );
};

export default page;
