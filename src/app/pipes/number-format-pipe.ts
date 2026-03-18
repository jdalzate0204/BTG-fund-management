import { Pipe, PipeTransform } from '@angular/core';
import { formatAmount } from '../helpers/format-number';

@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number | null, decimals: number = 2): string {
    return formatAmount(value, decimals);
  }
}
