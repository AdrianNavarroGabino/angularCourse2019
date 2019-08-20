import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { LeavePageGuard } from './guards/leave-page.guard';
import { ProductsModule } from './products/products.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    MenuModule,
    ProductsModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    Title,
    LeavePageGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
