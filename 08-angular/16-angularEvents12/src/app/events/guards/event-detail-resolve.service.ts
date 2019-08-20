import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/i-event';
import { EventsService } from '../services/events.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventDetailResolve implements Resolve<IEvent> {
  constructor(private eventsService: EventsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : IEvent |
      Observable<IEvent> | Promise<IEvent> {
    return this.eventsService.getEvent(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/events']);
        return new Observable<IEvent>(null);
      })
    );
  }
  
}
