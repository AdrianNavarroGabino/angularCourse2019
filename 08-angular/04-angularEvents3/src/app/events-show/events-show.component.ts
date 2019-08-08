// Adrián Navarro Gabino

import { Component, OnInit } from '@angular/core';
import { IEvent } from 'interfaces/i-event'

@Component({
  selector: 'app-events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.scss']
})
export class EventsShowComponent implements OnInit {
  events: IEvent[] = [{
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
  }]

  constructor() { }

  ngOnInit() {
  }

}
