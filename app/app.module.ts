import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent }   from './app.component';
import { NewRestaurantComponent } from './new-restaurant.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewRestaurantComponent,
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
