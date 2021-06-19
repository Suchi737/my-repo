import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchWord : string = '';
  movies : Movie[] = [];

  constructor(private movieService : MoviesService,private router : Router) { }

  ngOnInit(): void {

    this.movieService.getPopularMovies()
    .subscribe(
              data=> {
                this.movies = data['results']
                console.log(data)},
              err => console.log(err)
          );

  }

  onMovieDetails(movie : Movie){
   this.router.navigate(['/movie',movie.id])
  }

  onSearchWord(val){
  this.searchWord = val;
  console.log(this.searchWord)
  }

  onSearch(word : string){
    this.router.navigate(['/search',word])
  }

}
