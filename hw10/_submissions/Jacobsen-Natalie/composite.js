//composite for managers and their employees
function Employee(name) {
    this.employeeName = name;
}

Employee.prototype.display = function () {
    console.log(this.employeeName);
}

function Manager(name) {
    this.managerName = name;
    this.employees = [];
}

Manager.prototype.add = function (employee) {
    this.employees.push(employee);
}

Manager.prototype.remove = function (employee) {
    for (let i = 0, length = this.employees.length; i < length; i++) {
        if (this.employees[i] === employee) {
            this.employees.splice(i, 1);
            return true;
        }
    }
    
    return false;
}

Manager.prototype.getEmployeeName = function (index) {
    return this.employees[index].name;
}

Manager.prototype.display = function() {
    console.log(this.name);
    for (let i = 0, length = this.employees.length; i < length; i++) {
        console.log("   ", this.getEmployeeName(i));
    }
}
