import { Component } from "@angular/core";
import { AuthService } from './auth.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SignInComponent{
  userName: String;

  constructor(private authService: AuthService) { }

  signIn(){
    this.authService.signIn();
    this.userName = this.authService.userName;
  }

  signOut(){
    this.authService.signOut();
  }

}