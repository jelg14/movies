import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  constructor(private route:Router){}
  buscarPelicula(texto:string){
    texto  = texto.trim();
    if (texto.length === 0) {
      return;
    }
    this.route.navigate(['/buscar',texto]);
  }
}
