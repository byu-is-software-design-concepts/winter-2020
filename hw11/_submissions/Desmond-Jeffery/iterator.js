//I found a website that helped me conceptualize very basic implementation of an iterator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

function myIterator(array) {
    let nextIndex = 0
    return {
        next: function () {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { done: true };
        }
    }
}

let names = makeIterator(['Des', 'Lex', 'Ezra'])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().done)
