import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  }
}

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: [ './admin.component.css' ]
})

export class AdminComponent  {
  movies: Movie[] = [];
  movieRouteId: String;
  
  constructor(private router: Router, private http: HttpClient, private activateRoute: ActivatedRoute, private moviesService: MoviesService){
    this.movieRouteId = activateRoute.snapshot.params['_id'];
  }

  ngOnInit(){
    this.movies = this.moviesService.getMovies();
  }

  deleteMovie(m: Movie){
    this.http.delete(`https://guarded-plains-89846.herokuapp.com/admin/deletemovie/${m._id}`).subscribe(res => console.log(res));
  }
}