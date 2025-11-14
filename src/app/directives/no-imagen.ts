import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNoImagen]'
})
export class NoImagen {

  // Alla donde coloque esta directiva (appNoImagen)
  // el "nodoDOM" será la etiqueta referenciada

  private nodoDOM:ElementRef = inject(ElementRef);
  private renderer2:Renderer2 = inject(Renderer2);

  @HostListener('error')
  onError():void {
    this.renderer2.setAttribute(this.nodoDOM.nativeElement, 'src', 'img/no-image.jpg');
  }

}
