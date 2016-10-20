import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'restaurant-filter',
  template: `
    <h3>Filters</h3>
    <select (change) = "specialtyChange($event.target.value)" class="filter form-control">
      <option value="All">All</option>
      <option *ngFor ="let currentSpecialty of childSpecialtyList" [value]="currentSpecialty">{{ currentSpecialty }}</option>
    </select>
    <select (change) = "ratingChange($event.target.value)" class="filter form-control">
      <option value="0">No preference</option>
      <option value="1">At least 1 Star</option>
      <option value="2">At least 2 Stars</option>
      <option value="3">At least 3 Stars</option>
      <option value="4">At least 4 Stars</option>
    </select>
    <select (change) = "costChange($event.target.value)" class="filter form-control">
      <option value="1">$</option>
      <option value="2">$$</option>
      <option value="3">$$$</option>
      <option value="4">$$$$</option>
      <option value="5">$$$$$</option>
    </select>
  `
})

export class RestaurantFilterComponent {
  @Input() childSpecialtyList: string[];
  @Output() specialtySender = new EventEmitter();
  @Output() ratingSender = new EventEmitter();
  @Output() costSender = new EventEmitter();

  public selectedSpecialty = "All";
  specialtyChange(optionFromMenu) {
    this.selectedSpecialty = optionFromMenu;
    this.specialtySender.emit(this.selectedSpecialty);
  }

  public selectedRating = 0;
  ratingChange(optionFromMenu) {
    this.selectedRating = parseInt(optionFromMenu);
    this.ratingSender.emit(this.selectedRating);
  }

  public selectedCost = 5;
  costChange(optionFromMenu) {
    this.selectedCost = parseInt(optionFromMenu);
    this.costSender.emit(this.selectedCost);
  }
}
