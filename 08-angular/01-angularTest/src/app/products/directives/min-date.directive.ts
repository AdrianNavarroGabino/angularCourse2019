import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[ulabMinDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective,
              multi: true}]
})
export class MinDateDirective {
  @Input() ulabMinDate;

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    if(this.ulabMinDate && c.value) {
      const dateControl = new Date(c.value);
      const dateMin = new Date(this.ulabMinDate);
      if(dateMin > dateControl) {
        return {'minDate': true };
      }
    }

    return null;
  }
}
