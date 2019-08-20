import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventAddComponent } from './event-add/event-add.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventItemComponent } from './event-item/event-item.component';
import { EventsShowComponent } from './events-show/events-show.component';
import { EventDetailResolve } from './guards/event-detail-resolve.service';
import { SaveChangesGuard } from './guards/save-changes.guard';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { EventOrderDatePipe } from './pipes/event-order-date.pipe';
import { EventOrderPricePipe } from './pipes/event-order-price.pipe';
import { EventOrderPipe } from './pipes/event-order.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EVENTS_ROUTES } from './events.routes';
import { EventsService } from './services/events.service';
import { ForPairsDirective } from './directives/for-pairs.directive';



@NgModule({
  declarations: [
    EventAddComponent,
    EventDetailComponent,
    EventItemComponent,
    EventsShowComponent,
    EventFilterPipe,
    EventOrderDatePipe,
    EventOrderPricePipe,
    EventOrderPipe,
    ForPairsDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(EVENTS_ROUTES)
  ],
  providers: [
    EventsService,
    SaveChangesGuard,
    EventDetailResolve
  ]
})
export class EventsModule { }
