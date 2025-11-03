import React from "react";
import { XMarkIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link } from "react-router";

const WordDetailCard = ({ word, handleClose, handleDelete }) => {
  if (!word) {
    return null;
  }

  return (
    <div 
      className="py-6 px-6 border border-gray-200 rounded-lg bg-white relative h-full flex flex-col shadow-lg"
      role="dialog"
      aria-modal="true"
      aria-labelledby="word-detail-title"
    >
      <motion.button 
        onClick={handleClose} 
        className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Close word details"
      >
        <XMarkIcon className="w-6 h-6 text-gray-600" />
      </motion.button>
      
      <div className="flex-1 overflow-y-auto pr-2">
        <h2 id="word-detail-title" className="font-istok text-2xl font-bold mt-2 text-gray-800">
          {word.word}
        </h2>
        
        <div className="mt-6">
          <p className="font-istok font-bold text-gray-600 mb-2">Meaning</p>
          <p className="font-istok text-gray-800">
            {word.meanings?.join(", ") || "No meaning provided"}
          </p>
        </div>
        
        <div className="mt-6">
          <p className="font-istok font-bold text-gray-600 mb-2">Description</p>
          <p className="font-istok text-gray-800 leading-relaxed">
            {word.description || "No description provided"}
          </p>
        </div>
        
        <div className="mt-8 flex gap-4 pt-4 border-t border-gray-100">
          <Link to={`/modify-word/${word._id}`}>
            <motion.button 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Edit word"
            >
              <PencilIcon className="w-5 h-5" />
              <span className="font-medium">Edit</span>
            </motion.button>
          </Link>
          <motion.button 
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this word?")) {
                handleDelete(word._id);
              }
            }}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Delete word"
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