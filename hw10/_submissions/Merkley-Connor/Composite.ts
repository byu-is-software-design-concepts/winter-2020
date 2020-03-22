interface Character {
    open(): any
}

class Goods implements Character {
    contents: any;
    constructor(items: any) {
        this.contents = items;
    }
    open(){
        return this.contents;
    }
}

class Inventory implements Character {
    contents: Character[];
    constructor(characters: Character[]){
        this.contents = characters
    }

    open(){
        return this.contents.map(character => character.open())
    }
}