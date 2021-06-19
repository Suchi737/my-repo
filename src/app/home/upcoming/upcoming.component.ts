import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  movies : Movie[] = [];

  constructor(private movieService : MoviesService,private router : Router) { }

  ngOnInit(): void {
    this.movieService.getUpcomingMovies()
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
