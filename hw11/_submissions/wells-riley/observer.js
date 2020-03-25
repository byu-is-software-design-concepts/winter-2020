//i used code from https://www.dofactory.com/javascript/observer-design-pattern
//tried to modify it as best I could to match the example of notifying when toilet paper is in stock, but this is all a bit over my head :)

function Click() {
    this.handlers = [];  // observers
}
 
Click.prototype = {
 
    subscribe: function(fn) {
        this.handlers.push(fn);
    },
 
    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    fire: function(o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}
 
// log helper
 
var log = (function() {
    var log = "Toilet Paper Back in Stock!";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
class Person {
    constructor(name, click) {
        this.name = name,
        this.click = click
    }
}

function run() {
 
    var clickHandler = function(item) { 
        log.add("fired: " + item); 
    };
 
    var click = new Click();
    var person = new Person("bob", click);

    person.click.subscribe(clickHandler);
    person.click.fire("Toilet Paper Back in Stock!")
 
    log.show();
}