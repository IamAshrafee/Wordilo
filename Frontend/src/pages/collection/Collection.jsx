import React, { useState, useEffect } from "react";
import MainWidth from "../../components/layout/MainWidth";
import WordCard from "../../components/ui/WordCard";
import WordDetailCard from "./WordDetailCard";
import axios from "axios";

const Collection = () => {
  const [isClicked, setClicked] = useState(false);
  const [words, setWords] = useState([]);
  const [groupedWords, setGroupedWords] = useState({});

  // Fetch words from your API
  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/word/get"
        );
        // const data = response;
        setWords(response.data.data); // data.data because your response has { success, message, data }
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };
    fetchWords();
  }, []);

  // Group words by date whenever words change
  useEffect(() => {
    if (words.length > 0) {
      const grouped = groupWordsByDate(words);
      setGroupedWords(grouped);
    }
  }, [words]);

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

    console.log(groupedWords);


  const HandleWordClick = () => {
    setClicked(!isClicked);
  };

  return (
    <div className="mt-8">
      <MainWidth>
        <div className="mt-8 flex gap-4">
          <div className="pb-4">
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
                        onClick={HandleWordClick}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
          {isClicked && <WordDetailCard />}
        </div>
      </MainWidth>
    </div>
  );
};

export default Collection;
