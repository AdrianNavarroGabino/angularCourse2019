// Adrián Navarro Gabino

import { Route } from '@angular/router';
import { EventsShowComponent } from './events-show/events-show.component';
import { SaveChangesGuard } from './guards/save-changes.guard';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventDetailResolve } from './guards/event-detail-resolve.service';

export const EVENTS_ROUTES: Route[] = [
    { path: '', component: EventsShowComponent },
    {
        path: 'add',
        canDeactivate: [SaveChangesGuard],
        component: EventAddComponent
    },
    {
        path: ':id',
        component: EventDetailComponent,
        resolve: {
            event: EventDetailResolve
        }
    }
]