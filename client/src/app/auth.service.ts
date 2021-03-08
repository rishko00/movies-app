import {Injectable} from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Injectable()
export class AuthService{
  userName: String;
  userPhoto: String;

  constructor(private authService: SocialAuthService) { }

  signIn(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data => {
      this.userName = data.name;
      this.userPhoto = data.photoUrl;
    });
  }

  signOut(){
    this.authService.signOut();
  }
}