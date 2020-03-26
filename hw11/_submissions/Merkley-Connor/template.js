class customCar{
    constructor(){}
    buildCar(){
        this.createFrame()
        this.createEngine()
        this.createExhaust()
        this.createInterior()
        this.createColor()
    }
    createFrame(){
        console.log('Frame created')
    }
    createColor(){
        console.log('Color created')

    }
    createInterior(){
        console.log('Interior created')

    }

}

class sportsCar extends customCar{
    constructor(){
        super()
    }
    createExhaust(){
        console.log('Exhaust for Sports Car created')
    }
    createEngine(){
        console.log('Engine for Sports car created')
    }
}

class oldsMobile extends customCar{
    constructor(){
        super()
    }
    createExhaust(){
        console.log('Exhaust for oldsMobile created')
    }
    createEngine(){
        console.log('Engine for oldsMobile created')
    }
}