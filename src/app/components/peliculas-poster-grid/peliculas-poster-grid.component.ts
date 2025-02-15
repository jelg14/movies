import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Movie } from '../../interfaces/cartelera-response';
import { CommonModule } from '@angular/common';
import { PosterPipe } from "../../pipes/poster.pipe";

@Component({
    selector: 'app-peliculas-poster-grid',
    standalone: true,
    templateUrl: './peliculas-poster-grid.component.html',
    styleUrl: './peliculas-poster-grid.component.css',
    imports: [CommonModule, RouterModule, PosterPipe]
})
export class PeliculasPosterGridComponent implements OnInit {
  @Input() movies: Movie[] | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onMovieClick(movie: Movie) {
    this.router.navigate(['/pelicula', movie.id]);
  }
}
