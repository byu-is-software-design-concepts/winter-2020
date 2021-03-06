class SandwichBuilder
{
    public sandwich: Sandwich;
    constructor()
    {

    }
    public reset()
    {
        this.sandwich = new Sandwich();
    }
    //could also pass sandwich data here
    public build()
    {
        return this.sandwich;
    }
    public withBread()
    {
        this.sandwich.hasBread = true;
        return this;
    }
    public withCondiments()
    {
        this.sandwich.hasCondiments = true;
        return this;
    }
    public withMeat()
    {
        this.sandwich.hasMeat = true;
        return this;
    }
}

class Sandwich
{
    public hasBread: boolean;
    public hasMeat: boolean;
    public hasCondiments: boolean;
}

const paleo = new SandwichBuilder()
    .withMeat()
    .build();

const theCanadianCabin = new SandwichBuilder()
    .withBread()
    .withCondiments()
    .withMeat()
    .build();