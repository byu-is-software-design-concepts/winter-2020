export const moveZeroesToEnd = arr => {
  
  let zeroes = arr.filter(item => item === 0)
  let items = arr.filter(item => item !== 0)

  return items.concat(zeroes)
}
