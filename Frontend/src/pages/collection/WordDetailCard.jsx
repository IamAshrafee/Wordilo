import React from "react";

const WordDetailCard = () => {
  return (
    <div className="py-4 px-6 border border-gray-200 rounded-lg w-[800px]">
      <div>
        <h2 className="font-istok text-2xl font-bold  mt-2">Book</h2>
        <div className="mt-4">
          <p className="font-istok font-bold text-gray-600">Meaning</p>
          <p className="font-istok">Boi, Khata, Kolom</p>
        </div>
        <div className="mt-4">
          <p className="font-istok font-bold text-gray-600">Description</p>
          <p className="font-istok">Suppose, our academical books</p>
        </div>
      </div>
    </div>
  );
};

export default WordDetailCard;
