import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
  standalone: true
})
export class NoimagePipe implements PipeTransform {

  transform(images:string): string {
    return (images.length>0) ? images : 'assets//no-image.jpg'
  }

}
