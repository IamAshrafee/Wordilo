const express = require("express");
const {
  createUser,
  users,
  user,
  updateUser,
  deleteUser,
} = require("../../controller/user.controller");
const userRoutes = express.Router();

userRoutes.post("/create", createUser);
userRoutes.get("/get", users);
userRoutes.get("/:id", user);
userRoutes.put("/update/:id", updateUser);
userRoutes.delete("/delete/:id", deleteUser);

module.exports = userRoutes;
