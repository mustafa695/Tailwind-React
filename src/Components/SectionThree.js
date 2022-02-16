import React from "react";
import img1 from "../assets/cbaner.png";
import img2 from "../assets/track1.png";
import img3 from "../assets/track2.png";
const SectionThree = () => {
  const track = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ];
  return (
    <section className="mt-7 mb-4">
      <h1 className="text-[#0a1d38] text-5xl text-center mb-16">
        Latest Tracks
      </h1>
      <div className="flex justify-center">
        <div className="basis-3/4 md:basis-4/5 lg:basis-3/5">
          {track.map((item) => {
            return (
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
                <div className="flex items-center md:justify-between space-x-12">
                  <div>
                    <img src={item.img} alt="noImage" className="w-auto" />
                  </div>
                  <div>
                    <h3 className="text-[#0a1d38] text-3xl font-semibold">
                      Frando Kally
                    </h3>
                    <p className="font-light">10 November, 2019</p>
                    <p className="mt-4">00:00 00:02</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <button
                    type="button"
                    className="hover:bg-red-600 duration-500 hover:text-white border font-semibold border-red-600 text-red-600 px-11 py-3"
                  >
                    Buy Album
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
