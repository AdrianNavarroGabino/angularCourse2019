import { Component, OnInit } from '@angular/core';
import { IProduct } from 'interfaces/i-product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'ulab-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.productsService.getProduct(id)
      .subscribe(
          p => this.product = p,
          error => console.error(error)
      );
  }

  changeRating(rating: number) {
    this.productsService.changeRating(this.product.id, rating).subscribe(
      ok => this.product.rating = rating,
      error => console.error(error)
    );
  }

}
