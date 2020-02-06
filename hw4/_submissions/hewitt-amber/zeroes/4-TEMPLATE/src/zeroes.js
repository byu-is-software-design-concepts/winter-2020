export const moveZeroesToEnd = arr => {
  // TODO
    const zeroes = arr.filter(item => item == 0)
    const items = arr.filter(item => item != 0)

    const result = items.concat(zeroes)
  return arr
}
