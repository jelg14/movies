import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cast } from '../../interfaces/credits-response';
import { PosterPipe } from "../../pipes/poster.pipe";

@Component({
    selector: 'app-cast-slideshow',
    standalone: true,
    templateUrl: './cast-slideshow.component.html',
    styleUrl: './cast-slideshow.component.css',
    imports: [RouterModule, CommonModule, PosterPipe]
})
export class CastSlideshowComponent implements OnInit {
  
  @Input() cast: Cast[] = [];

  constructor() { }
  ngOnInit(): void {
   //console.log(this.cast);
  }

}
