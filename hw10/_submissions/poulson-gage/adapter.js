class JSONAdapter {
    adapt(address, city, state, zip){
        const data = {
            address: address,
            city: city,
            state: state,
            zip: zip
        }
        return new newSystem(JSON.stringify(data))
    }
}

class newSystem {
    constructor(data){
        this.data = data
    }
}

const adapter = new JSONAdapter()

console.log(adapter.adapt('123 Cougar Ln', 'Provo', 'UT', 84604))