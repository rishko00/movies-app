const express = require('express');
const authController = require('../controllers/authController.js');
const authRouter = express.Router();
const jsonParser = express.json();

authRouter.use('login', authController.login);

module.exports = authRouter;
