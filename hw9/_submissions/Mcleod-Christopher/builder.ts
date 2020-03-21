// We didnt get to do much of this code in class

class SandwichBuilder {
    public sandwich: Sandwhich;
    constructor() {}
    public reset() {
        this.sandwich = new Sandwhich();
    }
    public build() {
        // pass those attributes to the sandwhich
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

class Sandwhich {
    public hasBread: boolean;
    public hasMeat: boolean;
    public hasCondiments: boolean;
}

const paleo = new SandwichBuilder()
    .withMeat()
    .build()

const theWorks = new SandwichBuilder()
    .withMeat()
    .withBread()
    .withCondiments()
    .build()