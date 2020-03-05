class SandwichBuilder {
    public sandwich: Sandwich;
    constructor() {}
    public reset() {
        this.sandwich = new Sandwich;
    }
    public build() {
        return this.sandwich;
    }
    public withBread(){
        this.sandwich.hasBread = true;
        return this;
    }
    public withMeat(){
        this.sandwich.hasMeat = true;
        return this;
    }
    public withCondiments(){
        this.sandwich.hasCondiments = true;
        return this;
    }
}

class Sandwich {
    public hasBread: Boolean;
    public hasMeat: Boolean;
    public hasCondiments: Boolean;
}

const paleo = new SandwichBuilder()
    .withMeat();
    .build();

const theWorks = new SandwichBuilder()
    .withMeat();
    .withBread();
    .withCondiments();
    .build();