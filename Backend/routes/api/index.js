const express = require("express");
const apiRoutes = express.Router();
const userRoutes = require("./user.api");
const wordRoutes = require("./word.api");

apiRoutes.use("/word", wordRoutes);
apiRoutes.use("/user", userRoutes);

module.exports = apiRoutes;
