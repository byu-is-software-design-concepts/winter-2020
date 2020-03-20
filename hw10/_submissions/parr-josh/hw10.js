/////////////////////////////////////////////////
//         FLYWEIGHT DESIGNN PATTERN           //
/////////////////////////////////////////////////
class BasketballShoe {
  constructor(color, price, brand) {
    this.color = color;
    this.price = price;
    this.brand = brand;
  }
}

class shoeFactory {
  constructor() {
    this._basketballShoes = [];
  }

  createBasketballShoe(color, price, brand) {
    let bballShoe = this.getBasketballShoe(color);
    if (bballShoe) {
      return bballShoe;
    } else {
      const newBasketballShoe = new BasketballShoe(color, price, brand);
      this._basketballShoes.push(newBasketballShoe);
      return newBasketballShoe;
    }
  }

  getBasketballShoe(color) {
    return this._basketballShoes.find(shoe => shoe.color === color);
  }
}

const factory = new shoeFactory();
const lebronNike = factory.createBasketballShoe("White", 115, "Nike - Lebron");
const kobeNike = factory.createBasketballShoe("Black", 150, "Nike - Kobe");

console.log(lebronNike);
console.log(kobeNike);

/////////////////////////////////////////////////
//         ADAPTER DESIGNN PATTERN             //
/////////////////////////////////////////////////
// old interface
function TicketPrice() {
  this.request = function(start, end, extraLuggage) {
    //Calculate Price....
    return "$200";
  };
}
// new interface
function NewTicketPrice() {
  this.login = function(credentials) {
    /* process credentials */
  };
  this.setStart = function(start) {
    /* set start point */
  };
  this.setDestination = function(destination) {
    /* set destination */
  };
  this.calculate = function(extraLuggage) {
    //price calculation ...
    return "$150";
  };
}
// adapter interface
function TicketAdapter(credentials) {
  var pricing = new NewTicketPrice();
  pricing.login(credentials);
  return {
    request: function(start, end, extraLuggage) {
      pricing.setStart(start);
      pricing.setDestination(end);
      return pricing.calculate(extraLuggage);
    }
  };
}
var pricing = new TicketPrice();
var credentials = { token: "30a8-6ee1" };
var adapter = new TicketAdapter(credentials);
// original ticket pricing and interface
var price = pricing.request("Amsterdam", "Netherlands", 20);
console.log("Old price: " + price);
// new ticket pricing with adapted interface
price = adapter.request("Amsterdam", "Netherlands", 20);
console.log("New price: " + price);
