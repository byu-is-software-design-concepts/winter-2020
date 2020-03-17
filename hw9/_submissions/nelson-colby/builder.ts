class SandwichBuilder {
    public sandwich: Sandwich;
    constructor() {

    }
    public reset() {
        this.sandwich = new Sandwich()
    }
    public build() {
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
    public hasCondiments: boolean;
    public hasMeat: boolean;
}

const paleo = new SandwichBuilder()
    .withMeat()
    .build();

const theWorks = new SandwichBuilder()
    .withMeat()
    .withCondiments()
    .withBread()
    .build();