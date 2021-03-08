import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";

class Movie {
  _id: String;
  name: String;
  year: Number;
  image: String;
  type: String;
  genre: String[];
  director: String[];
  info: String;
  duration: Number;
  actors: String[];
  country: String;
  rating: Number;

  constructor(
    _id: String, 
    name: String,
    year: Number,
    image: String,
    type: String,
    genre: String[],
    director: String[],
    info: String,
    duration: Number,
    actors: String[],
    country: String,
    rating: Number){
      this._id = _id;
      this.name = name;
      this.year = year;
      this.image = image;
      this.type = type;
      this.genre = genre;
      this.director = director;
      this.info = info;
      this.duration = duration;
      this.actors = actors;
      this.country = country;
      this.rating = rating;
  }
}

@Injectable()
export class MoviesService{
  movies: Movie[] = [];

  createMovie(res){
    return new Movie(
      res._id, 
      res.name, 
      res.year, 
      res.image,
      res.type,
      res.genre,
      res.director,
      res.info,
      res.duration,
      res.actors,
      res.country,
      res.rating
    );
  }
  
  constructor(private http: HttpClient){
    this.http.get('https://guarded-plains-89846.herokuapp.com/movies/all').subscribe(res => {
          for(let i in res){
            this.movies.push(this.createMovie(res[i]))
          }
      }
    );
  }
  
  getMovies(){
    return this.movies;
  }

  getMoviesById(id: String){
    return this.http.get(`https://guarded-plains-89846.herokuapp.com/movies/id=${id}`);
  }

  getMoviesByActor(actor: String){
    return this.http.get(`https://guarded-plains-89846.herokuapp.com/movies/actor=${actor}`);
  }

  getMoviesByDirector(director: String){
    return this.http.get(`https://guarded-plains-89846.herokuapp.com/movies/director=${director}`);
  }
}