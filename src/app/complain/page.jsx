import Action from "@/components/Complain/Action";
import ComplainForm from "@/components/Complain/ComplainForm";
import Hero from "@/components/Shared/Hero";

const page = () => {
  return (
    <>
      <Hero />

      <div className="my-32 mx-10 bg-[#fff] min-h-[50vh] flex justify-center items-stretch gap-10">
        <Action />
        <ComplainForm />
      </div>
    </>
  );
};

export default page;
