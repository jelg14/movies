import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
  standalone: true
})
export class NoimagePipe implements PipeTransform {

  transform(images: string): string {
    if(!images){
      return 'assets/img/noimage.png';
    }
    if(images.length>0){
      return images;
    }else{
      'assets/img/noimage.png';
    }
    return 'assets/img/noimage.png';
  }

}
