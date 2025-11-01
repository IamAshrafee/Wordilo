const express = require("express");
const { wordCreate, words } = require("../../controller/word.controller");
const wordRoutes = express.Router();

wordRoutes.post("/create", wordCreate);
wordRoutes.get("/get", words);

module.exports = wordRoutes;
