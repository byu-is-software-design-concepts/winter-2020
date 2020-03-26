var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CatchPokemon = /** @class */ (function () {
    function CatchPokemon() {
    }
    CatchPokemon.prototype.visit = function (item) {
        if (item instanceof Common) {
            console.log("You captured " + item.name + "with a Poke Ball!");
        }
        if (item instanceof Rare) {
            console.log("You captured " + item.name + "with an Ultra Ball!");
        }
        if (item instanceof Legendary) {
            console.log("You captured " + item.name + "with a Master Ball!");
        }
    };
    return CatchPokemon;
}());
var Pokemon = /** @class */ (function () {
    function Pokemon(name) {
        this.name = name;
    }
    Pokemon.prototype.accept = function (v) {
        v.visit(this);
    };
    return Pokemon;
}());
var Common = /** @class */ (function (_super) {
    __extends(Common, _super);
    function Common(name) {
        return _super.call(this, name) || this;
    }
    return Common;
}(Pokemon));
var Rare = /** @class */ (function (_super) {
    __extends(Rare, _super);
    function Rare(name) {
        return _super.call(this, name) || this;
    }
    return Rare;
}(Pokemon));
var Legendary = /** @class */ (function (_super) {
    __extends(Legendary, _super);
    function Legendary(name) {
        return _super.call(this, name) || this;
    }
    return Legendary;
}(Pokemon));
var Pokemons = /** @class */ (function () {
    function Pokemons(pokemons) {
        if (pokemons === void 0) { pokemons = []; }
        this.pokemons = pokemons;
    }
    Pokemons.prototype.accept = function (v) {
        this.pokemons.forEach(function (e) { return e.accept(v); });
    };
    return Pokemons;
}());
var list = new Pokemons([
    new Common("Rattata"),
    new Rare("Blastoise"),
    new Legendary("Arcticuno"),
    new Common("Venomoth")
]);
list.accept(new CatchPokemon());
//# sourceMappingURL=visitor.js.map