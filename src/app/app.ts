import { Component, signal } from '@angular/core';
import { SeccionGuitarras } from './components/seccion-guitarras/seccion-guitarras';


@Component({
  selector: 'app-root',
  imports: [SeccionGuitarras],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SERVICES_PIPES_DIRECTIVES');
}
