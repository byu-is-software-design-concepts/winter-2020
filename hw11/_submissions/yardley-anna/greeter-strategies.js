// ways to greet people with "Strategies" 

var Greeter = function(strategy) {
    this.strategy = strategy;  
  };
   

  Greeter.prototype.greet = function() {
    return this.strategy();
  };
   
 
  // different Strategies that can be used
  var politeGreetingStrategy = function() {
   console.log("Hello."); 
  };
   
  var friendlyGreetingStrategy = function() {
    console.log("Hey!");
  };
   
  var boredGreetingStrategy = function() {
    console.log("sup.");
  };
   
 
  var politeGreeter   = new Greeter(politeGreetingStrategy);
  var friendlyGreeter = new Greeter(friendlyGreetingStrategy);
  var boredGreeter    = new Greeter(boredGreetingStrategy);
   
  politeGreeter.greet();   //=> Hello.
  friendlyGreeter.greet(); //=> Hey!
  boredGreeter.greet();    //=> sup.