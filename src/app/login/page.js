import Login from "@/components/Shared/Login";

const page = () => {
  return (
    <div
      style={{
        background: "url(/assets/Shared/login__bg.jpg) center center/cover",
      }}
      className="min-h-[90vh] px-32  w-full grid lg:grid-cols-2 justify-items-center place-items-start md:place-items-center"
    >
      {/* Left */}
      <div className="col-span-1 ">
        <Login />
      </div>

      {/* Right */}
      <div className="col-span-1">
        <div className=" ">
          <h1 className="text-4xl font-bold uppercase mb-5 text-[#000] ">
            Welcome <br /> Back!
          </h1>
          <p className="text-[#000]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            accusantium ducimus eligendi possimus, praesentium dolorem maxime
            dicta dolore quo soluta provident quisquam impedit amet! Dicta quod
            iste beatae ea assumenda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
