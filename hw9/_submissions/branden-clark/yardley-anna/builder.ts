class SandwichBuilder {
    public sandwich: Sandwich;
    constructor() { }
    public reset() {
        this.sandwich = new Sandwich();

    }
    public build() {
        // pass those attributes to the sandwich
        return this.sandwich;
    }
    public withBread() {
        this.sandwich.hasBread = true;

    }
    public withMeat() {
        this.sandwich.hasMeat = true;

    }
    public withCondiments() {
        this.sandwich.hasCondiments = true;

    }
}

class Sandwich {
    public hasBread: boolean;
    public hasMeat: boolean;
    public hasCondiments: boolean;

}

const paleo = new SandwichBuilder()

    paleo.withMeat();
    paleo.withCondiments()
    paleo.withMeat()
    paleo.build();