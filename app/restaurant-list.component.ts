import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'restaurant-list',
  template: `
    <div *ngFor = "let currentRestaurant of childRestaurantList | specialty:specialtyFilter">
      <restaurant-display
        [restaurant] = "currentRestaurant"
      ></restaurant-display>
      <button (click) = "editButtonClicked(currentRestaurant)">Edit</button>
      <button (click) = "seeReviews(currentRestaurant)">Reviews</button>
      <review-list
        [restaurant] = "currentRestaurant"
        [childReviewList] = "reviewList"
        [grandchildRestaurantList] = "childRestaurantList"
      ></review-list>
    </div>
  `
})

export class RestaurantListComponent {
  @Input() childRestaurantList: Restaurant[];
  @Input() specialtyFilter: string;
  @Input() reviewList: Review[];
  @Output() editButtonSender = new EventEmitter();

  editButtonClicked(restaurantToEdit: Restaurant) {
    this.editButtonSender.emit(restaurantToEdit);
  }

  seeReviews(clickedRestaurant: Restaurant) {
    clickedRestaurant.reviews = true;
  }

}
