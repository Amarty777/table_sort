import { Pipe, PipeTransform } from '@angular/core';
import { marathon } from '../fake-db.helper';

@Pipe({
  name: 'distancePipe'
})
export class DistancePipe implements PipeTransform {

  transform(distance: number, withUnit = true): any {
    return (distance / 1000).toFixed(3) + (withUnit ? ' km' : '');

  }
}
