import React from "react";
import { motion } from "framer-motion";

const WordCard = ({ word, meaning, description, onClick }) => {
  const cardVariants = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="bg-white border border-gray-200 py-4 px-5 grow rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow"
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      variants={cardVariants}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View details for ${word}`}
    >
      <h4 className="font-istok font-bold text-xl mb-2 text-gray-800">{word}</h4>
      <p className="font-istok text-gray-700 mb-2">{meaning}</p>
      <p className="font-istok text-gray-500 text-sm line-clamp-2">{description}</p>
    </motion.div>
  );
};

export default WordCard;