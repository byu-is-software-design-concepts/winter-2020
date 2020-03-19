interface Color {
    opacity: number;
    rgb: string;
    hex: string;
}

class Blue implements Color {
    opacity: number;
    rgb = "0, 0, 255";
    hex = "#0000ff";

    constructor(opacity:number) {
        this.opacity = opacity;
    }
}

class Red implements Color {
    opacity: number;
    rgb = "255, 0, 0";
    hex = "#ff0000";
    
    constructor(opacity:number) {
        this.opacity = opacity;
    }
}

abstract class Shape {
    color: Color;
    constructor(color:Color) {
        this.color = color;
    }
}

class Square extends Shape {
    constructor(color:Color) {
        super(color);
    }
}

class Circle extends Shape {
    constructor(color:Color) {
        super(color);
    }
}


console.log(new Square(new Red(1)));