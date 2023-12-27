const express = require("express");
const userRouter = express.Router();
const {
  registerUser,
  loginUser,
  logOutUser,
} = require("../controllers/user.controller.js");

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logOutUser);

module.exports = userRouter;
