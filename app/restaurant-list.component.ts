import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'restaurant-list',
  template: `
    <div *ngFor = "let currentRestaurant of childRestaurantList | specialty:specialtyFilter | rating:ratingFilter | cost:costFilter" class="well restaurant-list">
      <div class = "row">
        <div class = "col-md-6 display">
          <restaurant-display
            [restaurant] = "currentRestaurant"
          ></restaurant-display>
          <button class ="btn" (click) = "editButtonClicked(currentRestaurant)">Edit</button>
          <button class ="btn" (click) = "seeReviews(currentRestaurant)">Reviews</button>
        </div>
        <div class ="col-md-6">
          <img id="restaurant-image" class="img-responsive" [src]="currentRestaurant.picture">
        </div>
      </div>
      <review-list
        [restaurant] = "currentRestaurant"
        [childReviewList] = "reviewList"
      ></review-list>
    </div>
  `
})

export class RestaurantListComponent {
  @Input() childRestaurantList: Restaurant[];
  @Input() specialtyFilter: string;
  @Input() ratingFilter: number;
  @Input() costFilter: number;
  @Input() reviewList: Review[];
  @Output() editButtonSender = new EventEmitter();

  editButtonClicked(restaurantToEdit: Restaurant) {
    this.editButtonSender.emit(restaurantToEdit);
  }

  seeReviews(clickedRestaurant: Restaurant) {
    clickedRestaurant.reviews = true;
  }

}
