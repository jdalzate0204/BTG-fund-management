import { Pipe, PipeTransform } from '@angular/core';
import { formatAmount } from '../helpers/format-number';

@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  /**
   * Transform numeric value
   * @param value Number to format, can be null
   * @param decimals Number of decimals to display (default 2)
   * @return Formatted number string or empty string if input is invalid
   */
  transform(value: number | null, decimals: number = 2): string {
    return formatAmount(value, decimals);
  }
}
