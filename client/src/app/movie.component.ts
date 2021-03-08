import { Component, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { MoviesService } from './movies.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

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
    country: String){
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
      this.rating = 0;
  }
}

@Component({
  selector: "movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})

export class MovieComponent {
  movie: Movie;
  movieRouteId: String;
  
  constructor(private router: Router, private http: HttpClient, private activateRoute: ActivatedRoute, private moviesService: MoviesService){
    this.movieRouteId = activateRoute.snapshot.params['_id'];
  }

  ngOnInit(){
    this.moviesService.getMoviesById(this.movieRouteId).subscribe(res => {
          this.movie = this.moviesService.createMovie(res);
    });;
  }

  goToDirectorFilms(director: String){
    this.router.navigate(['movies/filmsDirectedBy/', director])
  }

  goToActorFilms(actor: String){
    this.router.navigate(['movies/filmsWithActor/', actor])
  }
}
