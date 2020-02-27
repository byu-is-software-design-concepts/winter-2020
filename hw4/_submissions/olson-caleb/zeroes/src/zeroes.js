export const moveZeroesToEnd = arr => {
  // TODO
  let zeroes = 0
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (arr[i] == 0) {
      zeroes += 1
      arr.splice(i, 1)
    }
  }
  const newArr = arr
  for (var x = 0; x < zeroes; x++) {
    newArr.push(0)
  }
  console.log(newArr)
  return newArr
}