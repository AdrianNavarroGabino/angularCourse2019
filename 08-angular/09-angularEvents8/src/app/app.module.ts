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

@NgModule({
  declarations: [
    AppComponent,
    EventsShowComponent,
    EventFilterPipe,
    EventOrderDatePipe,
    EventOrderPricePipe,
    EventOrderPipe,
    EventItemComponent,
    EventAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
