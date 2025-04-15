import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const TopNavbar = () => {
  return (
    <nav className="bg-white w-full screen_4k:w-[70%] max-md:px-4 mx-auto flex justify-between items-center max-sm:flex-col py-3 px-20">
      <div className="flex space-x-4">
        <Link href="/about" className="text-gray-700 hover:text-gray-900">
          About
        </Link>
        <Link href="/doctors" className="text-gray-700 hover:text-gray-900">
          Doctors
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-gray-900">
          Contact
        </Link>
        <Link href="/faq" className="text-gray-700 hover:text-gray-900">
          FAQ
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link
          href="tel:+880123456789"
          className=" flex items-center text-gray-700"
        >
          <FaPhone className="mr-1 text-blue-600" />
          +880 1234 56789
        </Link>
        <Link href="mailto:support@yourmail.com" className=" flex items-center">
          <IoMdMail className="mr-1 text-blue-600" />
          support@yourmail.com
        </Link>
      </div>
    </nav>
  );
};

export default TopNavbar;
