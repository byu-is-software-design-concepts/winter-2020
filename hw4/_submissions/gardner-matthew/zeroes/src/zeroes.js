export const moveZeroesToEnd = arr => {
  let tempArr = []
  let i = 0

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      tempArr.push(arr.splice(i, 1))
    }
  }

  arr.concat(tempArr)  

  return arr
}
