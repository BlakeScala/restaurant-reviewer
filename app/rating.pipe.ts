import { Pipe, PipeTransform  } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Pipe ({
  name: "rating",
  pure: false
})

export class RatingPipe implements PipeTransform {
  transform(input: Restaurant[], desiredRating) {
    var output: Restaurant[] = [];
    for(var i = 0; i < input.length; i++){
      if (input[i].averageRating >= desiredRating) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
