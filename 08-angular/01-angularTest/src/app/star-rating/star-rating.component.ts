import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ulab-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  rating: number = 4;
  
  constructor() { }

  ngOnInit() {
  }

}
