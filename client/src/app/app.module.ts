import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule }   from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie.component';
import { AddformComponent } from './addform.component';
import { EditformComponent } from './editform.component';
import { ActorfilmsComponent } from './actorfilms.component';
import { SignInComponent } from './signin.component';
import { MoviesService } from './movies.service';
import { RatingDirective } from './rating.directive';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { GoogleLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { AuthService } from './auth.service';


const adminRoutes: Routes = [
  { path: 'addfilm', component: AddformComponent },
  { path: 'editfilm/:_id', component: EditformComponent }
]

const appRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'admin', component: AdminComponent, children: adminRoutes },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/filmsDirectedBy/:director', component: ActorfilmsComponent },
  { path: 'movies/filmsWithActor/:actor', component: ActorfilmsComponent }, 
  { path: 'movies/movie/:_id', component: MovieComponent },
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule, MatButtonModule, MatInputModule, MatSelectModule, MatCardModule, MatRadioModule, SocialLoginModule  ],
  declarations: [ AppComponent, AdminComponent, MoviesComponent, AddformComponent, EditformComponent, ActorfilmsComponent, MovieComponent, RatingDirective ],
  providers: [ 
    MoviesService,
   {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('452603262956-95doqiofo2ruistoc8adliloca21ah5m.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    },
    AuthService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
