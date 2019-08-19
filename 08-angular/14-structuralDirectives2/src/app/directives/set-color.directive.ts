import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[setColor]'
})
export class SetColorDirective {

  private isSet: boolean;
  @Input('setColor') color: string;

  constructor(private elem: ElementRef) {
    this.isSet = false;
  }

  @HostListener('click') onClick() {
    if(this.isSet) {
      this.elem.nativeElement.style.backgroundColor = "";
    }
    else {
      this.elem.nativeElement.style.backgroundColor = this.color;
    }
    this.isSet = !this.isSet;
  }
}
