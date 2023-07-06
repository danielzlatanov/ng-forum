import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const formattedDate = moment(value).format('YYYY-MM-DD | HH:mm:ss');
    return formattedDate;
  }
}
