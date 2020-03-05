class SandwichBuilder {
  public sandwich: Sandwich;
  constructor() {

  }

  public reset() {
    this.sandwich = new Sandwich();
  }

  public build() {
    // pass the attributes to the sandwich (if they were added to the builder to begin with)
    return this.sandwich;
  }

  public withBread() {
    this.sandwich.hasBread = true;
    return this;
  }
  public withMeat() {
    this.sandwich.hasMeat = true;
    return this;
  }
  public withCondiments() {
    this.sandwich.hasCondiments = true;
    return this;
  }
}

class Sandwich {
  public hasBread: boolean;
  public hasMeat: boolean;
  public hasCondiments: boolean;
}

const paleo = new SandwichBuilder()
  .withMeat()
  .build();

  const theWorks = new SandwichBuilder()
  .withMeat()
  .withBread()
  .withCondiments()
  .build();

console.log(paleo);
console.log(theWorks);