import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'review-list',
  template: `
    <div *ngIf="restaurant.reviews">
      <div *ngFor="let currentReview of childReviewList">
        <div *ngIf="currentReview.restaurantId == restaurant.id">
          <review-display
            [review] = "currentReview"
          ></review-display>
        </div>
      </div>
      <div class = "reviewButtons">
        <hr>
        <button class="btn" (click)="addReview(restaurant)">Add Review</button>
        <button class="btn" (click)="doneReview(restaurant)">Hide Reviews</button>
      </div>
    </div>
    <new-review
      [show] = "showReviewForm"
      (clickSender) = "reviewDone($event)"
      [restaurant] = "restaurant"
    ></new-review>
  `
})

export class ReviewListComponent {
  @Input() restaurant: Restaurant;
  @Input() childReviewList: Review[];
  @Output() clickSender = new EventEmitter();

  showReviewForm: boolean = false;

  addReview(selectedRestaurant: Restaurant) {
    this.showReviewForm = true;
  }

  reviewDone(review: Review) {
    this.showReviewForm = false;
    this.childReviewList.push(review);
    this.restaurant.ratingsArray.push(review.rating);
    console.log(this.restaurant.ratingsArray);
    this.restaurant.calculateAverageRating();
    this.restaurant.setStarRating();
  }

  doneReview(selectedRestaurant: Restaurant) {
    selectedRestaurant.reviews = false;
  }
}
