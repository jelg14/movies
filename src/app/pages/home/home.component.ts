import { Component, HostListener, OnDestroy, OnInit, } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { MovieServiceService } from '../../services/movie.service.service';
import { SlideshowComponent } from "../../components/slideshow/slideshow.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SlideshowComponent, CommonModule]
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = []
  public moviesSlideshow: Movie[] = []

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    const pos = (document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );
    
    if ( pos > max ) {
      // TODO: llamar el servicio
      if ( this.peliculasService.cargando ) { return; }

      this.peliculasService.getCartelera().subscribe( movies => {
        this.movies.push(...movies );
      });
    }
    
    
  }


  constructor( private peliculasService: MovieServiceService ) { }

  ngOnInit(): void {

    this.peliculasService.getCartelera()
      .subscribe( movies => {
        // console.log(resp.results);
        this.movies = movies;
        //console.log(this.movies);
        console.log(this.peliculasService.getSimilarMovies("260713"));
        this.moviesSlideshow = movies;
      })

  }

  ngOnDestroy() {
    this.peliculasService.resetCarteleraPage();
  }
}