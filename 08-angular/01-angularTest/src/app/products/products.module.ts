import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { StarRatingComponent } from '../rating/star-rating/star-rating.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductsService } from './services/products.service';
import { ProductDetailGuard } from './guards/product-detail.guard';
import { ProductDetailResolve } from './guards/product-detail-resolve.service';
import { PRODUCT_ROUTES } from './products.routes';
import { ProductOrderPipe } from './pipes/product-order.pipe';
import { RatingModule } from '../rating/rating.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductFilterPipe,
    ProductOrderPipe,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    RatingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(PRODUCT_ROUTES)
  ],
  providers: [
    ProductsService,
    ProductDetailGuard,
    ProductDetailResolve
  ]
})
export class ProductsModule { }
