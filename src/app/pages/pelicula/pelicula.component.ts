import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PosterPipe } from '../../pipes/poster.pipe';
import { MovieResponse } from '../../interfaces/movie-response';
import { Cast } from '../../interfaces/credits-response';
import { ActivatedRoute,Router } from '@angular/router';
import { MovieServiceService } from '../../services/movie.service.service';
import { combineLatest } from 'rxjs';
import { CastSlideshowComponent } from "../../components/cast-slideshow/cast-slideshow.component";

@Component({
    selector: 'app-pelicula',
    standalone: true,
    templateUrl: './pelicula.component.html',
    styleUrl: './pelicula.component.css',
    imports: [CommonModule, PosterPipe, CastSlideshowComponent]
})
export class PeliculaComponent implements OnInit{

  public pelicula: MovieResponse | undefined ;
  public cast : Cast[] = [];

  constructor(private activatedRouter: ActivatedRoute,
     private peliculasService: MovieServiceService,
                private location: Location, private router:Router){}

  ngOnInit(): void {
    //url?id=1&name=pepe&edad=20
    const {id} = this.activatedRouter.snapshot.params;
    combineLatest([
      this.peliculasService.getPeliculaDetalle(id),
      this.peliculasService.getCast(id)
    ]).subscribe(([pelicula, cast]) => {
      if(!pelicula){
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula  = pelicula;
      //console.log("Detalle de pelicula");
      //console.log(pelicula);
      this.cast = cast.filter(actor => actor.profile_path !== null);
    });
  }
  onRegresar() {
    this.location.back();
  }
}
