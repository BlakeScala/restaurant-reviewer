import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: 'restaurant-display',
  template: `
    <div ng-init="restaurant.calculateAverageRating()">
      <h3>{{ restaurant.name }}</h3>
      <p>{{ restaurant.averageRating }}<p>
    </div>
  `
})

export class RestaurantComponent {
  @Input() restaurant: Restaurant;

}
