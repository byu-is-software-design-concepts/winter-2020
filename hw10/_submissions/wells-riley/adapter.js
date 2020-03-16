//Create an adapter for a legacy system/class that has employee information stored as separate attributes to be used with a system that wants the data as a JSON string

class employee {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

function oldCreateEmp(name, age) {
    const e = new employee
    e.name = name
    e.age = age
    return e
}

function newCreateEmp(jsonData) {
    const e = new employee
    var obj = JSON.parse(jsonData)
    e.name = obj.name
    e.age = obj.age
}

function adapter(name, age) {
    var obj = JSON.stringify({name: name, age: age})
    newCreateEmp(obj)
}