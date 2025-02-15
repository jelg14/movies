import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnDestroy, OnInit, input } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { CommonModule } from '@angular/common';
import { NoimagePipe } from '../../pipes/noimage.pipe';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule, NoimagePipe],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css',
})
export class SlideshowComponent  {
  @Input() movies: Movie[] = [];
  
  constructor() { }
}
