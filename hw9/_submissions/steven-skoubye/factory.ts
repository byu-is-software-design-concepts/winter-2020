class ShapeFactory {
    public static createShape(sides: number): Shape {
        switch (sides) {
            case 1:
                return new circle();
            case 3:
                return new triangle();
            case 4:
                return new square();
        }
    }
}

abstract class Shape {
    public numberOfSides: number;
    constructor(sides: number) {
        this.numberOfSides = sides;
    }
}

class circle extends Shape {
    constructor() {
        super(1);
    }
}

class triangle extends Shape {
    constructor() {
        super(3);
    }
}

class square extends Shape {
    constructor() {
        super(4);
    }
}

const circle = ShapeFactory.createShape(1)
const triangle = ShapeFactory.createShape(3)
const square = ShapeFactory.createShape(4)

console.log(circle instanceof circle);
console.log(triangle instanceof triangle);
console.log(square instanceof square);