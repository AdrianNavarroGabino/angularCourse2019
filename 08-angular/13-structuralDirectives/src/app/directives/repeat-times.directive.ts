import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[repeatTimes]'
})
export class RepeatTimesDirective {
  @Input()
  set repeatTimes(num: number) {
    for(let i = 0; i< num; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        current: i + 1
      });
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
