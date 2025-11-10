import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagen',
  standalone: false
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string ='w500'): string {

    if (!img) {
      return './assets/banner.webp';
    }

    const imgUrl = `${ URL }/${ size }${ img }`;
    //console.log('imgUrl', imgUrl);
    return imgUrl;
  }

}
