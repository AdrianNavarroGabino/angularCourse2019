// Adrián Navarro Gabino

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvent } from 'interfaces/i-event';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';
import { ComponentDeactivate } from 'interfaces/component-deactivate';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit, ComponentDeactivate {

  @Output() event1 = new EventEmitter<IEvent>();
  fromAdd: boolean = false;
  
  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: null
  };

  changeImage(fileInput: HTMLInputElement) {
    if(!fileInput || fileInput.files.length == 0){ return; }
    
    const reader: FileReader = new FileReader();

    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvent.image = reader.result.toString();
    })
  }

  constructor(private eventsService: EventsService,
              private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: null
    };
  }

  addEvent() {
    //this.event1.emit(this.newEvent);
    this.fromAdd = true;
    this.eventsService.addEvent(this.newEvent).subscribe(
      ok => this.router.navigate(['/']),
      error => console.error(error)
    );
    this.resetForm();
  }

  canDeativate() {
    if(this.fromAdd ||
      (this.newEvent.title == '' &&
      this.newEvent.price == 0 &&
      this.newEvent.image == '' &&
      this.newEvent.description == '' &&
      this.newEvent.date == null))
    return true;
  return confirm('¿Quieres abandonar la página? Los cambios no se guardarán');  
  }
}
