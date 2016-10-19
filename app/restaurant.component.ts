import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: 'restaurant-display',
  template: `
    <div>
      <h3>{{ restaurant.name }}</h3>
    </div>
  `
})

export class RestaurantComponent {
  @Input() restaurant: Restaurant;
}
