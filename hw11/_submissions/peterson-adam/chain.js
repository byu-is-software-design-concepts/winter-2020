let totalScore = 0;

let Request = function(score) {
    this.score = score;
}
 
Request.prototype = {
    get: function(points) {
        totalScore = totalScore + points;
        console.log("This round the team scored: " + points + ". Their total Score is:" + totalScore);
        return this;
    }
}
 
 
function run() {
    let request = new Request(20);
 
    request.get(3).get(2).get(7).get(9).get(1).get(4);
}

run();