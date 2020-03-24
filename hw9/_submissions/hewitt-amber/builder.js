var SandwichBuilder = /** @class */ (function () {
    function SandwichBuilder() {
    }
    SandwichBuilder.prototype.reset = function () {
        this.sandwich = new Sandwich();
    };
    SandwichBuilder.prototype.build = function () {
        // pass attributes to sandwich
        return this.sandwich;
    };
    SandwichBuilder.prototype.withBread = function () {
        this.sandwich.hasBread = true;
        return this;
    };
    SandwichBuilder.prototype.withMeat = function () {
        this.sandwich.hasMeat = true;
        return this;
    };
    SandwichBuilder.prototype.withCondiments = function () {
        this.sandwich.hasCondiments = true;
        return this;
    };
    return SandwichBuilder;
}());
var Sandwich = /** @class */ (function () {
    function Sandwich() {
    }
    return Sandwich;
}());
var paleo = new SandwichBuilder()
    .withMeat()
    .build();
var theWorks = new SandwichBuilder()
    .withBread()
    .withCondiments()
    .build();
//# sourceMappingURL=builder.js.map