const moveZeroesToEnd = arr => {
  let zeroArr = []
  for(item of arr) {
    if(item == 0)
      zeroArr.push(item)
  }
  for(item of zeroArr)
  {
    arr.push(item)
    console.log(item)
  }
  return arr
}
