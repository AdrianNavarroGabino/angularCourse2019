import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  color = 'yellow';

  persons: any[] = [{
    "name":"Clara",
    "age":22
  },{
    "name":"John",
    "age":36
  },{
    "name":"Jesús",
    "age":15
  }];

  filter = (p) => p.age >= 18;
}
