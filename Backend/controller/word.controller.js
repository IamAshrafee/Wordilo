const express = require("express");
const wordSchema = require("../models/wordSchema");

// controller to create a word
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

// Controller to get all words
async function words(req, res) {
  try {
    const words = await wordSchema.find();

    res.status(200).json({
      success: true,
      message: "Words fetched successfully.",
      data: words,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: {
        code: 500,
        details: error.message,
      },
    });
  }
}

// controller to get a word
async function word(req, res) {
  try {
    const id = req.params.id;
    const word = await wordSchema.findById(id);
    if (!word) {
      res.status(404).json({
        success: false,
        message: "Word not found",
      });
    }
    res.status(200).json({
      success: true,
      message: `${word.word} successfully fetched`,
      data: word,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: {
        code: 500,
        details: error.message,
      },
    });
  }
}

// controller to update a word
async function updateWord(req, res) {
  try {
    const { word, meanings, description } = req.body;
    const id = req.params.id;

    const previousWord = await wordSchema.findById(id);

    if (!previousWord) {
      return res.status(404).json({
        success: false,
        message: "Word not found",
      });
    }

    const updateWord = await wordSchema.findByIdAndUpdate(
      id,
      {
        $set: { word, meanings, description },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: `${previousWord.word} is successfully updated`,
      data: updateWord,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "word update failed",
      error: {
        code: 500,
        details: error.message,
      },
    });
  }
}

// controller to delete a word
async function deleteWord(req, res) {
  try {
    const id = req.params.id;
    const checkingWord = await wordSchema.findById(id);

    if (!checkingWord) {
      return res.status(404).json({
        success: false,
        message: "word not found",
      });
    }

    const deleteWord = await wordSchema.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: `${deleteWord.word} is successfully deleted`,
      data: deleteWord,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "word delete failed",
      error: {
        code: 500,
        details: error.message,
      },
    });
  }
}

module.exports = { wordCreate, words, word, updateWord, deleteWord };