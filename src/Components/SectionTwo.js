import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
const SectionTwo = () => {
  let data = [
    {
      id: 1,
      img: s1,
      title: "Shadows of My Dream",
    },
    {
      id: 2,
      img: s2,
      title: "Shadows of My Dream",
    },
    {
      id: 3,
      img: s3,
      title: "Shadows of My Dream",
    },
    {
      id: 4,
      img: s4,
      title: "Shadows of My Dream",
    },
  ];
  
  return (
    <section className="mb-28">
      <div className="flex flex-wrap lg:flex-nowrap lg:space-x-1">
        {data.map((i) => {
          return (
            <div className="basis-full md:basis-3/6 lg:basis-1/4">
              <div className="group relative cursor-pointer overflow-hidden">
                <img src={i.img} alt="noImage" className="w-full lg:w-auto"/>
                <div className="absolute opacity-0 ease-in-out duration-700 group-hover:top-1/2 group-hover:opacity-100 group-hover:visible top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 invisible">
                  <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <BsFillPlayFill size={26} color="#fff" />
                  </div>
                </div>
                <div className="absolute ease-in-out duration-700  group-hover:visible group-hover:bottom-8 -bottom-8 left-8 z-50 invisible">
                  <h3 className="text-white font-bold text-3xl md:text-xl">
                    Shadows of My Dream
                  </h3>
                </div>
                <div className="group-hover:visible absolute invisible top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000073]"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionTwo;
