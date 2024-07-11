import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowRoundForward, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#111d19]  font-poppins text-white text-[15px] py-10 px-4 md:px-16">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-10 ">
        {/* Fourth Column */}
        <div className="md:col-span-2">
          <p className="mb-4">
            We recognize that the right service for home is most important
            choice, Recy-sense can provide the waste collection you need for
            your home, with trusted service.
          </p>
          <div className="font-bold text-[#f29620]">
            <div className="flex justify-start items-center gap-3 mb-3">
              <IoMdMail className="text-[25px]" />
              <a href="mailto:recy8001@gmail.com" className="hover:underline">
                recy8001@gmail.com
              </a>
            </div>

            <div className="flex justify-start items-center gap-3">
              <FaPhoneAlt className="text-[20px]" />
              <p className="mt-1">+92 333 0987838</p>
            </div>
          </div>
          <div className="flex mt-4"></div>
        </div>

        {/* First Column */}
        <div>
          <h5 className="text-xl font-bold mb-2 sm:mb-6">Company</h5>
          <ul>
            <li className="mb-3 sm:mb-4">
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="mb-3 sm:mb-4">
              <Link href="/forum" className="hover:underline">
                Community Forum
              </Link>
            </li>
            <li className="mb-3 sm:mb-4">
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li className="mb-3 sm:mb-4">
              <Link href="/complain" className="hover:underline">
                Complain
              </Link>
            </li>
          </ul>
        </div>

        {/* Second Column */}
        <div>
          <h5 className="text-xl font-bold mb-2 sm:mb-6">Entities</h5>
          <ul>
            <li className="mb-3 sm:mb-4">
              <a href="#" className="hover:underline">
                User
              </a>
            </li>
            <li className="mb-3 sm:mb-4">
              <a href="#" className="hover:underline">
                District Admin
              </a>
            </li>
            <li className="mb-3 sm:mb-4">
              <a href="#" className="hover:underline">
                Recycling Point Admin
              </a>
            </li>
            <li className="mb-3 sm:mb-4">
              <a href="#" className="hover:underline">
                Landfill Admin
              </a>
            </li>
            <li className="mb-3 sm:mb-4">
              <a href="#" className="hover:underline">
                Super Admin
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="md:col-span-2">
          <h5 className="text-xl font-bold mb-2 sm:mb-6">Recy-sense</h5>
          <p className="mb-4">
            Sign up for industry alerts, deals, news and insights from Trashco
            company.Leveraging blockchain technology, our software ensures
            transparency and immutability, holding government authorities
            accountable for efficient waste management and empowering citizens
            with reliable data.
          </p>
        </div>
      </div>
      {/* Additional Footer Content */}
    </footer>
  );
};

export default Footer;
