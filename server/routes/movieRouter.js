const express = require('express');
const movieController = require('../controllers/moviesController.js');
const movieRouter = express.Router();

movieRouter.use('/all', movieController.getAllMovies);
movieRouter.use('/id=:_id', movieController.getMovieById);
movieRouter.use('/actor=:actor', movieController.getMoviesByActor);
movieRouter.use('/director=:director', movieController.getMoviesByDirector);

module.exports = movieRouter;
