import { Component, Input, ViewChild } from "@angular/core";
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
  selector: "editform",
  templateUrl: "./editform.component.html",
  styleUrls: ["./editform.component.css"]
})

export class EditformComponent {
  @ViewChild('editForm') editForm: NgForm;
  movieRouteId: String;
  movie: Movie;

  constructor(private router: Router, private http: HttpClient, private activateRoute: ActivatedRoute, private moviesService: MoviesService){
    this.movieRouteId = activateRoute.snapshot.params['_id'];
  }

  ngOnInit(){
    this.moviesService.getMoviesById(this.movieRouteId).subscribe(res => {
      this.movie = this.moviesService.createMovie(res);
      this.editForm.controls['title'].setValue(res['name']);
      this.editForm.controls['year'].setValue(res['year']);
      this.editForm.controls['genre'].setValue(res['genre']);
      this.editForm.controls['actors'].setValue(res['actors']);
      this.editForm.controls['director'].setValue(res['director']);
      this.editForm.controls['country'].setValue(res['country']);
      this.editForm.controls['info'].setValue(res['info']);
      this.editForm.controls['type'].setValue(res['type']);
      this.editForm.controls['duration'].setValue(res['duration']);
      this.editForm.controls['image'].setValue(res['image']);
    });
  }

  editMovie() {
    this.http.post(`https://guarded-plains-89846.herokuapp.com/admin/editmovie/${this.movie._id}`,
        {
          genre: this.editForm.value.genre,
          director: this.editForm.value.director,
          image: this.editForm.value.image,
          actors: this.editForm.value.actors,
          title: this.editForm.value.title,
          year: this.editForm.value.year,
          type: this.editForm.value.type,
          info: this.editForm.value.info,
          duration: this.editForm.value.duration,
          country: this.editForm.value.country
        }
      )
      .subscribe({
        error: error => {
          console.error("There was an error!", error);
        }
      });
  }
}
