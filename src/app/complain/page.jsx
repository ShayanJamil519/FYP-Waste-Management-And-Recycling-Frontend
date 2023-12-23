"use client";
import Action from "@/components/Complain/Action";
import ComplainForm from "@/components/Complain/ComplainForm";
import Hero from "@/components/Shared/Hero";
import MapComponent from "@/components/Complain/mapComponent";


const page = () => {
  const handleLocationSelect = (location) => {
    // Use the selected location in your form or perform necessary actions
    console.log('Selected Location:', location);
  };
  return (
    <>
      <Hero />

      <div className="my-32 mx-10 bg-[#fff] min-h-[50vh] flex justify-center items-stretch gap-10">
        <Action />
        <ComplainForm />
        <MapComponent onSelectLocation={handleLocationSelect} />
      </div>
    </>
  );
};

export default page;
