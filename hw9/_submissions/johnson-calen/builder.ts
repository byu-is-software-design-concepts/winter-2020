class SandwichBuilder {
    public sandwich: Sandwich;
    constructor() {

    }
    public reset() {
        this.sandwich = new Sandwich();
    }
    public build() {

    }
    public withBread() {
        this.sandwich.hasBread =true
        return this
    }
    public withCondiments() {
        this.sandwich.hasCondiments =true
        return this
    }
    public withmeat() {
        this.sandwich.hasMeat =true
        return this
    }
}

class Sandwich {
    public hasBread: boolean;
    public hasMeat:  boolean; 
    public hasCondiments: boolean;
}