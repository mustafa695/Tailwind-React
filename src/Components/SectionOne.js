import React from "react";
import about from "../assets/about.png";
import sign from "../assets/sign.png";

const SectionOne = () => {
  return (
    <section className="container mx-auto my-28">
      <div className="flex w-4/5 mx-auto md:w-auto flex-col md:flex-row items-center justify-center">
        <div className="basis-2/5">
          <img
            src={about}
            alt="noImage"
            className="w-full md:w-3/4 object-cover mx-auto"
          />
        </div>
        <div className="basis-2/5 mt-10 md:mt-0">
          <h2 className="text-[#0a1d38] font-semibold text-5xl mb-6">
            Jack Kalib
          </h2>
          <p className="lg:pr-14 font-light text-lg">
            Esteem spirit temper too say adieus who direct esteem. It esteems
            luckily or picture placing drawing. Apartments frequently or
            motionless on reasonable projecting expression enim ad minim veniam
            quis nostrud exercitation we have supported programmes to help
            alleviate human suffering through animal welfare when people might
            depend.
          </p>
          <img src={sign} alt="sign" className="mt-12" />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
