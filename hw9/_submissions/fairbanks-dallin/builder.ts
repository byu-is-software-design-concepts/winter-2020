class SandwichBuilder {
    public sandwich: Sandwich;
    constructor() {}
    public reset() {
        this.sandwich = new Sandwich()
    }
    public build() {
        // pass those attributes
        return this.sandwich;
    }
    public withBread() {
        this.sandwich.hasBread = true;
        return this;
    }
    public withCondiments() {
        this.sandwich.hasCondiments = true;
        return this;
    }
    public withMeat() {
        this.sandwich.hasMeat = true;
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
const TheWorks = new SandwichBuilder()
    .withMeat()
    .withCondiments()
    .withBread()
    .build();