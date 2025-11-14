import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'euros'
})
export class EurosPipe implements PipeTransform {

  transform(value: number): string {

    function numbersFormat(value: number) {
      return value.toString().replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.'); //Expresioón regular
    }

    return numbersFormat(value) + ' €';
  }

}