const Movie = require('../models/movie.js');
const fs = require('fs');

exports.addMovie = (req, res) => {
  res.render('addfilm.hbs');
};


exports.postMovie = (req, res) => {
  if(!req.body) return res.sendStatus(400);

  let movie = new Movie({
	  name: req.body.title,
	  year: req.body.year,
          image: req.body.image,
	  type: req.body.type,
	  genre: req.body.genre.split(', '),
	  director: req.body.director.split(', '),
	  info: req.body.info,
	  duration: req.body.duration,
	  actors: req.body.actors.split(', '),
	  country: req.body.country,
	  rating: 0
  });

  movie.save();
};

exports.editMovie = (req, res) => {
  if(!req.body) return res.sendStatus(400);

  Movie.findByIdAndUpdate(Object(req.params._id), {$set: {
	  name: req.body.title,
	  year: req.body.year,
          image: req.body.image,
	  type: req.body.type,
	  genre: req.body.genre.split(', '),
	  director: req.body.director.split(', '),
	  info: req.body.info,
	  duration: req.body.duration,
	  actors: req.body.actors.split(', '),
	  country: req.body.country
    }
  }, (err) => {
    if(err) console.log(err);
    res.send('Successfully updated!')
  });
};

exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(Object(req.params._id), (err) => {
    if(err) console.log(err);
    res.send('Successfully deleted!');
  })
};
