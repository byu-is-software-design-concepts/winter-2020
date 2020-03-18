export const moveZeroesToEnd = arr => {
  // TODO

  let newArr = []
  let zeroArr = []

  for (let iCount = 0; iCount < arr.length; iCount++) {
    if (arr[iCount] != 0){
      newArr.push(arr[iCount])
    }
    else {
      zeroArr.push(arr[iCount])      
    }
  }

  for (let iCount = 0; iCount < zeroArr.length; iCount++) {
    newArr.push(zeroArr[iCount])
  }

  return newArr
}
