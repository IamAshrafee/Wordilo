import React from "react";
import { XMarkIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const WordDetailCard = ({ word, handleClose, handleDelete }) => {
  if (!word) {
    return null;
  }

  return (
    <div className="py-4 px-6 border border-gray-200 rounded-lg transition-all duration-300 relative sticky top-8">
      <button onClick={handleClose} className="absolute top-4 right-4">
        <XMarkIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
      </button>
      <div>
        <h2 className="font-istok text-2xl font-bold mt-2">{word.word}</h2>
        <div className="mt-4">
          <p className="font-istok font-bold text-gray-600">Meaning</p>
          <p className="font-istok">{word.meanings.join(", ")}</p>
        </div>
        <div className="mt-4">
          <p className="font-istok font-bold text-gray-600">Description</p>
          <p className="font-istok">{word.description}</p>
        </div>
        <div className="mt-6 flex gap-4">
          <button className="cursor-pointer flex items-center gap-2 text-blue-600">
            <PencilIcon className="w-5 h-5" />
            <span>Edit</span>
          </button>
          <button 
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this word?")) {
                handleDelete(word._id);
              }
            }}
            className="cursor-pointer flex items-center gap-2 text-red-600"
          >
            <TrashIcon className="w-5 h-5" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordDetailCard;