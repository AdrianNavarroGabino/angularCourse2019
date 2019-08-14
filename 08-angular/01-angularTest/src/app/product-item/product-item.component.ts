// Adrián Navarro Gabino

import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'interfaces/i-product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'ulab-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: IProduct;
  @Input() showImage: boolean;
  @Input() rating: number;

  constructor(private productsService: ProductsService) { }

  changeRating(rating: number) {
    this.productsService.changeRating(this.product.id, rating).subscribe(
      ok => this.product.rating = rating,
      error => console.error(error)
    );
  }

  ngOnInit() {
  }

}
