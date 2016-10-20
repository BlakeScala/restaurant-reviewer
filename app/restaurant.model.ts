export class Restaurant {
  public reviews: boolean = false;
  public starArray: string[] = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];
  public dollarArray: string[] = ["$", "$$", "$$$", "$$$$", "$$$$$"];
  public ratingsArray: number[] = [];
  public averageRating: number = 0;
  public starRating: string = "No Ratings Yet";
  public costIcon: string = this.setDollarSigns();
  constructor(public name: string, public specialty: string, public address: string, public cost: number, public id: number, public picture?: string) { }

  calculateAverageRating() {
    console.log("This works");
    var ratingsSum: number = 0;
    for(var i = 0; i < this.ratingsArray.length; i++) {
      ratingsSum += this.ratingsArray[i];
    }
    this.averageRating = ratingsSum / this.ratingsArray.length;
  }

  setStarRating() {
    for(var i = 0; i < this.starArray.length; i++) {
      if(Math.floor(this.averageRating-1) == i) {
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
