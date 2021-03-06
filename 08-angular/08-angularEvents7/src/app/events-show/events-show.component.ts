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

  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: null
  };

  addEvent() {
    this.events.push(this.newEvent);
    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: null
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    if(!fileInput || fileInput.files.length == 0){ return; }
    
    const reader: FileReader = new FileReader();

    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvent.image = reader.result.toString();
    })
  }

  constructor() { }

  ngOnInit() {
  }

}
