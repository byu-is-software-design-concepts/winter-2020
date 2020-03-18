// Create a composite handling individual employees and manager employees (in charge of a set of employees) and add functionality to "pay" them on payday
interface Employee {
    salary: number;

    pay(): any;
}

class Manager implements Employee {
    salary: number;
    underlings: Employee[];

    public constructor(salary: number, employees: Employee[]) {
        this.salary = salary;
        this.underlings = employees;
    }

    pay() {
        this.paySelf()
        return this.underlings.map(employee => employee.pay())
    }

    paySelf() {
        return this.salary;
    }
}

class Underling implements Employee {
    salary: number;

    public constructor(salary) {
        this.salary = salary;
    }

    pay() {
        return this.salary;
    }
}
