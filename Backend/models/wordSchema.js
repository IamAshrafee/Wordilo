const express = require("express");
const { default: mongoose } = require("mongoose");

const wordSchema = new mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now(),
  },
  word: {
    type: String,
    required: true,
  },
  meanings: [{ type: String, required: true }],
  description: {
    type: String,
  },
});

module.exports = mongoose.model("wordList", wordSchema);
