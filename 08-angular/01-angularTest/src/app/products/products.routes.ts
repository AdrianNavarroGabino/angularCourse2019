// Adrián Navarro Gabino

import { Route } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './guards/product-detail.guard';
import { LeavePageGuard } from '../guards/leave-page.guard';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailResolve } from './guards/product-detail-resolve.service';

export const PRODUCT_ROUTES: Route[] = [
    { path: 'products', component: ProductListComponent },
    {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
        resolve: {
            product: ProductDetailResolve
        }
    },
    {
        path: 'products/edit/:id',
        canActivate: [ProductDetailGuard],
        canDeactivate: [LeavePageGuard],
        component: ProductEditComponent
    }
]