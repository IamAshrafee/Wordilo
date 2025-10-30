import { CgProfile } from "react-icons/cg";
import React from "react";
import MainWidth from "./MainWidth";

const DesktopNavbar = () => {
  return (
    <div>
      {/* First row nav  */}
      <div className="border-b border-gray-200">
        <MainWidth>
          <div className="flex flex-row justify-between items-center py-5">
            <div>
              <p className="font-istok font-bold text-2xl">Wordilo</p>
            </div>
            <div>
              <CgProfile size={28} />
            </div>
          </div>
        </MainWidth>
      </div>

      {/* second row nav  */}

      <div className="font-istok font-bold flex flex-row gap-18 justify-center items-center py-3 border-b border-gray-200">
        <div>
          <p className="cursor-pointer">Create</p>
        </div>
        <div>
          <p className="cursor-pointer">Collection</p>
        </div>
        <div>
          <p className="cursor-pointer">Flashcards</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
