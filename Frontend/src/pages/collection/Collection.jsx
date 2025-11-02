import React, { useState, useEffect } from "react";
import MainWidth from "../../components/layout/MainWidth";
import WordCard from "../../components/ui/WordCard";
import WordDetailCard from "./WordDetailCard";
import axios from "axios";

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
          "http://localhost:3000/api/v1/word/get"
        );
        setWords(response.data.data);
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };
    fetchWords();
  }, []);

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

    console.log(groups);

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
      await axios.delete(`http://localhost:3000/api/v1/word/delete/${wordId}`);
      setWords(words.filter((word) => word._id !== wordId));
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

        <div
          className={`mt-8 grid gap-4 ${
            selectedWord ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {/* Word List Section - adjusts width based on selection */}
          <div
            className={`${
              selectedWord ? "md:col-span-2" : "col-span-full"
            } pb-4`}
          >
            {/* Loop through each date group */}
            {Object.keys(groupedWords)
              .sort()
              .reverse()
              .map((date) => (
                <div key={date} className="mb-8">
                  <p className="font-istok font-bold my-5">
                    {formatDate(date)}
                  </p>
                  <div className="flex flex-wrap gap-4">
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
                  </div>
                </div>
              ))}
          </div>

          {/* Word Detail Sidebar - only show when a word is selected */}
          {selectedWord && (
            <div className="md:col-span-1">
              <WordDetailCard
                word={selectedWord}
                handleClose={handleClose}
                handleDelete={handleDelete}
              />
            </div>
          )}
        </div>
      </MainWidth>
    </div>
  );
};

export default Collection;
