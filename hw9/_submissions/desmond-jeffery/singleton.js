var Singleton = /** @class */ (function () {
    function Singleton() {
        this.data = [];
        this.id = Math.random();
    }
    ;
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.addData = function (num) {
        this.data.push(num);
    };
    Singleton.prototype.getData = function () {
        return this.data;
    };
    return Singleton;
}());
var singleton = Singleton.getInstance();
var singletonJr = Singleton.getInstance();
singleton.addData(1);
singleton.addData(2);
console.log(singleton.id);
console.log(singletonJr.id);
//# sourceMappingURL=singleton.js.map