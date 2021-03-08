const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  year: Number,
  image: String,
  type: String,
  genre: [String],
  director: [String],
  info: String,
  duration: Number,
  actors: [String],
  country: String,
  rating: Number
}, {versionKey: false});

module.exports = mongoose.model('Movie', movieSchema);
