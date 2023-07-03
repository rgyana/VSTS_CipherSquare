import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceUnderscore',
})
export class ReplaceUnderscorePipe implements PipeTransform {
  transform(str: string): string {
    return str.replace(/_/g, ' ');
  }
}
