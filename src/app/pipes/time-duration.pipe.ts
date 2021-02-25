import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeDurationPipe'
})
export class TimeDurationPipe implements PipeTransform {

  transform(time: number): any {
    let temp = moment.utc(time);
    return `${temp.format('HH:mm:ss')}`;

  }
}
