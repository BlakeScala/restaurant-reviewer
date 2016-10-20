import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: 'restaurant-display',
  template: `
    <div ng-init="restaurant.calculateAverageRating(); restaurant.setStarRating(); restaurant.setDollarSigns()">
      <h3>{{ restaurant.name }}</h3>
      <p>Rating: {{ restaurant.starRating }}<p>
      <p>Cuisine: {{ restaurant.specialty }}<p>
      <p>Location: {{ restaurant.address }}<p>
      <p>Cost: {{ restaurant.costIcon }}<p>
    </div>
  `
})

export class RestaurantComponent {
  @Input() restaurant: Restaurant;

}
