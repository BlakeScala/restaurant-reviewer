import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'new-review',
  template: `
    <div *ngIf="show">
      <h3>New Review</h3>
      <div class="form-group">
        <label for="reviewer">Your Name</label>
        <input #reviewer type="text" class="form-control">
      </div>
      <div class = "form-group">
        <label for="waitTime">Minutes until food arrived</label>
        <input #waitTime type="number" class="form-control">
      </div>
      <div class = "form-group">
        <label for="rating">Rating(1-5)</label>
        <select #rating class="form-control">
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <div class = "form-group">
        <label for="description">Comments</label>
        <input #description type="text" class="form-control">
      </div>
      <button class="btn btn-danger" (click)="addReview(reviewer.value, waitTime.value, rating.value, description.value, restaurant.id);
        reviewer.value = '';
        waitTime.value = '';
        rating.value = '';
        description.value = '';
      ">Done</button>
    </div>
  `
})

export class NewReviewComponent {
  @Output() clickSender = new EventEmitter();
  @Input() show : boolean;
  @Input() restaurant: Restaurant;

  addReview(reviewer: string, waitTime: string, rating: string, description: string, id: number) {
    if(reviewer == "" || waitTime == "" || rating == "" || description == "") {
      alert("Please fill out all of the review inputs!");
    } else {
      var numWaitTime: number = parseInt(waitTime);
      var numRating: number = parseInt(rating);
      var reviewToAdd: Review = new Review(reviewer, numWaitTime, numRating, description, id);
      reviewToAdd.setStarRating();
      this.clickSender.emit(reviewToAdd);
    }
  }
}
