class ShapeFactory {
    public static createShape(sides: number) : Shape {
        switch (sides) {
            case 1:
                return new Circle();
            case 3:
                return new Triangle();
            case 4: 
                return new Square();
            default:
        }
    }
}

abstract class Shape {
    public numOfSides: number;
    public constructor(sidesNum:number) {
        this.numOfSides = sidesNum;
    }
} 

class Circle extends Shape {
    constructor() {
        super(1);
    }
}

class Triangle extends Shape {
    constructor() {
        super(3);
    }
}

class Square extends Shape {
    constructor() {
        super(4);
    }
}

const circle = new Circle();
const triangle = new Triangle();
const square = new Square();

console.log('circle instanceof Circle? ', circle instanceof Circle);
console.log('triangle instanceof Triangle? ', triangle instanceof Triangle);
console.log('square instanceof Square? ', square instanceof Square);