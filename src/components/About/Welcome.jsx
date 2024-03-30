import { aboutServicesData } from "@/app/data";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="border rounded shadow-md p-6 max-w-sm mx-auto">
      <div className="flex justify-center mb-4">
        {/* Icon container */}
        <div className="rounded-full bg-[#32A632] p-3">
          <span className="text-[#fff] text-[35px]">{icon}</span>
        </div>
      </div>
      <h1 className="font-semibold mb-4 text-lg text-center text-[#182822] hover:text-[#f29620] transition duration-500 ease-in-out cursor-pointer">
        {title}
      </h1>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

const Welcome = () => {
  return (
    <div className="w-full pt-24 pb-16 px-10 font-poppins bg-[#f7f9f8]">
      <h6 className="text-center font-bold text-[#f29620]">More About Us</h6>
      <h1 className="font-paralucent text-5xl mt-1 mb-4 w-2/4 mx-auto text-center text-[#182822] leading-normal">
        Welcome to Recy-sense
      </h1>

      <p className=" text-[#63716c] w-1/2 text-center mx-auto">
        Our approach not only conserves natural resources but also fosters a
        more resilient and eco-friendly waste management system, thereby
        promoting sustainability at both local and global levels.
      </p>

      <div className="py-12 w-full">
        <div className="flex flex-wrap  justify-center items-center">
          {aboutServicesData.map((service, index) => (
            <div key={index} className="px-4 mb-8 w-full md:w-1/3">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
