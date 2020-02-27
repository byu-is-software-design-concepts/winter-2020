export const moveZeroesToEnd = arr => {
  // TODO
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i,1)
      i--
      count++
    }
  }

  while (count != 0) {
    arr.push(0)
    count--
  }

  // Attempt at simplifying the equation
  /*
  let farr = arr.filter((value, index) => {
    if (value === 0) {
      arr.splice(index,1)      
    }
    return value === 0;
  }) 

  arr = arr.concat(farr)
  */

  return arr
}
