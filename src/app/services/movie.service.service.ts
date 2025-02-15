import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, from, map, of, tap } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieResponse } from '../interfaces/movie-response';
import { movieSimilarResponse} from '../interfaces/movieSimilarResponse'
import { Cast } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando = false;

  getParams() {
    return {
      api_key :"d070e0fd80422b7ae7c2736a6da2b92e",
      language :"es-MX",
      page: this.carteleraPage
    } 
  }

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getCartelera():Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }
    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.getParams()}).pipe(
        map((resp) => resp.results ),
        tap(() => {
          this.carteleraPage += 1;
          this.cargando = false;
        })
      );
  }
  buscarPeliculas(texto: string):Observable<Movie[]> {
    const params = {...this.getParams(), page: '1', query: texto};
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
      params
    }).pipe(
      map(resp => resp.results)
    );
  }

  getPeliculaDetalle(id: string) {
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, {
      params: this.getParams()
    }).pipe(
      catchError(err => of(null))
    )
  }
  getCast(id: string):Observable<Cast[]> {
    return this.http.get(`${this.baseUrl}/movie/${id}/credits`, {
      params: this.getParams()
    }).pipe(
      map((resp: any) => resp.cast),
      catchError(err => of([]))
    )
  }

  getSimilarMovies(id: string):Observable<movieSimilarResponse[]> {
    return this.http.get(`${this.baseUrl}/movie/${id}/similar`, {
      params: this.getParams()
    }).pipe(
      map((resp: any) => resp.results),
      catchError(err => of([]))
    )
  }
 
}
