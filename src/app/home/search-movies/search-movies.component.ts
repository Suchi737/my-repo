import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  searchWord : string = '';
  word : string;
  page : number;
  total_pages: number;
  movies : Movie[] = [];
  extraMovies : Movie[] = [];
  message = false;
  button = true;

  constructor(private router : Router,private route : ActivatedRoute,private movieService : MoviesService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      params => {
        this.word = params['word'];
        this.page = 1;
        this.searchMovies(this.word, this.page);
      });

  }

  onSearchWord(val){
    this.searchWord = val;
    console.log(this.searchWord)
    }
  
    onSearch(word : string){
      this.router.navigate(['/search',word])
    }

    onShowMore(){
     let nextPage = this.page + 1;
     if (nextPage <= this.total_pages && nextPage >= 1){
      this.movieService.getSearchData(this.word, nextPage)
      .subscribe(
        data => {
          this.movies = data['results'];
          this.movies = this.extraMovies.concat(this.movies);
          this.extraMovies = [...this.movies];
          this.total_pages = data['total_pages'];
          this.page = data['page'];
          console.log(data)
        },
        error => {
          if(error){
           this.message = true;
           this.button = false;
          console.error(error)
        }
      }
      );
     }
    }

    searchMovies(word: string, page: number) {
      this.movieService.getSearchData(word, page)
        .subscribe(
          data => {
            this.movies = data['results'];
            this.extraMovies = data['results'];
            this.total_pages = data['total_pages'];
            this.page = data['page'];
            this.movies.length == 0 ? this.message = true : '';
            console.log(data)
          },
          error => {
            if(error){
             this.message = true;
             this.button = false;
            console.error(error)
          }
        }

        );
    }

    onMovieDetails(movie : Movie){
      this.router.navigate(['/movie',movie.id])
    }
}
