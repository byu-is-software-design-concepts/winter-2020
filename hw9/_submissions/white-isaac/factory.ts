class ShapeFactory {
    public static crateShape(sides: number): Shape {
        switch (sides) {
            case 0:
                return new Circle();
            case 3:
                return new Triangle();
            case 4:
                return new Square();
        }
    }
}

abstract class Shape {
    public numberOfSides: number;
    constructor(sides: number) {
        this.numberOfSides = sides;
    }
}

class Circle extends Shape {
    constructor() {
        super(0);
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

const circle = ShapeFactory.crateShape(0);
const triangle = ShapeFactory.crateShape(3);
const square = ShapeFactory.crateShape(4);

console.log(circle instanceof Circle);
console.log(triangle instanceof Triangle);
console.log(square instanceof Square);