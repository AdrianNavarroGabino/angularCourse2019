// Adrián Navarro Gabino

import { Component, OnInit } from '@angular/core';
import { ComponentDeactivate } from 'interfaces/component-deactivate';
import { IProduct } from '../interfaces/i-product';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'ulab-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, ComponentDeactivate {
  product: IProduct;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.product = this.route.snapshot.data['product'];
    this.product.available = this.product.available.replace(' ', 'T');
  }

  canDeactivate() {
    return confirm('¿Quieres abandonar la página? Los cambios no se guardarán');
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid
    };
  }
}
