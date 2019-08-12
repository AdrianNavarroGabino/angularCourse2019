import { Injectable } from '@angular/core';
import { IProduct } from 'interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): IProduct[] {
    return [{
      id: 1,
      desc: 'SSD hard drive',
      avail: new Date('2016-10-03'),
      price: 75,
      imageUrl: 'assets/ssd.jpg',
      rating: 5
    },{
      id: 2,
      desc: 'LGA1151 Motherboard',
      avail: new Date('2016-09-15'),
      price: 96.95,
      imageUrl: 'assets/motherboard.jpg',
      rating: 4
    },{
      id: 3,
      desc: 'GRAPHIC card',
      avail: new Date('2015-09-01'),
      price: 40,
      imageUrl: 'assets/graphiccard.jpg',
      rating: 3
    }];
  }
}
