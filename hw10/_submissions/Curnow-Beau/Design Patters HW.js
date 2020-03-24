// Decorator Pattern
// Movie class that becomes more specific based on genre.

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


// Flyweight Pattern
// Class for NPCs in an rpg

class NPC{
    constructor(name, gender, job){
        this.name = name;
        this.gender = gender;
        this.job = job;
    }
}

class ShopKeeper extends NPC{
    constructor(inventory){
        this.inventory = inventory;
    }
}

class Soldier extends NPC{
    constructor(weapon){
        this.weapon = weapon;
    }
}