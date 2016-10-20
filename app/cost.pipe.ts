import { Pipe, PipeTransform  } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Pipe ({
  name: "cost",
  pure: false
})

export class CostPipe implements PipeTransform {
  transform(input: Restaurant[], desiredCost) {
    var output: Restaurant[] = [];
    for(var i = 0; i < input.length; i++) {
      if(input[i].cost <= desiredCost) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
