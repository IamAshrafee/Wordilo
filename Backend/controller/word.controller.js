const express = require("express");
const wordSchema = require("../models/wordSchema");

function wordCreate(req, res) {
  try {
    const { word, meanings, description } = req.body;

    const words = new wordSchema({
      word,
      meanings,
      description,
    });

    words.save();
    res.status(201).json({
      success: true,
      message: "Word successfully created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Word creation failed",
      error: error.message,
    });
  }
}
function words(req, res) {
  res.send("wow");
}

module.exports = { wordCreate, words };
