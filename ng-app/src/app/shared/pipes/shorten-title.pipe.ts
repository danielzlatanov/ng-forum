import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle',
})
export class ShortenTitlePipe implements PipeTransform {
  transform(value: string, maxCount = 13): string {
    if (!value) {
      return '';
    }
    
    return `${value.substring(0, maxCount)}${
      value.length > maxCount ? '...' : ''
    }`;
  }
}
