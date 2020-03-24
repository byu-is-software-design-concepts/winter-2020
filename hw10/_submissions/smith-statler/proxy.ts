let BankAccounts = function() {
    //constructor
};

BankAccounts.prototype = {
    add(bankAccountData) {
        // funtionality for adding a new bank account
    },
    find(bankAccount) {
        // searching the list of bank accounts
    },
    getList() {
        // return a list of all the bank accounts
    }
};

// creating the proxy
var BankAccountsProxy = function() {
    // getting a reference to the original object
    this.bankAccounts = new BankAccounts();
};

BankAccountsProxy.prototype = {
    addBankAccount(bankAccountData) {
        // some funtionality before calling the add method on BankAccounts
        return this.bankAccounts.add();
    },
    findBankAccount(bankAccount) {
        // some funtionality before calling the find method on BankAccounts
        return this.carList.find();
    },
    getBankAccountsList() {
        // some funtionality before calling the getList method on BankAccounts
        return this.carList.getList();
    }
};