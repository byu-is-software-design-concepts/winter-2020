var Singleton = /** @class */ (function () {
    function Singleton() {
        this.id = Math.random();
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // reference to static part of singleton class = call constructor
        }
        return Singleton.instance;
    };
    return Singleton;
}());
var singleton = Singleton.getInstance();
var singletonJr = Singleton.getInstance();
console.log(singleton.id);
console.log(singletonJr.id); // use ts-node
console.log(singleton === singletonJr);
console.log({} === {});
//# sourceMappingURL=singleton.js.map