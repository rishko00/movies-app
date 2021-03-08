import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { MoviesService } from './movies.service';

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
  selector: "movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})

export class MoviesComponent {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  genreFilters: String[] = [];
  genres: String[] = ["Бойовики", "Військові", "Детективи", "Драма", "Історичні", "Комедії", "Кримінал", "Мелодрами", "Спортивні", "Пригоди", "Трилери", "Фантастика", "Фентезі", "Жахи"];

  constructor(private http: HttpClient, private moviesService: MoviesService) {}

  ngOnInit() {
    this.movies = this.filteredMovies = this.moviesService.getMovies();
  }

  getGenreFilteredMovies(genre){
    let genreIndex = this.genreFilters.findIndex(el => el == genre);

    if(genreIndex == -1){
      this.genreFilters.push(genre);
    }

    else{
      this.genreFilters.splice(genreIndex, 1);
    }
    this.filteredMovies = this.movies.filter(movie => this.genreFilters.some(el => movie.genre.includes(el)));

    if(!this.genreFilters.length){
      this.filteredMovies = this.movies;
    }
  }

  getFilteredMovies(form: NgForm) {
    console.log(form.value.genre);
    this.filteredMovies = this.movies.filter(el => 
      el.type == form.value.type && form.value["genre"].checked.some(genre => el["genre"].includes(genre)));
  }

  filterMovies(form: NgForm) {
    this.filteredMovies.sort((a, b) => {
      if (a.year > b.year) return -1;
      if (a.year < b.year) return 1;
      return 0;
    });

    if (form.value.orderby == "-") {
      this.filteredMovies.reverse();
    }
  }
}
