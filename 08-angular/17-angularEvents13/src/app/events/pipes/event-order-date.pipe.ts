// Adrián Navarro Gabino

import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'eventOrderDate'
})
export class EventOrderDatePipe implements PipeTransform {

  transform(events: IEvent[], args: string): IEvent[] {
    events.sort(function (a, b) {
      if(a.date > b.date)
        return 1;
      else if(a.date < b.date)
        return -1;
      else
        return 0;
    })

    return events;
  }

}
