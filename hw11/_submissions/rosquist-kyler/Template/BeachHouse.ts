import House from './House'

export default class BeachHouse extends House {

    constructor(levels: number, doors: number, windows: number) {
        super(levels, doors, windows);
    }

    buildRoof() {
        console.log("No need for a roof. That would block the rays.");
    }

    buildWalls() {
        console.log("Throwing some surf boards up as walls.");
    }

}