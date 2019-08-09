// Adrián Navarro Gabino

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsShowComponent } from './events-show/events-show.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { FormsModule } from '@angular/forms';
import { EventOrderDatePipe } from './pipes/event-order-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventsShowComponent,
    EventFilterPipe,
    EventOrderDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
