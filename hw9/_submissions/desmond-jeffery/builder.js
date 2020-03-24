var SandwichBuilder = /** @class */ (function () {
    function SandwichBuilder() {
    }
    SandwichBuilder.prototype.reset = function () {
        this.sandwich = new Sandwich();
    };
    SandwichBuilder.prototype.build = function () {
        // pass those attributes to the sandwich
        return this.sandwich;
    };
    SandwichBuilder.prototype.withBread = function () {
        this.sandwich.hasBread = true;
    };
    SandwichBuilder.prototype.withMeat = function () {
        this.sandwich.hasMeat = true;
    };
    SandwichBuilder.prototype.withCondiments = function () {
        this.sandwich.hasCondiments = true;
    };
    return SandwichBuilder;
}());
var Sandwich = /** @class */ (function () {
    function Sandwich() {
    }
    return Sandwich;
}());
var paleo = new SandwichBuilder();
paleo.withMeat();
paleo.withCondiments();
paleo.withMeat();
paleo.build();
//# sourceMappingURL=builder.js.map