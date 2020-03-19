// old interface
function TicketPrice() {
    this.request = function(start, end, overweightLuggage) {
        // price calculation ...
        return "$150.34";
    }
}
 
// new interface
function NewTicketPrice() {
    this.calculate = function(overweightLuggage) { 
        //price calculation ...
        return "$120.20"; 
    };
}
 
// adapter interface
function TicketAdapter(credentials) {
    var pricing = new NewTicketPrice();
  
    pricing.login(credentials);
  
    return {
        request: function(overweightLuggage) {
            return pricing.calculate(overweightLuggage);
        }
    };
}
 
var pricing = new TicketPrice();
var credentials = { token: "30a8-6ee1" };
var adapter = new TicketAdapter(credentials);
 
// original ticket pricing and interface
var price = pricing.request("Bern", "London", 20);
console.log("Old price: " + price);
 
// new ticket pricing with adapted interface
price = adapter.request("Bern", "London", 20);
console.log("New price: " + price);