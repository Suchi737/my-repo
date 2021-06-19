import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url = 'https://api.themoviedb.org/3/movie';
  private searchURL = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '6fa6dfd0e5e4b9578bbb688a8842db6a';

  constructor(private http: HttpClient, ) { }


  getPopularMovies(){
    return this.http.get(this.url+"/popular?api_key="+this.apiKey)
  }

  getNowPlayingMovies(){
    return this.http.get(this.url+"/now_playing?api_key="+this.apiKey)
  }

  getUpcomingMovies(){
    return this.http.get(this.url+"/upcoming?api_key="+this.apiKey)
  }

  getLatestMovies(){
    return this.http.get(this.url+"/latest?api_key="+this.apiKey)
  }

  getMovieDetails(id : number){
    return this.http.get(this.url+"/"+id+"?api_key="+this.apiKey)
  }

  getSearchData(query: string, page: number){
    return this.http.get(this.searchURL+"?api_key="+this.apiKey+"&query="+query+"&page="+page)
  }
}
