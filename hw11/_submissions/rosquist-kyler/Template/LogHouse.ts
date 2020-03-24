import House from './House'

export default class LogHouse extends House {
    constructor(levels: number, doors: number, windows: number) {
        super(levels, doors, windows);
    }

    buildFoundation() {
        console.log("Lay some timber on bare ground.");
    }

    buildWalls() {
        console.log("Layer on some beautiful, thick oak as walls.");
    }

    calculateCost(): number {return this.levels * 10000 + this.windows * 100 + this.doors * 500;}
}