import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  userName: String;
  userPhoto: String;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.signIn();
  }

  getUser(){
    this.userPhoto = this.authService.userPhoto;
    this.userName = this.authService.userName;
  }
}
