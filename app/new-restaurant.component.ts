import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'new-restaurant',
  template: `
    <h2>New Restaurant</h2>
    <div class="form-group">
      <label for="restaurantName">Restaurant Name</label>
      <input #restaurantName type="text" class="form-control">
    </div>
    <div class="form-group">
      <label for="specialty">Specialty</label>
      <input #specialty type="text" class="form-control">
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input #address type="text" class="form-control">
    </div>
    <div class="form-group">
      <label for="cost">Cost</label>
      <select #cost>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
        <option value="5">$$$$$</option>
      </select>
    </div>
    <div class="form-group">
      <label for="picture">Enter a picture URL</label>
      <input #picture type="text" class="form-control">
    </div>
    <button (click)="
      addClicked(restaurantName.value, specialty.value, address.value, cost.value, childRestaurantList.length, picture.value);
      restaurantName.value='';
      specialty.value='';
      address.value='';
      cost.value='';
      picture.value='';
    ">Add Restaurant</button>
  `
})

export class NewRestaurantComponent {
  @Output() newRestaurantSender = new EventEmitter();
  @Input() childRestaurantList: Restaurant[];
  addClicked(name: string, specialty: string, address: string, cost: string, id: number, picture: string) {
    var numCost = parseInt(cost);
    var newRestaurantToAdd: Restaurant = new Restaurant(name, specialty, address, numCost, id, picture);
    this.newRestaurantSender.emit(newRestaurantToAdd);
  }
}
