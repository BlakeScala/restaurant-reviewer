export class Restaurant {
  public reviews: boolean = false;
  constructor(public name: string, public specialty: string, public address: string, public cost: string, public id: number, public picture?: string) { }
}
