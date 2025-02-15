import { CommonModule } from '@angular/common';
import {Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(private route:Router) { }

  ngOnInit(): void {
  } 

  // = comparacion  texto = texto.trim();
  // == comparacion de valor if (texto.length == 0) {
  // === comparacion de valor y tipo if (texto.length === 0) 
  buscarPelicula(texto: string){
    texto = texto.trim();
    if(texto.length === 0){
      return;
    }
    this.route.navigate(['/buscar', texto]);

  }

}
