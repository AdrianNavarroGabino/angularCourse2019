import { Injectable } from '@angular/core';
import { IEvent } from 'interfaces/i-event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  getEvents(): IEvent[] {
    return [{
      title: 'Event 1',
      image: 'assets/event1.jpg',
      date: new Date('2019-09-01'),
      description: 'First event in the Angular course',
      price: 20
    },{
      title: 'Event 2',
      image: 'assets/event2.jpg',
      date: new Date('2019-09-30'),
      description: 'Last event in the Angular course',
      price: 15.95
    }];
  }

  constructor() { }
}
