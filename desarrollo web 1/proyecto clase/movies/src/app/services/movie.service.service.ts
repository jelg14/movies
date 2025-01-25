import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/CarteleraResponse';
import { query } from 'express';
import { MovieResponse } from '../interfaces/MovieResponse';
import { Cast, CastResponse } from '../interfaces/CreditsResponse';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor( private http: HttpClient) { }
  private baseUrl = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando = false;

  
  getParams() {
    //https://www.themoviedb.org/settings/api
    return {
      api_key : "a3800b2902fbfbaff66f847350ea5579",
      language : "es-GT",
      page: this.carteleraPage
    }
  }

  resetCareteraPage(){
    this.carteleraPage = 1;
  }
  
  getCartelera(): Observable <Movie[]> {
    if (this.cargando) {
      return of([]);
    }
    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,
      {params:this.getParams()}).pipe(
        map((resp)=> resp.results),
        tap(()=>{
          this.carteleraPage +=1
          this.cargando = false;
        })
      );
    }
  buscarPelicula(texto:string):Observable<Movie[]>{
    const params = {...this.getParams(),page:1, query:texto};
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`,{params}).pipe(
      map(resp=> resp.results));
  }
  getPeliculaDetalle(id:string){
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`,{params: this.getParams()}).pipe(
      catchError(err=>of(null)));
  }

  getCast(id:string):Observable<Cast[]>{
    return this.http.get<CastResponse>(`${this.baseUrl}/movie/${id}/credits`,{params: this.getParams()}).pipe(
      map(resp => resp.cast),
      catchError(err => of([])));
  }

}
