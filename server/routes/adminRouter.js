const express = require('express');
const adminController = require('../controllers/adminController.js');
const adminRouter = express.Router();
const jsonParser = express.json();

adminRouter.use('/addmovie', adminController.addMovie);
adminRouter.post('/postmovie', jsonParser, adminController.postMovie);
adminRouter.post('/editmovie/:_id', jsonParser, adminController.editMovie);
adminRouter.delete('/deletemovie/:_id', adminController.deleteMovie);

module.exports = adminRouter;
