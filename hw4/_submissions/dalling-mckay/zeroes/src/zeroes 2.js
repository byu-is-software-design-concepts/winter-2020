export const moveZeroesToEnd = arr => {
  let numZeros = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1)
      numZeros++
      i-- // need to decrement to not skip the next value
    }
  }
  for (let i = 0; i < numZeros; i++) {
    arr.push(0)
  }
  
  return arr
}
