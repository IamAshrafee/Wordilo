import React from "react";
import { XMarkIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const WordDetailCard = ({ word, handleClose, handleDelete }) => {
  if (!word) {
    return null;
  }

  return (
    <div className="py-6 px-6 border border-gray-200 rounded-lg bg-white relative h-full flex flex-col">
      <motion.button 
        onClick={handleClose} 
        className="absolute top-4 right-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <XMarkIcon className="w-6 h-6 text-gray-600" />
      </motion.button>
      
      <div className="flex-1 overflow-y-auto">
        <h2 className="font-istok text-2xl font-bold mt-2 text-gray-800">
          {word.word}
        </h2>
        
        <div className="mt-6">
          <p className="font-istok font-bold text-gray-600 mb-2">Meaning</p>
          <p className="font-istok text-gray-800">
            {word.meanings.join(", ")}
          </p>
        </div>
        
        <div className="mt-6">
          <p className="font-istok font-bold text-gray-600 mb-2">Description</p>
          <p className="font-istok text-gray-800 leading-relaxed">
            {word.description}
          </p>
        </div>
        
        <div className="mt-8 flex gap-4 pt-4 border-t border-gray-100">
          <motion.button 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PencilIcon className="w-5 h-5" />
            <span className="font-medium">Edit</span>
          </motion.button>
          <motion.button 
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this word?")) {
                handleDelete(word._id);
              }
            }}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TrashIcon className="w-5 h-5" />
            <span className="font-medium">Delete</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WordDetailCard;