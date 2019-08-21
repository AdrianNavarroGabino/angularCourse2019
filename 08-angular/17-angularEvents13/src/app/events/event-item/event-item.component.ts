// Adrián Navarro Gabino

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input() event: IEvent;
  @Output() delete = new EventEmitter<string>();

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }

  deleteEvent() {
    this.delete.emit(this.event.id + '');
  }

}
