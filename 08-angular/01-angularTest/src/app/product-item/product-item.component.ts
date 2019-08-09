import { Component, OnInit } from '@angular/core';
import { IProduct } from 'interfaces/i-product';

@Component({
  selector: 'ulab-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  product: IProduct = {
    id: 1,
    desc: 'SSD hard drive',
    avail: new Date('2016-10-03'),
    price: 75,
    imageUrl: 'assets/ssd.jpg',
    rating: 5
  };

  showImage = true;

  constructor() { }

  ngOnInit() {
  }

}
