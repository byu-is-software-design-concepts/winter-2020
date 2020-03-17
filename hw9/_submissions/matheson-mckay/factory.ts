class ShapeFactory {
    public static createShape(sides: number): Shape{
        switch(sides) {
            case 1:
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

const circle = ShapeFactory.createShape(1);
const tri = ShapeFactory.createShape(3);
const square = ShapeFactory.createShape(4);

console.log(circle instanceof Circle);
console.log(tri instanceof Triangle);
console.log(square instanceof Square);