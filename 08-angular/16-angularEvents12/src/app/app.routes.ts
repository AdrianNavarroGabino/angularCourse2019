import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

// Adrián Navarro Gabino

export const APP_ROUTES: Route[] = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'events', loadChildren: './events/events.module#EventsModule'},
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
]