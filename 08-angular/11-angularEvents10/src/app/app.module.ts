// Adrián Navarro Gabino

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsShowComponent } from './events-show/events-show.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { FormsModule } from '@angular/forms';
import { EventOrderDatePipe } from './pipes/event-order-date.pipe';
import { EventOrderPricePipe } from './pipes/event-order-price.pipe';
import { EventOrderPipe } from './pipes/event-order.pipe';
import { EventItemComponent } from './event-item/event-item.component';
import { EventAddComponent } from './event-add/event-add.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsService } from './services/events.service';
import { SaveChangesGuard } from './guards/save-changes.guard';
import { EventDetailResolve } from './guards/event-detail-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsShowComponent,
    EventFilterPipe,
    EventOrderDatePipe,
    EventOrderPricePipe,
    EventOrderPipe,
    EventItemComponent,
    EventAddComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [EventsService, SaveChangesGuard, EventDetailResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
