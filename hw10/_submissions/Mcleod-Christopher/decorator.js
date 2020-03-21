// Macbook we will decorate
class MacBook {
    constructor() {
        this.cost = function () { return 997; };
        this.screenSize = function () { return 13.3; };
    }
}

// Decorator 1
function Memory(macbook) {
    var v = macbook.cost()
    macbook.cost = function() {
        return v + 75
    }
}

// Decorator 2
function Engraving(macbook){
    var v = macbook.cost()
    macbook.cost = function(){
        return  v + 200
    }
}

// Decorator 3
function Insurance(macbook){
    var v = macbook.cost()
    macbook.cost = function(){
        return  v + 250
    }
}

var mb = new MacBook()
console.log('\n')
console.log('Base Model:')
console.log('Price: $' + mb.cost())
console.log('Screen Size: ' + mb.screenSize() + ' in.')
console.log('\n')
Memory(mb)
console.log('With Additional Memory:')
console.log('Price: $' + mb.cost())
console.log('Screen Size: ' + mb.screenSize() + ' in.')
console.log('\n')
Engraving(mb)
console.log('With Memory and Engraving:')
console.log('Price: $' + mb.cost()) 
console.log('Screen Size: ' + mb.screenSize() + ' in.')
console.log('\n')
Insurance(mb)
console.log('Fully Decked out:')
console.log('Price: $' + mb.cost()) 
console.log('Screen Size: ' + mb.screenSize() + ' in.') 