import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'interfaces/i-product';

@Component({
  selector: 'ulab-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number;
  @Input() product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
