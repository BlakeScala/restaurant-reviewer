import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: 'edit-restaurant',
  template: `
    <div *ngIf = 'childSelectedRestaurant' class="well">
      <h2>Edit Restaurant</h2>
      <div class="form-group">
        <label for="restaurantName">Restaurant Name</label>
        <input [(ngModel)]="childSelectedRestaurant.name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="specialty">Specialty</label>
        <input [(ngModel)]="childSelectedRestaurant.specialty" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input [(ngModel)]="childSelectedRestaurant.address" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="cost">Cost</label>
        <select [(ngModel)]="childSelectedRestaurant.cost" class="form-control dollar">
          <option value="1"> $</option>
          <option value="2"> $ $</option>
          <option value="3"> $ $ $</option>
          <option value="4"> $ $ $ $</option>
          <option value="5"> $ $ $ $ $</option>
        </select>
      </div>
      <div class="form-group">
        <label for="picture">Enter a picture URL</label>
        <input [(ngModel)]="childSelectedRestaurant.picture" type="text" class="form-control" value="null">
      </div>
      <button class="btn btn-danger"(click)="editDone()">Done</button>
    </div>
  `
})

export class EditRestaurantComponent {
  @Input() childSelectedRestaurant: Restaurant;
  @Output() clickSender = new EventEmitter();

  editDone() {
    this.clickSender.emit();
  }
}
