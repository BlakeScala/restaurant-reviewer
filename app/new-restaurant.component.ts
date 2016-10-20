import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'new-restaurant',
  template: `
    <div *ngIf="show" class="well">
      <h2>New Restaurant</h2>
      <div class="form-group">
        <label for="restaurantName">Restaurant Name</label>
        <input #restaurantName type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="specialty">Specialty</label>
        <input #specialty name="specialty" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input #address type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="cost">Cost</label>
        <select #cost class="form-control dollar">
          <option value="1"> $</option>
          <option value="2"> $ $</option>
          <option value="3"> $ $ $</option>
          <option value="4"> $ $ $ $</option>
          <option value="5"> $ $ $ $ $</option>
        </select>
      </div>
      <div class="form-group">
        <label for="picture">Enter a picture URL</label>
        <input #picture type="text" class="form-control">
      </div>
      <button class="btn" id="new-restaurant" (click)="
        addClicked(restaurantName.value, specialty.value, address.value, cost.value, childRestaurantList.length, picture.value);
        restaurantName.value='';
        specialty.value='';
        address.value='';
        cost.value='';
        picture.value='';
      ">Add Restaurant</button>
    </div>
  `
})

export class NewRestaurantComponent {
  @Output() newRestaurantSender = new EventEmitter();
  @Input() show: boolean;
  @Input() childRestaurantList: Restaurant[];
  addClicked(name: string, specialty: string, address: string, cost: string, id: number, picture: string) {
    if (name == "" || specialty == "" || address == "" || cost == "") {
      alert("Please fill out the entire form.");
    } else {
      var numCost: number = parseInt(cost);
      var newRestaurantToAdd: Restaurant = new Restaurant(name, specialty, address, numCost, id, picture);
      this.newRestaurantSender.emit(newRestaurantToAdd);
    }
  }
}
