import React from "react";

const WordCard = ({ word, meaning, description, onClick }) => {
  return (
    <div
      className="bg-white border border-gray-200 py-4 px-5 grow rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <h4 className="font-istok font-bold text-xl mb-2">{word}</h4>
      <p className="font-istok text-gray-800">{meaning}</p>
      <p className="font-istok text-gray-400">{description}</p>
    </div>
  );
};

export default WordCard;
