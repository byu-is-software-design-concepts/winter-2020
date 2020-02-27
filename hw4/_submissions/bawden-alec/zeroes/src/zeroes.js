export const moveZeroesToEnd = arr => {
  const newArr = []
  let numOfZeros = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i])
    }
    else {
      numOfZeros++
    }
  }
  for (let i = 0; i < numOfZeros; i++) {
    newArr.push(0)
  }

  return newArr
}