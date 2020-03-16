class ShapeFactory {
    public static createShape(sides: number){
        switch (sides) {
            case 1:
                return new Circle();
            case 2:
                return new Square();
                
                
        }
    };

}

abstract class Shape {
    public numberOfSides: number;
    constructor(sides: number){
        this.numberOfSides = sides;
    }
}

class Circle extends Shape {
    constructor() {
        super(1);
    }
}

class Square extends Shape {
    constructor() {
        super(4);
    }
}

class Triangle extends Shape {
    constructor() {
        super(3);
    }
}

const circle = ShapeFactory.createShape(1);
const square = ShapeFactory.createShape(4);

console.log(circle instanceof Circle);
console.log(circle instanceof Square);