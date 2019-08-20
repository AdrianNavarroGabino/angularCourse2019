import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ulab-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
