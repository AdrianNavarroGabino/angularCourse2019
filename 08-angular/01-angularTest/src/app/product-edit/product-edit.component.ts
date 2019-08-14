// Adrián Navarro Gabino

import { Component, OnInit } from '@angular/core';
import { ComponentDeactivate } from 'interfaces/component-deactivate';

@Component({
  selector: 'ulab-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, ComponentDeactivate {
  canDeactivate() {
    return confirm('¿Quieres abandonar la página? Los cambios no se guardarán');
  }

  constructor() { }

  ngOnInit() {
  }

}
