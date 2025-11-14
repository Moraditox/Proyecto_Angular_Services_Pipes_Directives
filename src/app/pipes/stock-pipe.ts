import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 3) {
      return 'En stock';
    } else if (value > 0 && value <= 3) {
      return 'Solo quedan en stock ' + value + " unidades";
    } else {
      return 'Fecha de disponibilidad desconocida';
    }
  }
}
