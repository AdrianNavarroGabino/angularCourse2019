import { Component, OnInit } from '@angular/core';
import { IProduct } from 'interfaces/i-product';

@Component({
  selector: 'ulab-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  title = "Mi lista de productos";
  headers = {image: 'Imagen', desc: 'Producto', price: 'Precio', avail: 'Disponible', rating: 'Puntuación'};
  products: IProduct[] = [{
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

  showImage = true;

  toogleImage() {
    this.showImage = !this.showImage;
  }

  filterSearch: string = '';

  constructor() { }

  ngOnInit() {
  }

}
