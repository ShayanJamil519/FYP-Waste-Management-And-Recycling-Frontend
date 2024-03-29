import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowRoundForward, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#111d19] font-poppins text-white text-[15px] py-10 px-16">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-6 gap-16 ">
        {/* Fourth Column */}
        <div className="col-span-2">
          <p className="mb-4">
            We recognize that the right service for home is most important
            chosie, Trashco can provide the waste collection you need for your
            home, with trusted service.
          </p>
          <div className="font-bold text-[#f29620]">
            <div className="flex justify-start items-center gap-3 mb-3">
              <IoMdMail className="text-[25px]" />
              <p>abc.com</p>
            </div>

            <div className="flex justify-start items-center gap-3">
              <FaPhoneAlt className="text-[20px]" />
              <p className="mt-1">9084084-0-1-41041-</p>
            </div>
          </div>
          <div className="flex mt-4"></div>
        </div>

        {/* First Column */}
        <div>
          <h5 className="text-xl font-bold mb-6">Company</h5>
          <ul>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Sustainability
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Leadership Team
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Blog Grid
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog Standard
              </a>
            </li>
          </ul>
        </div>

        {/* Second Column */}
        <div>
          <h5 className="text-xl font-bold mb-6">Services</h5>
          <ul>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Residential Waste
              </a>
            </li>
            {/* ... Other services */}
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="col-span-2">
          <h5 className="text-xl font-bold mb-6">Newsletter</h5>
          <p className="mb-4">
            Sign up for industry alerts, deals, news and insights from Trashco
            company.
          </p>
          <div className="flex mt-4 bg-[#fff] w-fit rounded-md justify-center items-center">
            <input
              type="email"
              className="py-4 px-3  focus:outline-none text-[#20332c] rounded-md"
              placeholder="Your Email Address"
            />
            <button className="p-1 bg-[#20332c] mr-2 w-fit h-fit rounded-full  focus:outline-none">
              <span className="p-0 rounded-full  text-[#fff]  ">
                <IoIosArrowRoundForward className="text-[23px] font-bold" />
              </span>{" "}
              <style jsx>{`
                button:hover span {
                  background-color: #fff;
                  color: #257830;
                }
              `}</style>
            </button>
          </div>
        </div>
      </div>
      {/* Additional Footer Content */}
    </footer>
  );
};

export default Footer;
