import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  movies : Movie[] = [];

  constructor(private movieService : MoviesService,private router : Router) { }

  ngOnInit(): void {
    this.movieService.getNowPlayingMovies()
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

}
