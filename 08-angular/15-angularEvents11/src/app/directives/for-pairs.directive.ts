import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { IEvent } from 'interfaces/i-event';

@Directive({
  selector: '[forPairs]'
})
export class ForPairsDirective {
  current: number;

  @Input()
  set forPairsOf(array: any[]) {
    this.items = array;
    let auxEvent: IEvent = {
      title: '',
      image: '',
      date: null,
      description: '',
      price: 0
    };

    for(let i = 0; i < this.items.length; i+=2) {
      if(i == this.items.length - 1) {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          $implicit: [this.items[i], this.items[i]]
        });
      }
      else {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          $implicit: [this.items[i], this.items[i+1]]
        });
      }
    }
  }

  items: any[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
