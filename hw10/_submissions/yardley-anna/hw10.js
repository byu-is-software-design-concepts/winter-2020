// flyweight class
// creating new ice crem flavors for my friend's upcoming ice cream shop. New ice cream flavor's are recycled if the flavor has already been created

class Icecream {
  constructor(flavour, price) {
    this.flavour = flavour;
    this.price = price;
  }
}

// factory for flyweight objects
class IcecreamFactory {
  constructor() {
    this._icecreams = [];
  }

  createIcecream(flavour, price) {
    let icecream = this.getIcecream(flavour);
    if (icecream) {
      return icecream;
    } else {
      const newIcecream = new Icecream(flavour, price);
      this._icecreams.push(newIcecream);
      return newIcecream;
    }
  }

  getIcecream(flavour) {
    return this._icecreams.find(icecream => icecream.flavour === flavour);
  }
}

// usage
const factory = new IcecreamFactory();

const chocoVanilla = factory.createIcecream('chocolate and vanilla', 15);
const vanillaChoco = factory.createIcecream('chocolate and vanilla', 15);