class AnimalTemplate{
    constructor(){};

    feedAnimal(){
        this.gatherFood();
        this.openCage();
        this.dropFood();
    }
    
    gatherFood(){
        console.log('collecting food');
    }

    openCage(){
        console.log('Opening cage')
    }

    dropFood(){
        throw new Error('You have to collect food first')
    }

}

class Bird extends AnimalTemplate {
    constructor(){
        super()
    }

    gatherFood(){
        console.log('Gathering seeds')
    }

    dropFood(){
        console.log('Dropping food into bird feeder')
    }
}

class Cat extends AnimalTemplate {
    constructor(){
        super()
    }

    gatherFood(){
        console.log('Gathering meat')
    }

    dropFood(){
        console.log('Food dropped in using a pole')
    }
} 