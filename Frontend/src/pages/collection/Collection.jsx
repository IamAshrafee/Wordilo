import React, { useState } from "react";
import MainWidth from "../../components/layout/MainWidth";
import WordCard from "../../components/ui/WordCard";
import WordDetailCard from "./WordDetailCard";

const Collection = () => {
  const [isClicked, setClicked] = useState(false);

  const HandleWordClick = () => {
    if (isClicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <div className="mt-8">
      <MainWidth>
        <div className="mt-8 flex gap-4">
          <div className="pb-4">
            <p className="font-istok font-bold my-5">1 Nov 2025</p>
            <div className="flex flex-wrap gap-4">
              <WordCard
                word="Book"
                meaning="A collection of paper binned where some knowledge written
                  there"
                description="Suppose, our academical books"
                onClick={HandleWordClick}
              />
              <WordCard
                word="Book"
                meaning="A collection of paper binned where some knowledge written
                  there"
                description="Suppose, our academical books"
                onClick={HandleWordClick}
              />
              <WordCard
                word="Book"
                meaning="A collection of paper binned where some knowledge written
                  there"
                description="Suppose, our academical books"
                onClick={HandleWordClick}
              />
              <WordCard
                word="Book"
                meaning="A collection of paper binned where some knowledge written
                  there"
                description="Suppose, our academical books"
                onClick={HandleWordClick}
              />
              <WordCard
                word="Book"
                meaning="A collection of paper binned where some knowledge written
                  there"
                description="Suppose, our academical books"
                onClick={HandleWordClick}
              />
              <WordCard
                word="Book"
                meaning="A collection of paper binned where some knowledge written
                  there"
                description="Suppose, our academical books"
                onClick={HandleWordClick}
              />
            </div>
          </div>
          {isClicked ? <WordDetailCard></WordDetailCard> : ""}
        </div>
      </MainWidth>
    </div>
  );
};

export default Collection;
