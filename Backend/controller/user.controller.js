const sendResponse = require("../helper/sendResponse");
const userSchema = require("../models/userSchema");

// create a user
function createUser(req, res) {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return sendResponse(res, 500, false, "All fields are required");
    }

    const users = new userSchema({
      username,
      email,
      password,
    });
    users.save();
    sendResponse(res, 201, true, "User successfully created");
  } catch (error) {
    sendResponse(res, 500, false, "User creation failed", null, {
      code: 500,
      details: error.message,
    });
  }
}

// get all users
async function users(req, res) {
  try {
    const users = await userSchema.find();

    sendResponse(res, 200, true, "Users fetched successfully.", users);
  } catch (error) {
    sendResponse(res, 500, false, "Internal server error.", null, {
      code: 500,
      details: error.message,
    });
  }
}

// get a single user
async function user(req, res) {
  try {
    const id = req.params.id;
    const user = await userSchema.findById(id);
    if (!user) {
      return sendResponse(res, 404, false, "user not found");
    }

    sendResponse(res, 200, true, "User get success", user);
  } catch (error) {
    sendResponse(res, 500, false, "Internal Server Error", null, {
      code: 500,
      details: error.message,
    });
  }
}

// update a user
async function updateUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const id = req.params.id;

    const previousUser = await userSchema.findById(id);

    if (!previousUser) {
      return sendResponse(res, 404, false, "User not found");
    }

    const updateUser = await userSchema.findByIdAndUpdate(
      id,
      {
        $set: { username, email, password },
      },
      { new: true }
    );

    sendResponse(
      res,
      200,
      true,
      `${previousUser.username} is successfully updated`,
      updateUser
    );
  } catch (error) {
    sendResponse(res, 500, false, "user update failed", null, {
      code: 500,
      details: error.message,
    });
  }
}

// delete a user
async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const checkingUser = await userSchema.findById(id);

    if (!checkingUser) {
      return sendResponse(res, 404, false, "user not found");
    }

    const deleteUser = await userSchema.findByIdAndDelete(id);

    return sendResponse(
      res,
      200,
      true,
      `${checkingUser.username} is successfully deleted`,
      deleteUser
    );
  } catch (error) {
    sendResponse(res, 500, false, "user delete failed", null, {
      code: 500,
      details: error.message,
    });
  }
}

// login a user
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return sendResponse(res, 400, false, "Email and password are required");
    }

    const searchUser = await userSchema.findOne({ email });
    if (!searchUser) {
      return sendResponse(res, 404, false, "User not found");
    }

    if (searchUser.password !== password) {
      return sendResponse(res, 401, false, "Invalid credentials");
    }

    sendResponse(res, 200, true, "Login successful", {
      id: searchUser._id,
      username: searchUser.username,
      email: searchUser.email,
    });
  } catch (error) {
    sendResponse(res, 500, false, "user login failed", null, {
      code: 500,
      details: error.message,
    });
  }
}

module.exports = { createUser, users, user, updateUser, deleteUser, loginUser };
