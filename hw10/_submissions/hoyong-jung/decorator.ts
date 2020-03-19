abstract class Car{
  public description: string;

  public getDescription() : string{
      return this.description;
  };

  public abstract cost(): number;
}

abstract class CarOptions extends Car{
  decoratedCar: Car;
  public abstract getDescription(): string;
}

class ModelS extends Car{
  public description = "Model S";

  public cost(): number {
      return 73000;
  }
}

class ModelX extends Car {
  public description = "Model X";

  public cost(): number {
      return 77000
  }
}

class EnhancedAutoPilot extends CarOptions {
  constructor(beverage: Car) {
      super();
      this.decoratedCar = beverage;
  }

  public getDescription(): string {
      return this.decoratedCar.getDescription() + ', Enhanced Autopilot';
  }

  public cost(): number {
      return this.decoratedCar.cost() + 5000;
  }
}

class SmartAirSuspension extends CarOptions {
  constructor(beverage: Car) {
      super();
      this.decoratedCar = beverage;
  }

  public getDescription(): string {
      return this.decoratedCar.getDescription() + ', Smart Air Suspension';
  }

  public cost(): number {
      return this.decoratedCar.cost() + 2500;
  }
}

class RearFacingSeats extends CarOptions {
  constructor(beverage: Car) {
      super();
      this.decoratedCar = beverage;
  }

  public getDescription(): string {
      return this.decoratedCar.getDescription() + ', Rear Facing Seats';
  }

  public cost(): number {
      return this.decoratedCar.cost() + 4000;
  }
}

let myTesla = new ModelS();
myTesla = new SmartAirSuspension(myTesla);
myTesla = new RearFacingSeats(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());