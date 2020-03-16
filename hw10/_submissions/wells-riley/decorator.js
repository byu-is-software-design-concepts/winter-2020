//create a decorator to add time logging for a function to determine how long it took to run

class myClass {
    @time()
    taskToTime() {
        for (var i = 0; i < 100; i++) {
            i *= i
        }
    }
}

console.log(taskToTime)