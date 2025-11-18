import { Component, Input } from '@angular/core';
import { Instrumentos } from '../../interfaces/instrumentos';
import { NoImagen } from '../../directives/no-imagen';
import { NgClass } from '@angular/common';
import { StockPipe } from '../../pipes/stock-pipe';
import { EurosPipe } from "../../pipes/euros-pipe";
import { Corazon } from '../corazon/corazon';
import { Likes } from '../likes/likes';

@Component({
  selector: 'app-ficha-instrumento',
  imports: [NoImagen, NgClass, StockPipe, EurosPipe, Corazon, Likes],
  templateUrl: './ficha-instrumento.html',
  styleUrl: './ficha-instrumento.css',
})
export class FichaInstrumento {
    @Input() instrumento:Instrumentos;
}