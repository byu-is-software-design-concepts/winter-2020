interface Employee {
    hours: number;
    task(): any;
}

class Superintendent implements Employee {
    assistant: Employee[];
    hours: number;
    

    public constructor(hours: number, employees: Employee[]) {
        this.hours = hours;
        this.assistant = employees;
    }

    task() {
        this.assignTask()
        return this.assistant.map(employee => employee.task())
    }

    assignTask() {
        return this.hours;
    }
}

class Underling implements Employee {
    hours: number;

    public constructor(hours) {
        this.hours = hours;
    }

    task() {
        return this.hours;
    }
}