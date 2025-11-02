require("dotenv").config();
const express = require("express");
const router = require("./routes");
const dbConnection = require("./config/dbConnection");
var cors = require("cors");
const app = express();

dbConnection();
app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("server working");
});

const port = 3000;
app.listen(port, () => {
  console.log("server is running");
});
