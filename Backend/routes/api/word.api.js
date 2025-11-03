const express = require("express");
const {
  wordCreate,
  words,
  word,
  updateWord,
  deleteWord,
} = require("../../controller/word.controller");
const wordRoutes = express.Router();

wordRoutes.post("/create", wordCreate);
wordRoutes.get("/get", words);
wordRoutes.get("/:id", word);
wordRoutes.put("/update/:id", updateWord);
wordRoutes.delete("/:id", deleteWord);

module.exports = wordRoutes;
