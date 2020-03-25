//grabbed sample code from https://www.dofactory.com/javascript/strategy-design-pattern
//modified from shipping cost calculations to distance calculations based on transportation method

var Distance = function() {
    this.transMethod = "";
};
 
Distance.prototype = {
    setStrategy: function(transMethod) {
        this.transMethod = transMethod;
    },
 
    calculate: function(route) {
        return this.transMethod.calculate(route);
    }
};
 
var Bike = function() {
    this.calculate = function(route) {
        // calculations...
        return "5.9 miles";
    }
};
 
var Public = function() {
    this.calculate = function(route) {
        // calculations...
        return "6.8 miles";
    }
};
 
var Drive = function() {
    this.calculate = function(route) {
        // calculations...
        return "4.6 miles";
    }
};
 
// log helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
    var route = { from: "Start Address", to: "Destination Address" };
 
    // the 3 strategies
 
    var bike = new Bike();
    var public = new Public();
    var drive = new Drive();
 
    var distance = new Distance();
 
    distance.setStrategy(bike);
    log.add("Bike Strategy: " + distance.calculate(route));
    distance.setStrategy(public);
    log.add("Public Transit Strategy: " + distance.calculate(route));
    distance.setStrategy(drive);
    log.add("Driving Strategy: " + distance.calculate(route));
 
    log.show();
}