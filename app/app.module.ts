import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent }   from './app.component';
import { NewRestaurantComponent } from './new-restaurant.component';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantComponent} from './restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { RestaurantFilterComponent } from './restaurant-filter.component';
import { SpecialtyPipe } from './specialty.pipe';
import { ReviewListComponent } from './review-list.component';
import { NewReviewComponent } from './new-review.component';
import { ReviewDisplayComponent } from './review.component';
import { RatingPipe } from './rating.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewRestaurantComponent,
    RestaurantListComponent,
    RestaurantComponent,
    EditRestaurantComponent,
    RestaurantFilterComponent,
    SpecialtyPipe,
    ReviewListComponent,
    NewReviewComponent,
    ReviewDisplayComponent,
    RatingPipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
