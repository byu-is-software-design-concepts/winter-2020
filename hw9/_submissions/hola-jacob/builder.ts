class SandwhichBuilder{
    public sandwhich: Sandwhich;

    constructor(){}
    public reset() {
        this.sandwhich = new Sandwhich
    }
    public build() {
        return this.sandwhich
    }
    public withBread() {
        this.sandwhich.hasBread = true
        return this
    }
    public withCondiments() {
        this.sandwhich.hasBread = true
        return this
    }
    public withMeat() {
        this.sandwhich.hasMeat = true
        return true
    }

    
}

class Sandwhich {
    public hasBread: boolean
    public hasMeat: boolean
    public hasCondiments: boolean
}

const paleo = new SandwhichBuilder()
    .withMeat()
    .build()

const theWorks = new SandwhichBuilder()
    .withMeat()
    .withBread()
    .withCondiments()
    .build()