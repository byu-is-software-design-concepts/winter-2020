// BUILDER DESIGN PATTERN
// Separate the construction of a complex object from its representation

// Advantages:
// 1. Parameters in the constructor are reduced and served in more readable way
// (no need to pass in null for optional parameters)
// 2. Forcing immutability to the object you are done with the creation of object

// Builder class builds the final object step by step
// Independent of other objects
class SandwichBuilder{
    public sandwich: Sandwich;
    constructor() {}
    public reset(){
        this.sandwich = new Sandwich;
    }
    public build() {
        // pass those attributes
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

