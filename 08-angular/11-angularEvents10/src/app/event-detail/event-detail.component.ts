import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IEvent } from 'interfaces/i-event';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: IEvent;

  constructor(private route: ActivatedRoute,
              private eventsService: EventsService,
              private router: Router) { }

  ngOnInit() {
    this.event = this.route.snapshot.data['event'];
  }

  goBack() {
    this.router.navigate(['/events']);
  }
}
