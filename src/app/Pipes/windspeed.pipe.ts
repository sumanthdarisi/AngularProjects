import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windspeed'
})
export class WindspeedPipe implements PipeTransform {

  transform(value: number): number {
    return (value) * 3.6;
  }

}
