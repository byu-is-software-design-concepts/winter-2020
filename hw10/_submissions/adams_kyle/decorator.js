// edit your year

//old boring year
var Year2020 = function(name) {
    this.name = name;
 
    this.say = function() {
        log.add("Year2020: " + this.name);
    };
}
 
//new exciting year
var NewFeatureForYear2020 = function(year2020, releaseDate, feature) {
    this.year2020 = year2020;
    this.name = year2020.name;  
    this.releaseDate = releaseDate;
    this.feature = feature;
 
    this.say = function() {
        log.add("New feature for this year: " 
        + this.name 
        + ", coming to a city near you" 
        + this.releaseDate 
        + ", featuring " 
        + this.feature);
    };
}
 
//output
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
 
    var year2020 = new Year2020("V1");
    year2020.say();
 
    var updatedYear2 = new NewFeatureForYear2020(year2020, "Feb", "COVID-19");
    updatedYear2.say();
 
    var updatedYear3 = new NewFeatureForYear2020("V3", "March", "Earthquake");
    updatedYear3.say();

    log.show();
}