// Create a composite handling individual employees and manager employees (in charge of a set of employees) and add functionality to "pay" them on payday
interface Employee {
  wage: number;
  pay(): any;
}

class Manager implements Employee {
  wage: number;
  individualContributers: Employee[];

  public constructor(wage: number, employees: Employee[]) {
    this.wage = wage;
    this.individualContributers = employees;
  }

  payAll() {
    this.pay();
    return this.individualContributers.map(employee => employee.pay())
  }

  pay() {
    return this.wage;
  }
}

class IndividualContributer implements Employee {
  wage: number;

  public constructor(wage) {
    this.wage = wage;
  }

  pay() {
    return this.wage;
  }
}
