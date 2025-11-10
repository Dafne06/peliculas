import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pares',
  standalone: false
})
export class ParesPipe implements PipeTransform {

  transform(array:any[]): any[] {
    const pares = array.reduce((result,value, index,array)=>{
      if(index % 2 === 0){
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);
    //console.log(pares);
    return pares;
  }

}
