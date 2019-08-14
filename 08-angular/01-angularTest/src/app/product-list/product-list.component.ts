// Adrián Navarro Gabino

import { Component, OnInit } from '@angular/core';
import { IProduct } from 'interfaces/i-product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'ulab-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  title = "Mi lista de productos";
  headers = {image: 'Imagen', desc: 'Producto', price: 'Precio', avail: 'Disponible', rating: 'Puntuación'};
  products: IProduct[] = [];

  showImage = true;

  toogleImage() {
    this.showImage = !this.showImage;
  }

  myProduct2: IProduct = {
    id: 5006,
    description: "Adrián's product",
    price: 0,
    available: new Date('2018-01-01'),
    imageUrl: null,
    rating: 1
  };

  filterSearch: string = '';

  constructor(private productsService: ProductsService) { }

  addProduct() {
    this.productsService.addProduct(this.myProduct2).subscribe(
      ok => console.log(ok),
      error => console.error(error)
    );
  }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(
        prods => this.products = prods,
        error => console.error(error),
        () => console.log('Products loaded')
      );
  }

}
