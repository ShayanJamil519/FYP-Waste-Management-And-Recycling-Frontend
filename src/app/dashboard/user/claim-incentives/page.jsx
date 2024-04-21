import ClaimIncentivesForm from "@/components/Dashboard/User/ClaimIncentivesForm";
import IncentivesHistory from "@/components/Dashboard/User/IncentivesHistory";
import React from "react";

const page = () => {
  return (
    <div>
      <ClaimIncentivesForm />
      <IncentivesHistory />
    </div>
  );
};

export default page;
