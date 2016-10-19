import { Component, Input, Output } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <new-restaurant
      [childRestaurantList] = "allRestaurants"
      (newRestaurantSender) = "addRestaurant($event)"
    ></new-restaurant>
    <restaurant-filter
      [childSpecialtyList] = "allSpecialties"
      (specialtySender) = "selectSpecialty($event)"
    ></restaurant-filter>
    <restaurant-list
      [childRestaurantList] = "allRestaurants"
      [specialtyFilter] = "selectedSpecialty"
      (editButtonSender)= "showDetails($event)"
    ></restaurant-list>
    <edit-restaurant
      [childSelectedRestaurant] = "selectedRestaurant"
      (clickSender) = "finishedEditing()"
    ></edit-restaurant>
  </div>
  `
})

export class AppComponent {
  allRestaurants: Restaurant[] = [
    new Restaurant("Joe's Pizza", "Pizza", "1234 N 15th", "$$", 0, "https://s3-media3.fl.yelpcdn.com/bphoto/p3_DBtzBdy82bNB5iog7jQ/o.jpg"),
    new Restaurant("Augustine's Pizza", "Pizza", "132 Croton Ave.", "$$$$", 1, "https://i.ytimg.com/vi/70R2DNL4EmQ/maxresdefault.jpg"),
    new Restaurant("Nong's Khao Man Gai", "Thai", "609 SE Ankeny St, Suite C", "$$$$", 2,  "http://pica.org/wp-content/uploads/2012/09/TBA12_Nongs_960.jpg"),
    new Restaurant("Fuego Burrito", "Burritos", "Many Locations", "$$$", 3, "http://roaminghunger.com/img/trucks/original/5882/56b10981-7d64-4b3e-9c8a-4c5246204482.jpg")
  ];

  allReviews: Review[] = [];
  allSpecialties: string[] = ["Pizza", "Thai", "Burritos"];

  selectedRestaurant: Restaurant = null;
  selectedSpecialty: string = "All";

  showDetails(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
  }

  finishedEditing() {
    this.selectedRestaurant = null;
  }

  addRestaurant(newRestaurantFromChild: Restaurant) {
    this.allRestaurants.push(newRestaurantFromChild);
    if(this.allSpecialties.indexOf(newRestaurantFromChild.specialty) === -1) {
      this.allSpecialties.push(newRestaurantFromChild.specialty);
    }
  }

  selectSpecialty(childSelectedSpecialty: string) {
    this.selectedSpecialty = childSelectedSpecialty;
  }

}
