class employeeComposite {
    pay(){
        console.log('default')
    }
}

class manager extends employeeComposite {
    constructor(name){
        super()
        this.name = name
        this.employees = []
    }

    pay(){
        for(const child of this.props.children){
            console.log(this.props.name + 'was paid')
        }
    }

    addEmployee(emp){
        this.employees.push(emp)
    }
}

class employee extends employeeComposite {
    constructor(name){
        super()
        this.name = name
    }
    pay(){
        for(const child of this.props.children){
            console.log(this.props.name + 'was paid')
        }
    }
}

const managerMan = new manager('El Jefe')
const employee1 = new employee('Joe Bob')
const employee2 = new employee('Shannon')

managerMan.addEmployee(employee1)
managerMan.addEmployee(employee2)

allEmployees = new employeeComposite({
    name: 'EmployeeComposite',
    children: [manager, employee]
})

allEmployees.pay()