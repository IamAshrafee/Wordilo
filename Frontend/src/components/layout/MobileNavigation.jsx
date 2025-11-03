import React from "react";
import { Link } from "react-router";
import { MdCreate, MdCollectionsBookmark, MdFlashOn } from "react-icons/md";

const MobileNavigation = () => {
  return (
    <div className="btm-nav flex items-center justify-around bg-white">
      <Link
        to={"/create"}
        className="px-5 py-3 hover:bg-gray-300 cursor-pointer flex flex-col items-center justify-center"
      >
        <MdCreate size={24} />
        <span className="btm-nav-label text-sm">Create</span>
      </Link>
      <Link
        to={"/collection"}
        className="px-5 py-3 hover:bg-gray-300 cursor-pointer flex flex-col items-center justify-center"
      >
        <MdCollectionsBookmark size={24} />
        <span className="btm-nav-label text-sm">Collection</span>
      </Link>
      <Link
        to={"/flashcards"}
        className="px-5 py-3 hover:bg-gray-300 cursor-pointer flex flex-col items-center justify-center"
      >
        <MdFlashOn size={24} />
        <span className="btm-nav-label text-sm">Flashcards</span>
      </Link>
    </div>
  );
};

export default MobileNavigation;