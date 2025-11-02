const wordSchema = require("../models/wordSchema");
const sendResponse = require("../helper/sendResponse");

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
    sendResponse(res, 201, true, "Word successfully created");
  } catch (error) {
    sendResponse(res, 500, false, "Word creation failed", null, {
      code: 500,
      details: error.message,
    });
  }
}

// Controller to get all words
async function words(req, res) {
  try {
    const words = await wordSchema.find();

    sendResponse(res, 200, true, "Words fetched successfully.", words);
  } catch (error) {
    sendResponse(res, 500, false, "Internal server error.", null, {
      code: 500,
      details: error.message,
    });
  }
}

// controller to get a word
async function word(req, res) {
  try {
    const id = req.params.id;
    const word = await wordSchema.findById(id);
    if (!word) {
      return sendResponse(res, 404, false, "Word not found");
    }
    sendResponse(res, 200, true, `${word.word} successfully fetched`, word);
  } catch (error) {
    sendResponse(res, 500, false, "Internal Server Error", null, {
      code: 500,
      details: error.message,
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
      return sendResponse(res, 404, false, "Word not found");
    }

    const updateWord = await wordSchema.findByIdAndUpdate(
      id,
      {
        $set: { word, meanings, description },
      },
      { new: true }
    );

    sendResponse(
      res,
      200,
      true,
      `${previousWord.word} is successfully updated`,
      updateWord
    );
  } catch (error) {
    sendResponse(res, 500, false, "word update failed", null, {
      code: 500,
      details: error.message,
    });
  }
}

// controller to delete a word
async function deleteWord(req, res) {
  try {
    const id = req.params.id;
    const checkingWord = await wordSchema.findById(id);

    if (!checkingWord) {
      return sendResponse(res, 404, false, "word not found");
    }

    const deleteWord = await wordSchema.findByIdAndDelete(id);

    return sendResponse(
      res,
      200,
      true,
      `${checkingWord.word} is successfully deleted`,
      deleteWord
    );
  } catch (error) {
    sendResponse(res, 500, false, "word delete failed", null, {
      code: 500,
      details: error.message,
    });
  }
}

module.exports = { wordCreate, words, word, updateWord, deleteWord };