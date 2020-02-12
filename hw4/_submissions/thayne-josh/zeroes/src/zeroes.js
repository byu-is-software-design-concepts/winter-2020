const moveZeroesToEnd = arr => {
  let zeroArr = []
  for(let i = 0; i <= zeroArr.length; i++) {
    if(arr[i] == 0)
      zeroArr.push(arr.splice[i])
  }
  for(let i = 0; i <= zeroArr.length; i++) {
    arr.push(zeroArr[i])
  }
  return arr
}
