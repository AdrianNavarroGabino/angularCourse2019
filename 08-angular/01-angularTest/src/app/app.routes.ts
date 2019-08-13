import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './guards/product-detail.guard';
import { LeavePageGuard } from './guards/leave-page.guard';
import { ProductEditComponent } from './product-edit/product-edit.component';

export const APP_ROUTES: Route[] = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'products', component: ProductListComponent },
    {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
    },
    {
        path: 'products/edit/:id',
        canActivate: [ProductDetailGuard],
        canDeactivate: [LeavePageGuard],
        component: ProductEditComponent
    },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
]