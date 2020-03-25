var Streetlight = function(){
    let count = 0
    let currentState = new Red(this)

    this.change = function (state) {
        if (count++ >= 10) return
        currentState = state
        currentState.go()
    }
    
    this.start = function () {
        currentState.go()
    }
}

var Red = function (light) {
    this.light = light

    this.go = function () {
        log.add("Red --> 1 minute")
        light.change(new Green(light))
    }
}

var Yellow = function (light) {
    this.light = light

    this.go = function () {
    log.add("Yellow --> 10 seconds")
    light.change(new Red(light))
    }
}

var Green = function (light) {
    this.light = light

    this.go = function () {
    log.add("Green --> 1 minute")
    light.change(new Yellow(light))
    }
}

var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
 
function run() {
    var light = new TrafficLight();
    light.start();
 
    log.show();
}
