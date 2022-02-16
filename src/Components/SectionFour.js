import React from "react";
import img1 from "../assets/g1.png";
import img2 from "../assets/g2.png";
import img3 from "../assets/g3.png";
import img4 from "../assets/g4.png";
import img5 from "../assets/g5.png";
import { FiPlus } from "react-icons/fi";

const SectionFour = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-[#0a1d38] text-5xl text-center mb-16">
        Image Galleries
      </h1>
      <div className="flex justify-center">
        <div className="basis-full lg:basis-4/5">
          <div className="flex-none md:flex flex-col md:flex-row items-end lg:space-x-6">
            <div className="basis-2/5">
              <div>
                <img className="hover:opacity-0.7 w-full lg:w-auto" src={img1} alt="noImage"/>
              </div>
            </div>
            <div className="basis-3/5">
              <img className="hover:opacity-0.7 w-full lg:w-auto" src={img2} alt="noImage" />
            </div>
          </div>
          <div className="flex-none md:flex flex-col md:flex-row flex-wrap lg:flex-nowrap lg:mt-6 mb-8 ">
            <div className="basis-3/6 lg:basis-4/12">
              <img className="hover:opacity-0.7 w-full lg:w-auto" src={img3} alt="noImage" />
            </div>
            <div className="basis-3/6 lg:basis-4/12">
              <img className="hover:opacity-0.7 w-full lg:w-auto" src={img4} alt="noImage" />
            </div>
            <div className="basis-3/6 lg:basis-4/12">
              <img className="hover:opacity-0.7 w-full lg:w-auto" src={img5} alt="noImage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
