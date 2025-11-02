import React, { useState, useEffect } from "react";
import MainWidth from "../../components/layout/MainWidth";
import WordCard from "../../components/ui/WordCard";
import WordDetailCard from "./WordDetailCard";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

const Collection = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [words, setWords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [groupedWords, setGroupedWords] = useState({});

  // Fetch words from your API
  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/word/get`
        );
        setWords(response.data.data);
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };
    fetchWords();
  }, [words]);

  // Group words by date whenever words change
  useEffect(() => {
    if (words.length > 0) {
      const filteredWords = words.filter((word) =>
        word.word.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const grouped = groupWordsByDate(filteredWords);
      setGroupedWords(grouped);
    }
  }, [words, searchTerm]);

  // This function groups words by their creation date
  const groupWordsByDate = (wordsArray) => {
    const groups = {};

    wordsArray.forEach((word) => {
      // Get just the date part (YYYY-MM-DD)
      const dateString = new Date(word.createAt).toISOString().split("T")[0];

      // If this date doesn't exist in groups yet, create an empty array
      if (!groups[dateString]) {
        groups[dateString] = [];
      }

      // Add this word to the array for this date
      groups[dateString].push(word);
    });



    return groups;
  };

  // Format date to look nice: "1 Nov 2025"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const HandleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handleClose = () => {
    setSelectedWord(null);
  };

  const handleDelete = async (wordId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/word/delete/${wordId}`);
      const newWords = words.filter((word) => word._id !== wordId);
      setWords(newWords);
      const grouped = groupWordsByDate(newWords);
      setGroupedWords(grouped);
      setSelectedWord(null);
    } catch (error) {
      console.error("Error deleting word:", error);
    }
  };

  return (
    <div className="mt-8">
      <MainWidth>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search words..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Mobile Overlay Background */}
        {selectedWord && (
          <div
            className="fixed inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
            onClick={handleClose}
          />
        )}

        <div className={`mt-8 ${selectedWord ? "md:flex md:gap-8" : ""}`}>
          {/* Word Detail Sidebar - appears on LEFT when word is selected */}
          {selectedWord && (
            <>
              {/* Desktop Sidebar - LEFT SIDE */}
              <div className="hidden md:block md:shrink-0 md:w-96">
                <div className="sticky top-8 h-[calc(100vh-4rem)]">
                  <AnimatePresence>
                    {selectedWord && (
                      <WordDetailCard
                        word={selectedWord}
                        handleClose={handleClose}
                        handleDelete={handleDelete}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile Popup */}
              <AnimatePresence>
                {selectedWord && (
                  <motion.div
                    className="fixed inset-x-4 top-1/2 transform -translate-y-1/2 z-50 md:hidden"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <WordDetailCard
                      word={selectedWord}
                      handleClose={handleClose}
                      handleDelete={handleDelete}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

          {/* Word List Section - adjusts width based on selection */}
          <div className={`${selectedWord ? "md:flex-1" : "w-full"} pb-4`}>
            {/* Loop through each date group */}
            {Object.keys(groupedWords).length === 0 ? (
              <p className="text-center text-gray-500">No words found.</p>
            ) : (
              Object.keys(groupedWords)
                .sort()
                .reverse()
                .map((date) => (
                  <div key={date} className="mb-8">
                    <p className="font-istok font-bold my-5">
                      {formatDate(date)}
                    </p>
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="show"
                    >
                      {/* Loop through words for this date */}
                      {groupedWords[date].map((word) => (
                        <WordCard
                          key={word._id}
                          word={word.word}
                          meaning={word.meanings.join(", ")}
                          description={word.description}
                          onClick={() => HandleWordClick(word)}
                        />
                      ))}
                    </motion.div>
                  </div>
                ))
            )}
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default Collection;
