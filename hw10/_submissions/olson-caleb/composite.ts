// composite structure to create employees and managers
abstract class Employee {
    protected parent: Employee;


    public setParent(parent: Employee) {
        this.parent = parent;
    }

    public getParent(): Employee {
        return this.parent;
    }

    public add(employee: Employee): void { }

    public remove(employee: Employee): void { }

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string;
}

class Manager extends Employee {
    public operation(): string {
        return 'Employee';
    }
}

class Composite extends Employee {
    protected children: Employee[] = [];

    public add(employee: Employee): void {
        this.children.push(employee);
        employee.setParent(this);
    }

    public remove(employee: Employee): void {
        const employeeIndex = this.children.indexOf(employee);
        this.children.splice(employeeIndex, 1);

        employee.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public operation(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }

        return `Branch(${results.join('+')})`;
    }
}


function clientCode(employee: Employee) {
    console.log(`RESULT: ${employee.operation()}`);
}


const simple = new Manager();
console.log('Client: I\'ve got a basic employee:');
clientCode(simple);
console.log('');


const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Manager());
branch1.add(new Manager());
const branch2 = new Composite();
branch2.add(new Manager());
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite employee manager:');
clientCode(tree);
console.log('');

function clientCode2(employee: Employee, employee2: Employee) {
    // ...

    if (employee.isComposite()) {
        employee2.add(employee2);
    }
    console.log(`RESULT: ${employee.operation()}`);

    // ...
}

console.log('Client: I don\'t need to check the employees classes even when managing the tree:');
clientCode2(tree, simple);