var Iterator = function(items) {
    this.index = 0;
    this.items = items;
}
 
Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
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
    var items = ["we", 3, "kings", false, "1lm^93fja"];
    var iter = new Iterator(items);

    for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
        log.add(item);
    }
    log.add("");
 
    iter.each(function(item) {
        log.add(item);
    });
 
    log.show();
}