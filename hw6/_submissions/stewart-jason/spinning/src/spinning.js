export const spinWords = sentence => {
  
  var array = sentence.split(" ")
  for (let index = 0; index < array.length; index++) {
    if (array[index].length >= 5){
      array[index]=array[index].split("").reverse().join("")
    }
  }
  return array.join().replace(/,/g," ")
}


// Write a function `spinWords(sentence)` that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// - For example:
//   - `"Stopping Spinning My Words"` should return `"Stop gninnipS My sdroW"`