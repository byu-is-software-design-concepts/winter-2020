var Employee = function (name, salary, vacation, bonus) {
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

    this.getBonus = function () {
        return bonus;
    };
 
    this.setBonus = function (bon) {
        bonus = bon;
    };
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

var ExtraBonus = function () {
    this.visit = function (emp) {
        emp.setBonus(emp.getBonus() * emp.getSalary());
    };
};
 
// log helper

        
var employees = [
    new Employee("John", 10000, 10, .1),
    new Employee("Mary", 20000, 21, .2),
    new Employee("Boss", 250000, 51, .05)
];

var visitorSalary = new ExtraSalary();
var visitorVacation = new ExtraVacation();
var vistorBonus = new ExtraBonus();
    
for (var i = 0, len = employees.length; i < len; i++) {
    var emp = employees[i];
        
    emp.accept(visitorSalary);
    emp.accept(visitorVacation);
    emp.accept(vistorBonus);
    console.log(emp.getName() + ": Salary-$" + emp.getSalary() + ", Bonus-$"+emp.getBonus()+
        " and " + emp.getVacation() + " vacation days");
}
 