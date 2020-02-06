export const moveZeroesToEnd = arr => {
  // TODO
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i,1)
      count++
      i--
    }
  }

  while (count > 0) {
    arr.push(0)
    count--
  }

  return arr
}

