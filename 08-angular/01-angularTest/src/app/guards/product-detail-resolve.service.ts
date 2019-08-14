// Adrián Navarro Gabino

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { catchError } from 'rxjs/operators';
import { IProduct } from 'interfaces/i-product';

@Injectable()
export class ProductDetailResolve implements Resolve<IProduct> {
  constructor(private productsService: ProductsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : IProduct |
      Observable<IProduct> | Promise<IProduct> {
    return this.productsService.getProduct(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/products']);
        return new Observable<IProduct>(null);
      })
    );
  }
  
}
