// decorator
function Movie(title, lead, genre) {
    
    this.title = title;
    this.lead = lead;
    this.genre = genre;

}

var example = new Movie("Obi-Wan a Star Wars Story", "Ewan McGregor", "Space Fantasy" )

example.useWilhelmScream = function(scream){
    this.scream = scream;
}

var test = new Movie ("LOTR", "Everyone", "Fantasy")

test.flytoMordor = function(){
    this.eagle = false;
}


// flyweight
class npc{
    constructor(name, sex, job){
        this.name = name;
        this.sex = sex;
        this.job = job;
    }
}

class ShopKeeper extends npc{
    constructor(inventory){
        this.inventory = inventory;
    }
}

class Soldier extends npc{
    constructor(weapon){
        this.weapon = weapon;
    }
}