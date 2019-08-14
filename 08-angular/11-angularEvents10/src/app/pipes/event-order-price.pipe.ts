// Adrián Navarro Gabino

import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from 'interfaces/i-event';

@Pipe({
  name: 'eventOrderPrice'
})
export class EventOrderPricePipe implements PipeTransform {

  transform(events: IEvent[], args: string): IEvent[] {
    events.sort(function (a, b) {
      if(a.price > b.price)
        return 1;
      else if(a.price < b.price)
        return -1;
      else
        return 0;
    })

    return events;
  }

}
