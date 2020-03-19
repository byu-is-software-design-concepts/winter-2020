// Create an adapter for a legacy system/class that has employee information stored as separate attributes to be used with a system that wants the data as a JSON string

class NewData {
    getData = () => { }
}

class Employee {
    name: string
    address: string
}

class Adapter implements NewData {
    employee: Employee
    constructor(employee: Employee) {
        this.employee = employee
    }
    getData = () => {
        return JSON.stringify(this.employee)
    }
}

class NewCode implements NewData {
    employee: JSON
    constructor() { }
    getData = () => {
        return this.employee
    }

}



