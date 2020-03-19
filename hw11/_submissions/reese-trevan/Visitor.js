var Employee = function (name, salary, vacation, position) {
    var self = this;
        
    this.accept = function (visitor) {
        visitor.visit(self);
    };
 
    this.getName = function () {
        return name;
    };
 
    this.getSalary = function () {
        return salary;
    };
 
    this.setSalary = function (sal) {
        salary = sal;
    };
 
    this.getVacation = function () {
        return vacation;
    };
 
    this.setVacation = function (vac) {
        vacation = vac;
    };

    this.setPosition = function (pos) {
        position = pos;
    };

    this.getPosition = function () {
        return position;
    }
};
 
var ExtraSalary = function () {
    this.visit = function (emp) {
        emp.setSalary(emp.getSalary() * 1.1);
    };
};
 
var ExtraVacation = function () {
    this.visit = function (emp) {
        emp.setVacation(emp.getVacation() + 2);
    };
};

var PromoteEmployee = function () {
    this.visit = function (emp) {
        let promotion = "";
        if (emp.getPosition() === "Salesman") {
            promotion = "Manager";
        }
        else if (emp.getPosition() === "Manager") {
            promotion = "Executive";
        }
        else if (emp.getPosition() === "Executive") {
            promotion = "Chief Executive";
        }
        else promotion = "Unknown";
        emp.setPosition(promotion);
    };
};
 
function run() {
        
    var employees = [
        new Employee("John", 10000, 17, "Salesman"),
        new Employee("Jason", 20000, 23, "Manager"),
        new Employee("Megan", 250000, 41, "Executive")
    ];
 
    var visitorSalary = new ExtraSalary();
    var visitorVacation = new ExtraVacation();
    var visitorPosition = new PromoteEmployee();
        
    for (var i = 0, len = employees.length; i < len; i++) {
        var emp = employees[i];
            
        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        emp.accept(visitorPosition);
        console.log(emp.getName() + "(" + emp.getPosition() + "): $" + emp.getSalary() +
            " and " + emp.getVacation() + " vacation days");
    };
}

run();