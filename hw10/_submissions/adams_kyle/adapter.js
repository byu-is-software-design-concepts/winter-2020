//adding an adapter for special orders at a restaurant

// old 
function Order() {
    this.request = function(baseOrder, finalOrder, calories) {
        return "$10";
    }
}
 
// new 
function SpecialOrder() {
    this.login = function(credentials) {  };
    this.baseItems = function(baseItems) {  };
    this.setOptions = function(setOptions) {  };
    this.calculate = function(total) { return "$15"; };
}
 
// adapter 
function OrderAdapter(credentials) {
    var order = new SpecialOrder();
 
    order.login(credentials);
 
    return {
        request: function(baseOrder, finalOrder, total) {
            order.setPrice(baseOrder);
            order.setOptions(finalOrder);
            return order.calculate(total);
        }
    };
}
 
 
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    var order = new Order();
    var credentials = {token: "password"};
    var adapter = new OrderAdapter(credentials);
 
    var cost = order.request("5.29", "3.24", "200 calories");
    log.add("Old cost: " + cost);

    cost = adapter.request("5.93", "35.39", "200 calories");
 
    log.add("New cost: " + cost);
    log.show();
}