export const spinWords = sentence => {
// function spinWords(sentence){
  let arr = sentence.split(" ")
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length >= 5){
      let arr2 = arr[i].split("")
      arr2.reverse()
      let newArr = arr2.join("")
      arr[i] = newArr
    }
  }
  let outputArr = arr.join(" ")
  return outputArr
}
// console.log(spinWords("no spin now"))

// Write a function `spinWords(sentence)` that takes 
// in a string of one or more words, and returns the 
// same string, but with all five or more letter words 
// reversed. Strings passed in will consist of only letters 
// and spaces. Spaces will be included only when more than one word is present.

// - For example:
//   - `"Stopping Spinning My Words"` should return `"Stop gninnipS My sdroW"`