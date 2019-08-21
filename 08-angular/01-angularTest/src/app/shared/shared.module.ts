// Adrián Navarro Gabino

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  entryComponents: [
    ConfirmModalComponent
  ],
  exports: [
    ConfirmModalComponent
  ]
})
export class SharedModule { }
