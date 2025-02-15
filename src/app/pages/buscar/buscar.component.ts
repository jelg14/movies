import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MovieServiceService } from '../../services/movie.service.service';
import { CommonModule } from '@angular/common';
import { PeliculasPosterGridComponent } from "../../components/peliculas-poster-grid/peliculas-poster-grid.component";
@Component({
    selector: 'app-buscar',
    standalone: true,
    templateUrl: './buscar.component.html',
    styleUrl: './buscar.component.css',
    imports: [CommonModule, RouterModule, PeliculasPosterGridComponent]
})
export class BuscarComponent  implements OnInit
{
  public texto: string = '';
  public peliculas: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, 
    private peliculasService: MovieServiceService,
    private _router: Router 
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.texto = params['texto'];
      this.peliculasService.buscarPeliculas(this.texto).subscribe(peliculas => {
        this.peliculas = peliculas;
      })
    })
  }
}
