import Signup from "@/components/Shared/Signup";

const page = () => {
  return (
    <div
      style={{
        background: "url(/assets/Shared/login__bg.jpg) center center/cover",
      }}
      className="min-h-[90vh] px-32 py-20  w-full "
    >
      <div className="">
        <Signup />
      </div>
    </div>
  );
};

export default page;
