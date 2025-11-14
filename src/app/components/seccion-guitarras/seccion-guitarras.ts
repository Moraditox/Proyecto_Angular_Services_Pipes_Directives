import { Component } from '@angular/core';
import { Instrumentos } from '../../interfaces/instrumentos';
import { NoImagen } from '../../directives/no-imagen';
import { NgClass } from '@angular/common';
import { StockPipe } from '../../pipes/stock-pipe';
import { EurosPipe } from "../../pipes/euros-pipe";

@Component({
  selector: 'app-seccion-guitarras',
  imports: [NoImagen, NgClass, StockPipe, EurosPipe],
  templateUrl: './seccion-guitarras.html',
  styleUrl: './seccion-guitarras.css',
})
export class SeccionGuitarras {

    instrumentos:Array<Instrumentos> = [

    new Instrumentos(1,"Gibson","Les Paul Standard",2190,["Cuerpo caoba","Tapa de arce","Binding en crema"],0,10,"img/g1.jpg"),
    new Instrumentos(2,"Gibson","SG Standard",1325,["Cuerpo caoba","Mastil Caoba","Diapasón de palisandro"],8,5,"img/g2.jpg"),
    new Instrumentos(3,"Fender","American Telecaster",1800,["Cuerpo de arce","Mastil de arce","Binding en negro"],3,14,"")

    ]
    
    // Creamos la variable que contendra los likes para cada instrumento
    likes: boolean[] = Array(this.instrumentos.length).fill(false);

    toggleLike(index: number) {
      this.likes[index] = !this.likes[index];
    }
}
