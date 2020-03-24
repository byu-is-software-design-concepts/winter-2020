class ShapeFactory {
    public static createShape(sides: number) {
        switch (sides) {
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
    constructor(sides:number) {
        this.numberOfSides = sides;
    }
}

class Circle extends Shape {
    constructor() {
        super(1)
    }
}

class Triangle extends Shape {
    constructor() {
        super(3)
    }
}

class Square extends Shape {
    constructor() {
        super(4)
    }
}