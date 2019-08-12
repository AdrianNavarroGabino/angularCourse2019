import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from 'interfaces/i-event';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input() event: IEvent;
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteEvent() {
    this.delete.emit(this.event.title);
  }

}
