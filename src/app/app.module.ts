import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NowPlayingComponent } from './home/now-playing/now-playing.component';
import { UpcomingComponent } from './home/upcoming/upcoming.component';
import { LatestComponent } from './home/latest/latest.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './home/movie-details/movie-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchMoviesComponent } from './home/search-movies/search-movies.component';

const routes : Routes = [
  { path : 'home' , component : HomeComponent },
  { path : 'now-playing' , component : NowPlayingComponent },
  { path : 'upcoming' , component : UpcomingComponent },
  { path : 'latest' , component : LatestComponent },
  { path : 'movie/:id' , component : MovieDetailsComponent },
  { path: 'search/:word', component: SearchMoviesComponent },
  { path : '' , redirectTo : '/home' , pathMatch : 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NowPlayingComponent,
    UpcomingComponent,
    LatestComponent,
    MovieDetailsComponent,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
