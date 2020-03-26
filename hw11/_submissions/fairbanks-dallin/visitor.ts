interface Visitor 
{
    visit(item: Pokemon): void;
}

class CatchPokemon implements Visitor
{
    visit(item: Pokemon)
    {
        if (item instanceof Common) {
            console.log("You captured " + item.name + "with a Poke Ball!")
        }

        if (item instanceof Rare) {
            console.log("You captured " + item.name + "with an Ultra Ball!")
        }

        if (item instanceof Legendary) {
            console.log("You captured " + item.name + "with a Master Ball!")
        }
    }
}

interface Visitable 
{
    accept(v: Visitor): void;
}

class Pokemon implements Visitable {
    constructor
    (
        public name: string,
    ) {}

    public accept(v: Visitor)
    {
        v.visit(this);
    }
}

class Common extends Pokemon 
{
    constructor(name: string) 
    {
        super(name);
    }
}

class Rare extends Pokemon 
{
    constructor(name: string) 
    {
        super(name);
    }
}

class Legendary extends Pokemon 
{
    constructor(name: string) 
    {
        super(name);
    }
}

class Pokemons implements Visitable
{
    constructor(public pokemons: Pokemon[] = []) {}

    public accept(v: Visitor)
    {
        this.pokemons.forEach(e => e.accept(v));
    }
}

const list = new Pokemons
([
    new Common("Rattata"),
    new Rare("Blastoise"),
    new Legendary("Arcticuno"),
    new Common("Venomoth")
])

list.accept(new CatchPokemon());