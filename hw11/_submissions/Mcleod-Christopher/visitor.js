class Employee {
    constructor(name, salary, vacation) {
        let self = this
        this.accept = function (visitor) {
            visitor.visit(self)
        };
        this.getName = function () {
            return name
        };
        this.getSalary = function () {
            return salary
        };
        this.setSalary = function (sal) {
            salary = sal
        };
        this.getVacation = function () {
            return vacation
        };
        this.setVacation = function (vac) {
            vacation = vac
        };
    }
}
 
class ExtraSalary {
    constructor() {
        this.visit = function (emp) {
            emp.setSalary(emp.getSalary() * 1.1)
        }
    }
}
 
class ExtraVacation {
    constructor() {
        this.visit = function (emp) {
            emp.setVacation(emp.getVacation() + 2)
        }
    }
}
 
// log helper

class Log {
    constructor() {
        this.log = ""
    }
    add(msg) {
        return this.log += msg + "\n"
    }
    show() {
        console.log(this.log)
        log = ""
    }
}

let log = new Log()

let employees = [
    new Employee("John", 10000, 10),
    new Employee("Mary", 20000, 21),
    new Employee("Boss", 250000, 51)
]

let visitorSalary = new ExtraSalary()
let visitorVacation = new ExtraVacation()
    
for (let i = 0, len = employees.length; i < len; i++) {
    let emp = employees[i]
        
    emp.accept(visitorSalary)
    emp.accept(visitorVacation)
    log.add(emp.getName() + ": $" + emp.getSalary() +
        " and " + emp.getVacation() + " vacation days")
}

log.show()
