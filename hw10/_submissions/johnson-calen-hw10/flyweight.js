
class Soccerball {
    constructor(color, price, brand) {
      this.color = color;
      this.price = price;
      this.brand = brand;
    }
  }
  
  class ballFactory {
    constructor() {
      this._soccerBalls = [];
    }
  
    createSoccerball(color, price, brand) {
      let sBall = this.getball(color);
      if (sBall) {
        return sBall;
      } else {
        const newSoccerBall = new BasketballShoe(color, price, brand);
        this._soccerBalls.push(newSoccerBall);
        return newSoccerBall;
      }
    }
  
    getball(color) {
      return this._soccerBalls.find(ball => ball.color === color);
    }
  }
  
  const factory = new ballFactory();
  const NikeBall = factory.createSoccerball("White-Black", 25, "Nike");
  const AdiasBall = factory.createSoccerball("Orange-Greeb", 30, "Adias");
  
  console.log(NikeBall);
  console.log(AdiasBall);
  
 