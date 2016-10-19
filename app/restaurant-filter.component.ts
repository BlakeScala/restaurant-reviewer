import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'restaurant-filter',
  template: `
    <select (change) = "onChange($event.target.value)" class="filter">
      <option value="All">All</option>
      <option *ngFor ="let currentSpecialty of childSpecialtyList" [value]="currentSpecialty">{{ currentSpecialty }}</option>
    </select>
  `
})

export class RestaurantFilterComponent {
  @Input() childSpecialtyList: string[];
  @Output() specialtySender = new EventEmitter();

  public selectedSpecialty = "All";
  onChange(optionFromMenu) {
    this.selectedSpecialty = optionFromMenu;
    this.specialtySender.emit(this.selectedSpecialty);
  }
}
