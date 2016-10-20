export class Restaurant {
  public reviews: boolean = false;
  public starArray: string[] = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];
  public dollarArray: string[] = [" $", " $ $", " $ $ $", " $ $ $ $", " $ $ $ $ $"];
  public ratingsArray: number[] = [];
  public averageRating: number = 0;
  public starRating: string = "No Ratings Yet";
  public costIcon: string = this.setDollarSigns();
  constructor(public name: string, public specialty: string, public address: string, public cost: number, public id: number, public picture?: string) { }

  calculateAverageRating() {
    console.log("This works");
    var ratingsSum: number = 0;
    var roundRating: number = 0;
    for(var i = 0; i < this.ratingsArray.length; i++) {
      ratingsSum += this.ratingsArray[i];
    }
    roundRating = ratingsSum / this.ratingsArray.length;
    if(roundRating - Math.floor(roundRating) >= 0.5) {
      this.averageRating = Math.ceil(roundRating);
    } else {
      this.averageRating = Math.floor(roundRating);
    }
  }

  setStarRating() {
    for(var i = 0; i < this.starArray.length; i++) {
      if(this.averageRating-1 == i) {
        this.starRating = this.starArray[i];
      }
    }
  }

  setDollarSigns() {
    for(var i = 0; i < this.dollarArray.length; i++) {
      if (this.cost - 1 == i) {
        this.costIcon = this.dollarArray[i];
      }
    }
    return this.costIcon;
  }
}
