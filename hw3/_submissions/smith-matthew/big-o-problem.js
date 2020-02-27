//BigO for this one is o(n)
function looper(input) {
    // Loops through every item in the input once => O(n)
    input.forEach(item => {
        console.log(item);
    });
}

//Big O for this is O(1) - constant
function loopTheLoop() {
    //We have two variables here, i and j, so it would be O(i*j), but because they are both constants
    //we would end up dropping these because it has no effect on the run time as N would get exponentially big
    //(if there was an N in the equeation). So after dropping both of these it would be O(1) - constant
    for (let i = 0; i < 45; i++) {
        for (let j = 1; j < 47; j++) {
            console.log(i, j);
        }
    }
}

//BigO for this is O(1) - constant
function breakTheLoop() {
    //In this function no matter how large i got it would only print the first value of i and then the 
    //break statement kicks it out of the for loop. Regardless of the value that i could get to (i.e. i<10000000)
    // the results would be the same
    for (let i = 0; i < 45; i++) {
        console.log(i);
        break;
    }
}

//I had to look at Branden explanation because this one was a little tricky. But with recursive functions
// the call stack continues to grow depending on N. for each N two calls are made, resulting in exponential
// growth. This would make it o(2^n).
function recursiveFibonnacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
}

//The only significant complexity in this one is the middle piece of this funcitons. The firts and last are
//considered to be constants so they would be dropped leaving O(n/2) which is simplified to o(n)
function printFirstItemThenFirstHalfThenSayHi100Times(arr, size) {
    console.log("First element of array = %d\n", arr[0]); //=> This would be 0(1)

    //This for loop would be O(N/2) because the array is cut in half
    for (let i = 0; i < size / 2; i++) {
        console.log(arr[i]);
    }
    //This for Loop is a constant so it can be dropped it 
    for (let i = 0; i < 100; i++) {
        console.log("Hi\n");
    }
}

//This one is o(n + n^2) which will simplify down to o(n^2)
function printAllNumbersThenAllPairSums(arr, size) {
    //This one loops through the whole array so it is o(n)
    for (let i = 0; i < size; i++) {
        console.log(arr[i]);
    }

    //This one has a nested loop of the same variable, so it is going to be o(n^2)
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            console.log(arr[i] + arr[j]);
        }
    }
}
