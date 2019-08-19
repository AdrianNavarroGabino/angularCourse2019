import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SetColorDirective } from './directives/set-color.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SetColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
