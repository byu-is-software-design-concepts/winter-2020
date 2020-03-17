// Have a single place to create multiple subclasses.
// Handle frequently changing and growing abstract class implementations.
// Ex: Animal abstract class. We need to create more and more types of classes, like lizards and birds and stuff.
// A facory makes it simple to create classes from an abstract class.

class ShapeFactory {
    public static createShape(sides: number): Shape{
        switch(sides){
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
const triangle = ShapeFactory.createShape(3);
const square = ShapeFactory.createShape(4);

console.log(circle instanceof Circle);
console.log(triangle instanceof Triangle);
console.log(square instanceof Square);