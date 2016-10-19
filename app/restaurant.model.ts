export class Restaurant {
  public reviews: boolean = false;
  public ratingsArray: number[] = [];
  public averageRating: number = 0;
  constructor(public name: string, public specialty: string, public address: string, public cost: string, public id: number, public picture?: string) { }

  calculateAverageRating() {
    console.log("This works");
    var ratingsSum: number = 0;
    for(var i = 0; i < this.ratingsArray.length; i++) {
      ratingsSum += this.ratingsArray[i];
    }
    this.averageRating = ratingsSum / this.ratingsArray.length;
  }
}
