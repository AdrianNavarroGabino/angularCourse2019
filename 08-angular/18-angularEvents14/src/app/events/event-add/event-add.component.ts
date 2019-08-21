// Adrián Navarro Gabino

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';
import { ComponentDeactivate } from 'interfaces/component-deactivate';
import { NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit, ComponentDeactivate {

  @Output() event1 = new EventEmitter<IEvent>();
  fromAdd: boolean = false;
  today = Date.now();
  
  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: null
  };

  changeImage(fileInput: HTMLInputElement) {
    if(!fileInput || fileInput.files.length == 0){ return; }
    
    const reader: FileReader = new FileReader();

    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvent.image = reader.result.toString();
    })
  }

  constructor(private eventsService: EventsService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: null
    };
  }

  addEvent() {
    this.fromAdd = true;
    this.eventsService.addEvent(this.newEvent).subscribe(
      ok => this.router.navigate(['/']),
      error => console.error(error)
    );
    this.resetForm();
  }

  canDeativate(): Promise<boolean> {
    if(this.fromAdd ||
      (this.newEvent.title == '' &&
      this.newEvent.price == 0 &&
      this.newEvent.image == '' &&
      this.newEvent.description == '' &&
      this.newEvent.date == null))
    return new Promise((resolve, reject) => resolve(true));

    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Añadir producto';
    modalRef.componentInstance.body = 'Los cambios no se guardarán. ¿Desea salir?';
    return modalRef.result
                   .catch(() => false);
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid
    };
  }
}
