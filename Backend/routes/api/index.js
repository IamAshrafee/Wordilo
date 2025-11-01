const express = require("express");
const apiRoutes = express.Router();
const wordRoutes = require("./word.api");

apiRoutes.use("/word", wordRoutes);

module.exports = apiRoutes;
