class SandwhichBuilder {
  public sandwhich: Sandwhich;

  constructor() {
    this.sandwhich = new Sandwhich();
  }

  public reset() {
    this.sandwhich = new Sandwhich();
  }

  public build() {
    //pass those attributes
    return this.sandwhich;
  }

  public withBread() {
    this.sandwhich.hasBread = true;
    return this;
  }

  public withMeat() {
    this.sandwhich.hasMeat = true;
    return this;
  }

  public withCondiments() {
    this.sandwhich.hasCondiments = true;
    return this;
  }
}

class Sandwhich {
  public hasBread: boolean;
  public hasMeat: boolean;
  public hasCondiments: boolean;
}

const paleo = new SandwhichBuilder()
  .withBread()
  .withMeat()
  .build();

const theWords = new SandwhichBuilder()
  .withBread()
  .withMeat()
  .withCondiments()
  .build();
