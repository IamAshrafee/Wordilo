import React from "react";
import MainWidth from "./MainWidth";
import { CgProfile } from "react-icons/cg";

const TopNav = () => {
  return (
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
  );
};

export default TopNav;