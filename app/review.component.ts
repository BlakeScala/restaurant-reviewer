import { Component, Input } from '@angular/core';
import { Review } from './review.model';

@Component ({
  selector: 'review-display',
  template: `
  <hr>
  <div ng-init="review.setStarRating()" id="review-display">
    <h4>Reviewer: {{ review.reviewer }}</h4>
    <p>Wait Time: {{ review.waitTime }} minutes</p>
    <p>Rating: {{ review.starRating }}</p>
    <p>Comments: {{ review.description }}</p>
  </div>
  `
})

export class ReviewDisplayComponent {
  @Input() review: Review;
}
