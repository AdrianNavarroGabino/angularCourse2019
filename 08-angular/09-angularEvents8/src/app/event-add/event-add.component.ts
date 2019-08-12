import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvent } from 'interfaces/i-event';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {
  @Output() event1 = new EventEmitter<IEvent>();
  
  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: null
  };

  addEvent() {
    let eventAux = this.newEvent;
    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: null
    };
    this.event1.emit(eventAux);
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
