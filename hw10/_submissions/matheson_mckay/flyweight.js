function CarFlyWeight (make, model, engine) {
    this.make = make;
    this.model = model;
    this.engine = engine;
};
 
let CarFactory = (function () {
    let cars = {};
 
    return {
 
        get: function (make, model, engine) {
            if (!cars[make + model]) {
                cars[make + model] = 
                    new CarFlyWeight(make, model, engine);
            }
            return cars[make + model];
        },
 
        getCount: function () {
            let count = 0;
            for (let c in cars) count++;
            return count;
        }
    }
})();
 
function CarCollection () {
    let cars = {};
    let count = 0;
 
    return {
        add: function (make, model, engine, year, color) {
            cars[color] = 
                new Car(make, model, engine, year, color);
            count++;
        },
 
        get: function (color) {
            return cars[color];
        },
 
        getCount: function () {
            return count;
        }
    };
}
 
let Car = function (make, model, engine, year, color) {
    this.flyweight = FlyWeightFactory.get(make, model, engine);
    this.year = year;
    this.color = color;
    this.getMake = function () {
        return this.flyweight.make;
    }
    // ...
}
 
// log helper
 
let log = (function () {
    let log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    let cars = new CarCollection();
    
    cars.add("Honda", "Civic", "4-cylinder", "2020", "red");
 
    log.add("cars: " + cars.getCount());
    log.add("cars: " + FlyWeightFactory.getCount());
    log.show();
}