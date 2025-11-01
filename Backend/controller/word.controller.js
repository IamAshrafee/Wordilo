const express = require("express");

function wordCreate(req, res) {}
function words(req, res) {
  res.send("wow");
}

module.exports = { wordCreate, words };