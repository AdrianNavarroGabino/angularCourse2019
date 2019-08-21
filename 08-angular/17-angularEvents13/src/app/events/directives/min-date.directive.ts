import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[minDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective,
    multi: true}]
})
export class MinDateDirective {
  @Input() minDate;

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    if(this.minDate && c.value) {
      const dateControl = new Date(c.value);
      const dateMin = new Date(this.minDate);
      if(dateMin > dateControl) {
        return {'minDate': true };
      }
    }

    return null;
  }
}
