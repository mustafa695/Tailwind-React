import React from "react";
import { IoIosMenu } from "react-icons/io";
const MobileMenu = () => {
  return (
    <div className="bg-[#4c4c4c] w-full py-2 mt-3">
      <div className="text-right mr-4">
        <button
          type="button"
          className="text-white bg-[#222222] py-2 px-4 font-bold rounded-md"
        >
          <div className="flex items-center">
            <span>MENU</span>
            <span className="ml-2">
              <IoIosMenu size={24}/>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
