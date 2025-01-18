import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro',
  standalone: true
})
export class DomseguroPipe implements PipeTransform {
// permitir que el pipe reciba un argumento y valor. Además evita xss
//DOM document object model
  constructor(private domSanitizer:DomSanitizer){}
  transform(value:string): any {
    const url = 'https://api.themoviedb.org/3/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url+value);
  }
}
