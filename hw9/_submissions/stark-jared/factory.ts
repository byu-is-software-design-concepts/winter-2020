class ShapeFactory {
    public static creatShape(sides: number): Shape {
        switch (sides) {
            case 0:
                return new Circle()
            case 3:
                return new Triangle()
            case 4:
                return new Square()
            case 5:
                return new Pentagon()
        }
    }
}

abstract class Shape {
    public numOfSides: number
    constructor(sides: number) {
        this.numOfSides = sides
    }
}

class Circle extends Shape {
    constructor() {
        super(0)
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

class Pentagon extends Shape {
    constructor() {
        super(5)
    }
}


const circle = ShapeFactory.creatShape(0)
const square = ShapeFactory.creatShape(4)
const triangle = ShapeFactory.creatShape(3)
const pentagon = ShapeFactory.creatShape(5)


console.log(circle instanceof Circle)
console.log(triangle instanceof Triangle)
console.log(pentagon instanceof Pentagon)
console.log(square instanceof Square)