var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.createShape = function (sides) {
        switch (sides) {
            case 1:
                return new Circle();
            case 3:
                return new Triangle();
            case 4:
                return new Square();
        }
    };
    return ShapeFactory;
}());
var Shape = /** @class */ (function () {
    function Shape(sides) {
        this.numberOfSides = sides;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super.call(this, 1) || this;
    }
    return Circle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super.call(this, 3) || this;
    }
    return Triangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super.call(this, 4) || this;
    }
    return Square;
}(Shape));
var circle = ShapeFactory.createShape(1);
var triangle = ShapeFactory.createShape(3);
var square = ShapeFactory.createShape(4);
console.log(circle instanceof Circle);
console.log(triangle instanceof Triangle);
console.log(square instanceof Square);
// execute with ts-node filename
//# sourceMappingURL=factory.js.map