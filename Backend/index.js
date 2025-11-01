const express = require("express");
const router = require("./routes");
const app = express();

app.use(router);

app.get("/", (req, res) => {
  res.send("server working");
});

const port = 3000;
app.listen(port, () => {
  console.log("server is running");
});