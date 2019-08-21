// Adrián Navarro Gabino

import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ulab-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
