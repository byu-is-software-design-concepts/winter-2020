//I decided to use a website to help me walk through the Chain of Responsibility Design Pattern I copied what they did as an example: https://www.joezimjs.com/javascript/javascript-design-patterns-chain-of-responsibility/
//The Design Pattern acts like an ATM. It separates different methods for different size of bills to be "spit out" of the machine.
//I wrote the code below line for line using the example on the website. I added my own comments as I tried understanding it conceptually.


//This function uses the chain of bill sizes in the ATM model to set the current bill size
var MoneyStack = function (billSize) {
    this.billSize = billSize
    this.next = null;
}

MoneyStack.prototype = {
    //Amount is whatever is left to withdraw
    withdraw: function (amount) {
        var numOfBills = Math.floor(amount / this.billSize);

        if (numOfBills > 0) {
            this.ejectMoney(numOfBills);

            amount = amount - (this.billSize * numOfBills);
        }
        amount > 0 && this.next && this.next.withdraw(amount);
    },
    //We use this in our ATM model to create our chain of responsibility
    setNextStack: function (stack) {
        this.next = stack;
    },

    //This function tells us how many of each bill are being spit out
    ejectMoney: function (numOfBills) {
        if (numOfBills < 2) {
            console.log(numOfBills + " $" + this.billSize + " dollar bill was spit out")
        }
        else {
            console.log(numOfBills + " $" + this.billSize + " dollar bills were spit out")
        }
        
    }

    
}

var ATM = function () {

    var stack100 = new MoneyStack(100),
        stack50 = new MoneyStack(50),
        stack20 = new MoneyStack(20),
        stack10 = new MoneyStack(10),
        stack5 = new MoneyStack(5),
        stack1 = new MoneyStack(1);

    //Here's our chain. We start with big bills then go to smaller bills
    stack100.setNextStack(stack50);
    stack50.setNextStack(stack20);
    stack20.setNextStack(stack10);
    stack10.setNextStack(stack5);
    stack5.setNextStack(stack1);


    this.moneyStacks = stack100;
}

ATM.prototype.withdraw = function (amount) {
    this.moneyStacks.withdraw(amount);
}

//Example

let atm = new ATM();

atm.withdraw(187);
/* outputs:
    1 $100 dollar bill was spit out
    1 $50 bill(s) dollar bill was spit out
    1 $20 bill(s) dollar bill was spit out
    1 $10 bill(s) dollar bill was spit out
    1 $5 bill(s) dollar bill was spit out
    2 $1 bill(s) dollar bills were spit out
*/

atm.withdraw(50);
/*
 1 $50 dollar bill was spit out
*/


