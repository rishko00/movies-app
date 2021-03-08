import { Component, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { MoviesService } from './movies.service';
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
}

@Component({
  selector: "actorfilms",
  templateUrl: "./actorfilms.component.html",
  styleUrls: ["./actorfilms.component.css"]
})

export class ActorfilmsComponent {
  movies: Movie[] = [];
  filmsWith: String;
  typeOfHuman: 'actor' | 'director';

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute, private moviesService: MoviesService){
    if(activateRoute.snapshot.params['director']){
      this.filmsWith = activateRoute.snapshot.params['director'];
      this.typeOfHuman = 'director';
    }

    else if(activateRoute.snapshot.params['actor']){
      this.filmsWith = activateRoute.snapshot.params['actor'];
      this.typeOfHuman = 'actor';
    }
  }

  ngOnInit(){
    if(this.typeOfHuman == 'director'){
      this.moviesService.getMoviesByDirector(this.filmsWith).subscribe(res =>{
        for(let i in res){
          this.movies.push(this.moviesService.createMovie(res[i]))
        }
      });
    }

    else if(this.typeOfHuman == 'actor'){
      this.moviesService.getMoviesByActor(this.filmsWith).subscribe(res =>{
        for(let i in res){
          this.movies.push(this.moviesService.createMovie(res[i]))
        }
      });
    }
  }
}
