import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: 'edit-restaurant',
  template: `
    <div *ngIf = 'childSelectedRestaurant'>
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
        <select [(ngModel)]="childSelectedRestaurant.cost">
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
          <option value="$$$$$">$$$$$</option>
        </select>
      </div>
      <div class="form-group">
        <label for="picture">Enter a picture URL</label>
        <input [(ngModel)]="childSelectedRestaurant.picture" type="text" class="form-control" value="null">
      </div>
      <button (click)="editDone()">Done</button>
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
