import React from "react";
import MainWidth from "../../components/layout/MainWidth";

const CreateWord = () => {
  return (
    <div className="mt-10 flex justify-center items-center">
      <MainWidth>
        <div className="w-[800px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-istok font-bold text-2xl">
              Create a New Vocabulary
            </h1>
            <p className="font-istok font-medium text-gray-500">
              Complete the fields you want to save for the specific word
            </p>
          </div>
          <div className="mt-8">
            <div className="flex flex-col mt-4">
              <label htmlFor="word" className="font-istok font-bold text-base">
                Word
              </label>
              <input
                type="text"
                id="word"
                name="word"
                placeholder="Type your word"
                className="border border-gray-300 rounded focus:border focus:border-gray-500 outline-none p-1 px-2 font-istok"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor="meanings"
                className="font-istok font-bold text-base"
              >
                Meanings
              </label>
              <input
                type="text"
                id="meanings"
                name="meanings"
                placeholder="Type meanings sperated by comma"
                className="border border-gray-300 rounded focus:border focus:border-gray-500 outline-none p-1 px-2 font-istok"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor="description"
                className="font-istok font-bold text-base"
              >
                Description
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                rows={2}
                placeholder="e.g. usages of the word, why its invented, different purchase etc"
                className="border border-gray-300 rounded focus:border focus:border-gray-500 outline-none p-1 px-2 font-istok"
              />
            </div>
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default CreateWord;
