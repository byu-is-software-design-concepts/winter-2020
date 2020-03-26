//Example of a Template method that I found and based my learning over.
//building from a house template. Obviously you'd be able to add a lot more to this

class HouseTemplate {
    
    constructor(){};

    buildFoundations(){
        console.log('Building Foundations')
    }
    buildHouse(){
        this.buildFoundations();
        this.buildPillars();
        this.buildWalls();
        this.buildWindows();
    }
    buildFoundations(){
        console.log('Building foundations')
    }

    buildWindows() {
        console.log('I am done with windows')
    }
}