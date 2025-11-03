const express = require("express");
const {
  createUser,
  users,
  user,
  updateUser,
  deleteUser,
  loginUser,
} = require("../../controller/user.controller");
const userRoutes = express.Router();

userRoutes.post("/create", createUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/get", users);
userRoutes.get("/:id", user);
userRoutes.put("/update/:id", updateUser);
userRoutes.delete("/delete/:id", deleteUser);

module.exports = userRoutes;
