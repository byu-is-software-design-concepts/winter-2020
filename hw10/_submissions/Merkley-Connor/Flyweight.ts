function Flyweight (make, model, processor) {
    this.make = make;
    this.model = model;
    this.processor = processor;
};
 
const FlyWeightFactory = (function () {
    let flyweights = {};
 
    return {
 
        get: function (make, model, processor) {
            if (!flyweights[make + model]) {
                flyweights[make + model] = 
                    new Flyweight(make, model, processor);
            }
            return flyweights[make + model];
        },
    }
})();

function ComputerCollection () {
    let computers = {};
    return {
        add: function (make, model, processor, memory, tag) {
            computers[tag] = 
                new Computer(make, model, processor, memory, tag);
        },
    };
}
 
const Computer = function (make, model, processor, memory, tag) {
    this.flyweight = FlyWeightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
    this.getMake = function () {
        return this.flyweight.make;
    }
}