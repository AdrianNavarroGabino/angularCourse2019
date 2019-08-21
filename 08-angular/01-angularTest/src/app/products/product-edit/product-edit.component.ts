// Adrián Navarro Gabino

import { Component, OnInit } from '@angular/core';
import { ComponentDeactivate } from 'interfaces/component-deactivate';
import { IProduct } from '../interfaces/i-product';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'ulab-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, ComponentDeactivate {
  product: IProduct;
  exit: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.product = this.route.snapshot.data['product'];
    this.product.available = this.product.available.replace(' ', 'T');
  }

  canDeactivate(): Promise<boolean> {
    if(this.exit)
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

  update() {
    this.exit = true;
    this.productsService.updateProduct(this.product)
      .subscribe(
        ok => this.router.navigate([`/products/${this.product.id}`]),
        error => console.error(error)
      )
  }

  changeImage(fileInput: HTMLInputElement) {
    if(!fileInput.files || fileInput.files.length === 0)
      return;
    
      let reader: FileReader = new FileReader();
      reader.readAsDataURL(fileInput.files[0]);
      reader.addEventListener('loadend', e => {
        this.product.imageUrl = reader.result.toString();
      });
  }
}
