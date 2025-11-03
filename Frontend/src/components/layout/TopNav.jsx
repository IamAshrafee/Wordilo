import React from "react";
import MainWidth from "./MainWidth";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";

const TopNav = () => {
  return (
    <div className="border-b border-gray-200">
      <MainWidth>
        <div className="flex flex-row justify-between items-center py-5">
          <div>
            <Link to={"/create"} className="font-istok font-bold text-2xl">Wordilo</Link>
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