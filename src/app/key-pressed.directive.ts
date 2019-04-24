import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appKeyPressed]'
})
export class KeyPressedDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('mousedown', ['$event'])
  onClickDown($event: any) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'orange');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', 'none');
  }
  @HostListener('mouseup', ['$event'])
  onClickUp($event: any) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#9a9999');
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '1px 1px 10px #1a1919');
  }


}
