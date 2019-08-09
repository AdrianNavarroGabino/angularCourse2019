import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ulab-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  private auxRating: number;
  @Input() rating: number;
  @Output() ratingChanged = new EventEmitter<number>();

  constructor() { }

  restoreRating() {
    this.auxRating = this.rating;
  }

  setRating() {
    this.ratingChanged.emit(this.auxRating);
  }

  ngOnInit() {
    this.auxRating = this.rating;
  }

}
