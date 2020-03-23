class SandwichBuilder {
    
    public sandwich: Sandwich;
    
    constructor() {
        this.reset();
    }

    public reset() {
        this.sandwich = new Sandwich();
    }

    public withBread() {
        this.sandwich.hasBread = true;
        return this;
    }

    public withCondiment() {
        this.sandwich.hasCondiments = true;
        return this;
    }

    public withMeat() {
        this.sandwich.hasMeat = true;
        return this;
    }

    public build() {
        return this.sandwich;
    }
}

class Sandwich {
    constructor() {}
    
    public hasBread: boolean;
    public hasCondiments: boolean;
    public hasMeat: boolean;
}

const nakedSand = new SandwichBuilder()
    .withMeat()
    .build();

console.log('no bread, no service', nakedSand);

