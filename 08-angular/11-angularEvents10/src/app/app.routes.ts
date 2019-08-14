import { Route } from '@angular/router';
import { EventsShowComponent } from './events-show/events-show.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SaveChangesGuard } from './guards/save-changes.guard';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventDetailResolve } from './guards/event-detail-resolve.service';

// Adrián Navarro Gabino

export const APP_ROUTES: Route[] = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'events', component: EventsShowComponent },
    {
        path: 'events/add',
        canDeactivate: [SaveChangesGuard],
        component: EventAddComponent
    },
    {
        path: 'events/:id',
        component: EventDetailComponent,
        resolve: {
            event: EventDetailResolve
        }
    },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '**', redirectTo: '/events', pathMatch: 'full' }
]