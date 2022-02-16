import React from "react";
import Header from "../../Components/Header";
import banner1 from "../../assets/cbaner.png";
import SectionOne from "../../Components/SectionOne";
import SectionTwo from "../../Components/SectionTwo";
import SectionThree from "../../Components/SectionThree";
import SectionFour from "../../Components/SectionFour";
import Footer from "../../Components/Footer";

const index = () => {
  return (
    <>
      <Header />
      {/* banner */}
      <div className="bg-banner bg-center h-900 relative">
        <div className="flex justify-center items-center h-full w-full text-6xl">
          <h1 className="text-white text-7xl lg:text-9xl font-semibold">MUSICIAN</h1>
        </div>
        <div className="absolute pl-16 pt-8 md:pt-0 bg-black md:bg-transparent md:pl-0 bottom-0 left-2/4 -translate-x-2/4 w-full lg:w-2/4">
          <div className="flex flex-col md:flex-row justify-around lg:justify-between md:items-center">
            <div className="flex items-center space-x-12">
              <div>
                <img
                  src={banner1}
                  alt="noImage"
                  className="w-40 h-36 object-cover"
                />
              </div>
              <div>
                <h3 className="text-white text-3xl font-semibold mb-1">
                  Frando Kally
                </h3>
                <p className="text-[#808080] font-normal">10 November, 2019</p>
                <p className="text-[#212529] mt-4">00:00 00:02</p>
              </div>
            </div>
            <div className="my-8 md:mt-0">

            <button
              type="button"
              className="text-red-600 cursor-pointer text-md font-semibold border border-red-600 py-2.5 px-9"
            >
              Buy Album
            </button>
            </div>
          </div>
        </div>
      </div>
      {/* section-one */}
      <SectionOne />
      {/* section-two */}
      <SectionTwo />
      {/* sectiob-three Trends*/}
      <SectionThree />
      <hr className="mt-12 mb-36" />
      {/* section-four Image Gallery */}
      <SectionFour />
      {/* footer */}
      <Footer />
    </>
  );
};

export default index;
