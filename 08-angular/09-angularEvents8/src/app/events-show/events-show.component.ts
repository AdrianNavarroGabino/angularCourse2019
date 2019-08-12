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

  orderByDate() {
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

  orderByPrice() {
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
    this.events.push(newEvent);
  }

  deleteEvent(title: string) {
    this.events = this.events.filter(e => e.title != title);
  }

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }

}
