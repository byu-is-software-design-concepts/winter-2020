//Adapter for something that has an new and old way of getting employee data.

import { toJson } from "xml2json";

interface NewEmployeeDataFormat {
    getEmployeeData(): {};
}

class LegacyEmployeeDataCode {
    xmlData: string;
    constructor() { }
}

class LegacyEmployeeDataCodeAdapter implements NewEmployeeDataFormat {
    adaptee: LegacyEmployeeDataCode;
    constructor(legacyEmployeeDataCode: LegacyEmployeeDataCode) {
        this.adaptee = legacyEmployeeDataCode;
    }
    getEmployeeData() {
        return toJson(this.adaptee.xmlData, { object: true });
    }
}

class NewCode implements NewEmployeeDataFormat {
    data: JSON;
    constructor() { }
    getEmployeeData() {
        return this.data;
    }
}


//Composite - Create a composite handling individual employees and manager employees 
//(in charge of a set of employees) and add functionality to "pay" them on payday

interface Employee {
    pay(): any;
}

class individualEmployee implements Employee {
    Name: any;
    Age: any;
    payRate: any;
    constructor(name, age, payrate: any) {
        this.Name = name;
        this.Age = age;
        this.payRate = payrate;
    }
    pay() {
        return this.payRate;
    }
}

class managerEmployee implements Employee {
    Name: any;
    Age: any;
    payRate: any;
    employees: Employee[]
    constructor(name, age, payrate: any, employees: Employee[]) {
        this.Name = name;
        this.Age = age;
        this.payRate = payrate;
        this.employees = employees;
    }

    pay() {
        return this.employees.map(employee => employee.pay());
    }
}