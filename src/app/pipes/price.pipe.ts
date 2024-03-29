import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true,
})
export class PricePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    // Append SAR
    return `${value} SAR`;
  }
}
