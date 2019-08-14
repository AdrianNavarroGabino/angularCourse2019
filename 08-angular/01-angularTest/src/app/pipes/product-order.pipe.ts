// Adrián Navarro Gabino

import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'interfaces/i-product';

@Pipe({
  name: 'productOrder'
})
export class ProductOrderPipe implements PipeTransform {

  transform(products: IProduct[]): IProduct[] {
    return products.sort(function (a: IProduct, b: IProduct) {
      if(a.price > b.price)
        return 1;
      else if(a.price < b.price)
        return -1
      else
        return 0;
    })
  }

}
