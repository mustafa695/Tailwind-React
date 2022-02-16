import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 relative">
      <div className="bg-footer relative z-10">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-[#10104dc7] -z-10"></div>
        <div className="z-50 pt-52 pb-36">
          <div>
            <h1 className="text-white text-5xl text-center font-semibold">
              Contact For RSVP
            </h1>
          </div>
          <div className="text-center mt-4">
            <button
              type="button"
              className="text-white mt-3 text-lg bg-red-600 px-10 border-red-600 border py-3 duration-300 ease-in hover:bg-transparent hover:border hover:border-red-600"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#0a1d38] pt-32 pb-20">
        <div className="w-9/12 mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="basis-3/6">
              <h3 className="text-white text-xl mb-10 font-semibold">
                Services
              </h3>
              <div className="flex items-end">
                <div className="flex-1 mr-3">
                  <input
                    type="text"
                    placeholder="Enter your mail"
                    className="w-full pb-3 border-[#334a60] border-b focus:text-white outline-0 bg-transparent text-white"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-[#615cfd] text-white py-3 px-10"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <p className="text-white mt-5 font-normal text-md">
                Esteem spirit temper too say adieus who direct esteem esteems
                luckily.
              </p>
            </div>
            <div className="basis-5/12">
              <div className="ml-0 md:ml-24 mt-10 md:mt-0">
                <h4 className="text-white text-xl mb-10 font-semibold">
                  Contact Me
                </h4>
                <div className="text-[#c7c7c7] text-xs leading-7">
                  <p className="cursor-pointer hover:text-red-600 hover:font-semibold ease-in-out duration-300">
                    conbusi@support.com
                  </p>
                  <p className="cursor-pointer hover:text-red-600 hover:font-semibold ease-in-out duration-300">
                    +10 873 672 6782
                  </p>
                  <p className="cursor-pointer hover:text-red-600 hover:font-semibold ease-in-out duration-300">
                    600/D, Green road, Kings Garden NewYork-6732
                  </p>
                </div>
                <div className="flex mt-8 space-x-3 text-white">
                  <div className="w-9 cursor-pointer bg-[#3b5797] h-9 rounded-full flex justify-center items-center">
                    <FaFacebookF />
                  </div>
                  <div className="w-9 cursor-pointer bg-[#db4137] h-9 rounded-full flex justify-center items-center">
                    <FaGooglePlusG />
                  </div>
                  <div className="w-9 cursor-pointer bg-[#00aced] h-9 rounded-full flex justify-center items-center">
                    <FaTwitter />
                  </div>
                  <div className="w-9 cursor-pointer bg-[#ac907a] h-9 rounded-full flex justify-center items-center">
                    <FaInstagram />
                  </div>
                  <div className="w-9 cursor-pointer bg-[#ac0e00] h-9 rounded-full flex justify-center items-center">
                    <FaYoutube />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
