export default abstract class House {
    levels: number;
    doors: number;
    windows: number;
    cost: number;

    constructor(levels: number, doors: number, windows: number) {
        this.levels = levels;
        this.doors = doors;
        this.windows = windows;
    }

    buildFoundation() {
        console.log("Dig deep into the ground and fill it with cement.");
    }

    buildRoof() {
        console.log("Building a sturdy roof.");
    }

    buildWalls() {
        console.log("Building all the walls.");
    }

    build() {
        this.buildFoundation();
        this.buildWalls();
        this.buildRoof();
    }

    calculateCost(): number {return this.levels * 10000 + this.windows * 100 + this.doors * 500;}

}