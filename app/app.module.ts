import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent }   from './app.component';
import { NewRestaurantComponent } from './new-restaurant.component';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantComponent} from './restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant.component';

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
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
