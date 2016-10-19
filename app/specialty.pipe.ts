import { Pipe, PipeTransform  } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Pipe ({
  name: "specialty",
  pure: false
})

export class SpecialtyPipe implements PipeTransform {
  transform(input: Restaurant[], desiredSpecialty) {
    var output: Restaurant[] = [];
    if (desiredSpecialty === "All") {
      return input;
    } else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].specialty === desiredSpecialty) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
