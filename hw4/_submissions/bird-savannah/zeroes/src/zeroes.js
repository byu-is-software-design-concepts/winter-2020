export const moveZeroesToEnd = arr => {
  let zeroes = arr.filter(item => item === 0)
  let items = arr.filter(item => item !== 0)

  let combine = items.concat(zeroes)
  return combine
}
