import Signup from "@/components/Shared/Signup";

const page = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient( 135deg, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 0.2)), url('/shared/auth__bg1.png') no-repeat center center/cover",
      }}
      className="min-h-[90vh] px-32 py-20  w-full "
    >
      <Signup />
    </div>
  );
};

export default page;
