import Login from "@/components/Shared/Login";


const page = () => {
  return (
    <div
      style={{
        background: "url(./assets/Shared/login__bg.jpg) center center/cover",
      }}
      className="min-h-screen grid lg:grid-cols-2 justify-items-center place-items-start md:place-items-center"
    >
      {/* Left */}
      <Login/>
      

      {/* Right */}
      <div className="hidden lg:flex justify-end px-10">
        <div className=" lg:w-2/4 ">
          <h1 className="text-4xl font-bold uppercase mb-5 text-[#fff] ">
            Welcome <br /> Back!
          </h1>
          <p className="text-[#fff]">
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
