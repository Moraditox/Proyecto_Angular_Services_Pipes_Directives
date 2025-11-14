import { Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFondoAmarillo]'
})
export class FondoAmarillo implements OnInit {

  // Alla donde coloque esta directiva (appNoImagen)
  // el "nodoDOM" será la etiqueta referenciada

  private nodoDOM:ElementRef = inject(ElementRef);
  private renderer2:Renderer2 = inject(Renderer2);

  ngOnInit(): void {
    this.renderer2.setStyle(this.nodoDOM.nativeElement,'background-color','yellow');
  }

}
