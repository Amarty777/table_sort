import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speedPipe'
})
export class SpeedPipe implements PipeTransform {

  transform(speed: number): any {
    return (speed / 1000).toFixed(2) + ' km/h';

  }
}
