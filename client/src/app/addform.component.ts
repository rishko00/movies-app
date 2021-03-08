import { Component, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "addform",
  templateUrl: "./addform.component.html",
  styleUrls: ["./addform.component.css"]
})

export class AddformComponent {
  constructor(private http: HttpClient) {}

  addMovie(addForm: NgForm) {
    this.http.post("https://guarded-plains-89846.herokuapp.com/admin/postmovie",
        {
          genre: addForm.value.genre,
          director: addForm.value.director,
          actors: addForm.value.actors,
          title: addForm.value.title,
          year: addForm.value.year,
          type: addForm.value.type,
          info: addForm.value.info,
          duration: addForm.value.duration,
          country: addForm.value.country
        }
      )
      .subscribe({
        error: error => {
          console.error("There was an error!", error);
        }
      });
  }
}
