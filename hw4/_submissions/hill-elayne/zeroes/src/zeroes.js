export const moveZeroesToEnd = arr => {
  let zeroes = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1)
      i -= 1
      zeroes.push(0)
    } 
  }
  return arr.concat(zeroes)
}
