import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ProductOrderPipe } from './pipes/product-order.pipe';
import { ProductItemComponent } from './product-item/product-item.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { LeavePageGuard } from './guards/leave-page.guard';
import { ProductDetailGuard } from './guards/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    ProductOrderPipe,
    ProductItemComponent,
    StarRatingComponent,
    WelcomeComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    ProductsService,
    ProductDetailGuard,
    LeavePageGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
