// Create a composite handling individual employees and manager employees (in charge of a set of employees) and add functionality to "pay" them on payday

interface Person {
    pay(): any
}

class EmployeeData implements Person {
    personalData;
    constructor(data) {
        this.personalData = data
    }
    pay = () => {
        this.personalData.bankAcct += this.personalData.salary
    }
}

class Manager implements Person {
    employees: EmployeeData[];
    costructor(employees: EmployeeData[]) {
        this.employees = employees
    }
    pay = () => {
        this.employees.map(employee => employee.pay())
    }
}