class JSONAdapter {
    adapt(title, fName, lName, age){
        const data = {
            title: title,
            fName: fName,
            lName: lName,
            age: age
        }
        return new prodSystem(JSON.stringify(data))
    }
}

class prodSystem {
    constructor(data){
        this.data = data
    }
}

const nameAdapter = new JSONAdapter()

console.log(nameAdapter.adapt('Mr.', 'Bruce', 'Wayne', 31))