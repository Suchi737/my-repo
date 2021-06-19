import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  selectedMovie : any;

  constructor(private movieService : MoviesService,private router : Router) { }

  ngOnInit(): void {
    this.movieService.getLatestMovies()
    .subscribe(
              data=> {
                this.selectedMovie = data;
                console.log(data)},
              err => console.log(err)
          );
  }
 
}
