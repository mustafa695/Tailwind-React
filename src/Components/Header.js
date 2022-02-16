import React from "react";
import Logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
const Header = () => {
  return (
    <header className="absolute w-full top-0 left-0 right-0 z-50">
      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row text-white w-full lg:items-center">
          <div className="basis-1/4">
            <img src={Logo} alt="logo" className="lg:mx-auto" />
          </div>
          <div className="basis-3/6 hidden lg:block">
            <div className="flex justify-center">
              <li className="list-none mr-8">
                <a
                  className="font-medium hover:text-red-600 transition ease-in-out duration-300"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="list-none mr-8">
                <a
                  className="font-medium hover:text-red-600 transition ease-in-out duration-300"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="list-none mr-8">
                <a
                  className="font-medium hover:text-red-600 transition ease-in-out duration-300"
                  href="#"
                >
                  Track
                </a>
              </li>
              <li className="list-none mr-8">
                <a
                  className="font-medium hover:text-red-600 transition ease-in-out duration-300"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li className="list-none mr-8">
                <a
                  className="font-medium hover:text-red-600 transition ease-in-out duration-300"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </div>
          </div>
          <div className="basis-1/4 hidden lg:block">
            <div className="flex justify-center space-x-4">
              <div className="border border-gray-500 rounded-full w-8 h-8 flex justify-center items-center">
                <FaFacebookF size={14} />
              </div>
              <div className="border border-gray-500 rounded-full w-8 h-8 flex justify-center items-center">
                <FaTwitter size={14} />
              </div>
              <div className="border border-gray-500 rounded-full w-8 h-8 flex justify-center items-center">
                <FaInstagram size={14} />
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="block lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
