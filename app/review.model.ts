export class Review {
  public starArray: string[] = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];
  public starRating: string = "No Ratings Yet";
  constructor(public reviewer: string, public waitTime: number, public rating: number, public description: string, public restaurantId: number) { }

  setStarRating() {
    for(var i = 0; i < this.starArray.length; i++) {
      if(this.rating-1 == i) {
        this.starRating = this.starArray[i];
      }
    }
  }
}
