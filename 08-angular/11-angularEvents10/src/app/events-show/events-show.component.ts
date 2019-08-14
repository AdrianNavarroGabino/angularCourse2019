// Adrián Navarro Gabino

import { Component, OnInit } from '@angular/core';
import { IEvent } from 'interfaces/i-event'
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.scss']
})
export class EventsShowComponent implements OnInit {
  events: IEvent[] = [];

  filterSearch: string = '';

  orderByDate(event: Event) {
    event.preventDefault();
    this.filterSearch = '';
    this.events.sort(function (a, b) {
      if(a.date > b.date)
        return 1;
      else if(a.date < b.date)
        return -1;
      else
        return 0;
    })
  }

  orderByPrice(event: Event) {
    event.preventDefault();
    this.filterSearch = '';
    this.events.sort(function (a, b) {
      if(a.price > b.price)
        return 1;
      else if(a.price < b.price)
        return -1;
      else
        return 0;
    })
  }

  addEvent(newEvent: IEvent) {
    this.eventsService.addEvent(newEvent).subscribe(
      ok => this.events.push(ok),
      error => console.error(error)
    );
  }

  deleteEvent(id: number) {
    this.eventsService.deleteEvent(id).subscribe(
      ok => console.log(ok),
      error => console.error(error)
    );

    this.events = this.events.filter(e => e.id != id);
  }

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(
        events => this.events = events,
        error => console.error(error),
        () => console.log('Events loaded')
      );
  }

}
