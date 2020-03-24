// Template class

class HouseTemplate{
    constructor(){};

    buildHouse(){
        this.buildFoundations();
        this.buildPillars();
        this.buildWalls();
        this.buildWindows();
    }
    buildFoundations(){
        console.log('Built foundation')
    }

    buildWindows(){
    console.log('Built windows');
    }
    buildPillars(){
        throw new Error('You have to build your own pillars')
    }
    buildWalls(){
        throw new Error('You have to build your own walls')
    }
}



// First extended class

class ColonialHouse extends HouseTemplate {
    constructor(){
        super()
    }
    buildPillars(){
        console.log('Building pillars for a colonial house')
    }
    buildWalls(){
        console.log('Building wallls for a colonial house')
    }
}



// Second extended class

class ApartmentComplex extends HouseTemplate {
    constructor(){
        super()
    }
    buildPillars(){
        console.log('Building pillars for an apartment complex')
    }
    buildWalls(){
        console.log('Building wallls for an apartment complex')
    }
}