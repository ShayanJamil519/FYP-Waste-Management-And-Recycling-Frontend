import Login from "@/components/Shared/Login";
import ProtectedRoute from "@/utils/protectedRoute";

const page = () => {
  return (
    <ProtectedRoute>
      <div
        style={{
          background:
            "linear-gradient( 135deg, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 0.2)), url('/shared/auth__bg1.png') no-repeat center center/cover",
        }}
        className="lg:min-h-[88.5vh] min-h-[90vh]  lg:px-32 px-6 gap-12  w-full grid lg:grid-cols-2 justify-items-center  place-items-center"
      >
        {/* Left */}
        <div className="col-span-1 ">
          <Login />
        </div>

        {/* Right */}
        <div className="lg:col-span-1 lg:block hidden">
          <div>
            <h1 className="text-4xl font-paralucent font-bold uppercase mb-5 text-[#fff]">
              Empowering Sustainability
            </h1>
            <p className="text-[#fff]">
              Join us in our mission to make the world a cleaner, greener place.
              Our platform is designed to educate, inspire, and enable
              individuals and organizations to contribute effectively to waste
              management and recycling efforts. Together, we can reduce waste,
              conserve resources, and make a lasting impact on our planet. Sign
              in to access personalized tips, track your recycling efforts, and
              become part of a community dedicated to environmental stewardship.
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default page;
