class SandwichBuilder {
    public sandwhich: Sandwich;
    constructor() {}
    public reset() {
        this.sandwhich = new Sandwich();
    }
    public build() {
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

class Sandwich {
    public hasBread: boolean;
    public hasMeat: boolean;
    public hasCondiments: boolean;
}

const paleo = new SandwichBuilder()
    .withMeat()
    .withCondiments()
    .build();

const theWorks = new SandwichBuilder()
    .withMeat()
    .withBread()
    .withCondiments()
    .build();