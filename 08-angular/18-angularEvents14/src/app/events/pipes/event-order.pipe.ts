// Adrián Navarro Gabino

import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'eventOrder'
})
export class EventOrderPipe implements PipeTransform {

  transform(events: IEvent[], orderBy: string): IEvent[] {
    if(orderBy.toLocaleLowerCase() == 'date')
      events.sort(function (a, b) {
        if(a.date > b.date)
          return 1;
        else if(a.date < b.date)
          return -1;
        else
          return 0;
      });
    else if(orderBy.toLocaleLowerCase() == 'price')
      events.sort(function (a, b) {
        if(a.price > b.price)
          return 1;
        else if(a.price < b.price)
          return -1;
        else
          return 0;
      });

    return events;
  }

}
