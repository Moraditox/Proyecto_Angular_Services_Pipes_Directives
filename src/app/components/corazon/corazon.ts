import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-corazon',
  imports: [NgClass],
  templateUrl: './corazon.html',
  styleUrl: './corazon.css',
})
export class Corazon {

  // Creamos la variable que contendra los likes para cada instrumento
  corazon: boolean = false;

  toggleLike() {
    this.corazon = !this.corazon;
  }

}
