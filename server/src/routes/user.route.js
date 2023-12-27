const express = require('express');
const userRouter = express.Router();
const userController = require('../models/user.model.js');

userRouter.post('/register', userController.registerUser);
userRouter.post('/login', userController.loginUser);
userRouter.get('/logout', userController.logOutUser);

module.exports = userRouter;
