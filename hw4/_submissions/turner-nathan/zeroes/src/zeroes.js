export const moveZeroesToEnd = arr => {
  let newArr = []
  let numZeroes = 0
  
  // Naive solution
  for(let x of arr) {
    // If not zero, push onto new array. Otherwise, increment the number of zeroes.
    if (x !== 0) {
      newArr.push(x)
    } else {
      numZeroes++
    }
  }
  // Push however many zeroes there were onto the end of the array.
  for(let i = 0; i < numZeroes; i++) {
    newArr.push(0)
  }
  
  return newArr
}
