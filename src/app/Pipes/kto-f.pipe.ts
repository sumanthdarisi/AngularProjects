import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ktoF'
})
export class KtoFPipe implements PipeTransform {

  transform(value: number): number {
    return ((value-273.15) * (9/5)) + 32;
  }

}
