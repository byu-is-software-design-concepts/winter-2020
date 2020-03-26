var Request = function(amount) {
    this.amount = amount;
    log.add("Requested: $" + amount + "\n");
}

Request.prototype = {
    get: function(coin) {
        var count = Math.floor(this.amount / coin);
        this.amount -= count * coin;
        log.add("Dispense " + count + " $" + coin + " coins");
        return this;
    }
}

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();

function run() {
    var request = new Request(.87);

    request.get(.25).get(.10).get(.05).get(.01);

    log.show();
}