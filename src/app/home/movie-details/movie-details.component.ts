import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieId : number;
  selectedMovie : any;

  constructor(private movieService : MoviesService,private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params : Params) => {
       this.movieId = params['id'];
      }
    )

    this.movieService.getMovieDetails(this.movieId)
    .subscribe(
      data=> {
        this.selectedMovie = data;
        console.log(data)},
      err => console.log(err)
  );

  }

}
