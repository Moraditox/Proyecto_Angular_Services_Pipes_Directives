import { Component } from '@angular/core';
import { Instrumentos } from '../../interfaces/instrumentos';
import { FichaInstrumento } from "../ficha-instrumento/ficha-instrumento";

@Component({
  selector: 'app-seccion-guitarras',
  imports: [FichaInstrumento],
  templateUrl: './seccion-guitarras.html',
  styleUrl: './seccion-guitarras.css',
})
export class SeccionGuitarras {

    instrumentos:Array<Instrumentos> = [

    new Instrumentos(1,"Gibson","Les Paul Standard",2190,["Cuerpo caoba","Tapa de arce","Binding en crema"],0,5,"img/g1.jpg"),
    new Instrumentos(2,"Gibson","SG Standard",1325,["Cuerpo caoba","Mastil Caoba","Diapasón de palisandro"],8,3,"img/g2.jpg"),
    new Instrumentos(3,"Fender","American Telecaster",1800,["Cuerpo de arce","Mastil de arce","Binding en negro"],3,1,"")

    ]
}
