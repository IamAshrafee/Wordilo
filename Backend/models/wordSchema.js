const express = require("express");
const { default: mongoose } = require("mongoose");

const wordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  meanings: [{ type: String, required: true }],
});

module.exports = mongoose.model("wordList", wordSchema);