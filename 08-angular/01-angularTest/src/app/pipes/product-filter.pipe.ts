import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'interfaces/i-product';
import { ProductListComponent } from '../product-list/product-list.component';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: IProduct[], filterBy: string): IProduct[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter ?
        products.filter(prod => prod.desc.toLocaleLowerCase().includes(filter)) :
        products;
  }

}
