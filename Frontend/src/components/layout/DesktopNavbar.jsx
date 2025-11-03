import { CgProfile } from "react-icons/cg";
import React from "react";
import { Link } from "react-router";

const DesktopNavbar = () => {
  return (
    <div>
      <div className="font-istok font-bold flex flex-row gap-18 justify-center items-center py-3 border-b border-gray-200">
        <div>
          <Link to={"/create"} className="cursor-pointer hover:text-blue-600 transition-colors">
            Create
          </Link>
        </div>
        <div>
          <Link to={"/collection"} className="cursor-pointer hover:text-blue-600 transition-colors">
            Collection
          </Link>
        </div>
        <div>
          <Link to={"/flashcards"} className="cursor-pointer hover:text-blue-600 transition-colors">
            Flashcards
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;