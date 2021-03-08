const Movie = require('../models/movie.js');

exports.getAllMovies = async (req, res) => {
  await Movie.find({}, (err, moviesList) => {
    if(err) return console.log(err);
    res.send(moviesList);
  })
};

exports.getMoviesByTypeAndGenre = async (req, res) => {
  await Movie.find({ type: req.params.type, genre: req.params.genre }, (err, moviesList) => {
    if(err) return console.log(err);
    res.send(moviesList);
  })
};

exports.getMovieById = async (req, res) => {
  await Movie.findById(Object(req.params._id), (err, movie) => {
    if(err) return console.log(err);
    res.send(movie);
  })
};

exports.getMoviesByActor = async (req, res) => {
  await Movie.find({ actors: req.params.actor }, (err, movies) => {
    if(err) return console.log(err);
    res.send(movies);
  })
};

exports.getMoviesByDirector = async (req, res) => {
  await Movie.find({ director: req.params.director }, (err, movies) => {
    if(err) return console.log(err);
    res.send(movies);
  })
};
