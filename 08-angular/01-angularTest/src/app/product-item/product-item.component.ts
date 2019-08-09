import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'interfaces/i-product';

@Component({
  selector: 'ulab-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: IProduct;
  @Input() showImage: boolean;
  @Input() rating: number;

  changeRating(rating: number) {
    this.product.rating = rating;
  }

  constructor() { }

  ngOnInit() {
  }

}
