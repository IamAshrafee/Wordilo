import React, { useState, useEffect, useCallback } from "react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Check if mobile on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch words from your API
  useEffect(() => {
    const fetchWords = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/word/get`
        );
        setWords(response.data.data);
      } catch (error) {
        console.error("Error fetching words:", error);
        setError("Failed to load words. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchWords();
  }, []);

  // Group words by date whenever words or search term change
  useEffect(() => {
    if (words.length > 0) {
      const filteredWords = words.filter((word) =>
        word.word.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const grouped = groupWordsByDate(filteredWords);
      setGroupedWords(grouped);
    } else {
      setGroupedWords({});
    }
  }, [words, searchTerm]);

  // Memoize the grouping function
  const groupWordsByDate = useCallback((wordsArray) => {
    const groups = {};

    wordsArray.forEach((word) => {
      const dateString = new Date(word.createAt).toISOString().split("T")[0];

      if (!groups[dateString]) {
        groups[dateString] = [];
      }

      groups[dateString].push(word);
    });

    return groups;
  }, []);

  // Format date to look nice: "1 Nov 2025"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handleClose = () => {
    setSelectedWord(null);
  };

  const handleDelete = async (wordId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/word/${wordId}`);
      const newWords = words.filter((word) => word._id !== wordId);
      setWords(newWords);
      handleClose();
    } catch (error) {
      console.error("Error deleting word:", error);
      setError("Failed to delete word. Please try again.");
    }
  };

  // Handle escape key to close modal - FIXED: Only disable scroll on mobile
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (selectedWord) {
      document.addEventListener("keydown", handleEscape);

      // ONLY disable body scroll on mobile when modal is open
      if (isMobile) {
        document.body.style.overflow = "hidden";
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      // ONLY re-enable scroll if we're on mobile and had disabled it
      if (isMobile) {
        document.body.style.overflow = "unset";
      }
    };
  }, [selectedWord, isMobile]); // Added isMobile to dependency array

  return (
    <div className="mt-8">
      <MainWidth>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search words..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search words"
          />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Mobile Overlay Background */}
        <AnimatePresence>
          {selectedWord && (
            <>
              {/* Only show overlay on mobile */}
              {isMobile && (
                <motion.div
                  className="fixed inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
                  onClick={handleClose}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </>
          )}
        </AnimatePresence>

        <div className={`mt-8 ${selectedWord ? "md:flex md:gap-8" : ""}`}>
          {/* Word Detail Sidebar - appears on LEFT when word is selected */}
          <AnimatePresence>
            {selectedWord && (
              <>
                {/* Desktop Sidebar - LEFT SIDE */}
                <div className="hidden md:block md:shrink-0 md:w-96">
                  <div className="sticky top-8 h-[calc(100vh-4rem)] overflow-y-auto">
                    <WordDetailCard
                      word={selectedWord}
                      handleClose={handleClose}
                      handleDelete={handleDelete}
                    />
                  </div>
                </div>

                {/* Mobile Popup - Only show on mobile */}
                {isMobile && (
                  <motion.div
                    className="fixed inset-x-4 top-1/2 transform -translate-y-1/2 z-50 md:hidden max-h-[85vh] overflow-hidden"
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
              </>
            )}
          </AnimatePresence>

          {/* Word List Section - adjusts width based on selection */}
          <div className={`${selectedWord ? "md:flex-1" : "w-full"} pb-4`}>
            {/* Empty State */}
            {!loading && Object.keys(groupedWords).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  {searchTerm
                    ? "No words match your search."
                    : "No words found. Start by adding some words!"}
                </p>
              </div>
            )}

            {/* Word Groups */}
            {Object.keys(groupedWords).length > 0 &&
              Object.keys(groupedWords)
                .sort()
                .reverse()
                .map((date) => (
                  <div key={date} className="mb-8">
                    <p className="font-istok font-bold my-5 text-gray-700">
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
                          onClick={() => handleWordClick(word)}
                        />
                      ))}
                    </motion.div>
                  </div>
                ))}
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default Collection;
