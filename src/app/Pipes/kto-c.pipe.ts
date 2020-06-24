import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ktoC'
})
export class KtoCPipe implements PipeTransform {

  transform(value: number): number {
    return value-273.15;
  }

}
