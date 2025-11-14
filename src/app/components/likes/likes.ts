import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  imports: [],
  templateUrl: './likes.html',
  styleUrl: './likes.css',
})
export class Likes implements OnInit {
    @Input() likes: number // Este es el número que viene del padre
  
    // Crea un array para iterar, usando el número recibido como referencia
    fullEstrellas: Array<null>;
    emptyEstrellas: Array<null>;

    // Función para generar el array al inicio
    ngOnInit() {
      //Añado al array el numero de likes que recibes del padre
      this.fullEstrellas = new Array(this.likes);
      this.emptyEstrellas = new Array(5 - this.likes);
    }
}
