export const moveZeroesToEnd = arr => {
  let tempvariable1;
  let tempvariable2;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      //move it all through
      let psuedoI = i
      for (let j = i + 1; j < arr.length; j++) {
        tempvariable1 = arr[psuedoI]
        tempvariable2 = arr[j]
        arr[psuedoI] = tempvariable2
        arr[j] = tempvariable1
        psuedoI += 1
      }
    }
  }
  return arr
}
