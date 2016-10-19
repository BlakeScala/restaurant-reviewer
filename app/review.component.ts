import { Component, Input } from '@angular/core';
import { Review } from './review.model';

@Component ({
  selector: 'review-display',
  template: `
  <h4>Reviewer: {{ review.reviewer }}</h4>
  <p>Wait Time: {{ review.waitTime }} minutes</p>
  <p>Rating: {{ review.rating }}</p>
  <p>Comments: {{ review.description }}</p>
  <hr>
  `
})

export class ReviewDisplayComponent {
  @Input() review: Review;
}
