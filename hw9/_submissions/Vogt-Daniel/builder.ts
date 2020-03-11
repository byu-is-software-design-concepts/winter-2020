class SandwichBuilder {
    public sandwich: Sandwich
    constructor(){}
    public reset() {
        this.sandwich = new Sandwich()
    }
    public build() {
        // pass attributes to sandwhich
        return this.sandwich
    }
    public withBread() {
        this.sandwich.hasBread = true
    } 
    public withMeat() {
        this.sandwich.hasBread = true
    }   
    public withCondiments() {
        this.sandwich.hasBread = true
    }       
} 

class Sandwich {
    public hasBread: boolean
    public hasMeat: boolean
    public hasCondiments: boolean
}

const paleo = new Sandwich()
.withMeat()
.build()

const theWorks = new SandwichBuilder()
.withMeat()
.withBread()
.withCondiments()
.build()