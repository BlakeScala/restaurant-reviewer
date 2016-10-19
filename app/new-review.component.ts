import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'new-review',
  template: `
    <div *ngIf="show">
      <h2>New Review</h2>
      <div class="form-group">
        <label for="reviewer">Your Name</label>
        <input #reviewer type="text" class="form-control">
      </div>
      <div class = "form-group">
        <label for="waitTime">Minutes until food arrived</label>
        <input #waitTime type="text" class="form-control">
      </div>
      <div class = "form-group">
        <label for="rating">Rating(1-5)</label>
        <input #rating type="number" class="form-control">
      </div>
      <div class = "form-group">
        <label for="description">Comments</label>
        <input #description type="text" class="form-control">
      </div>
      <button (click)="addReview(reviewer.value, waitTime.value, rating.value, description.value, restaurant.id)">Done</button>
    </div>
  `
})

export class NewReviewComponent {
  @Output() clickSender = new EventEmitter();
  @Input() show : boolean;
  @Input() restaurant: Restaurant;

  addReview(reviewer: string, waitTime: number, rating: number, description: string, id: number) {
    var reviewToAdd: Review = new Review(reviewer, waitTime, rating, description, id);
    this.clickSender.emit(reviewToAdd);
  }
}
