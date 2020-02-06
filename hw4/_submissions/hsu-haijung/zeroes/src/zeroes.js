export const moveZeroesToEnd = arr => {
  // TODO
  let zero_list = []
  while (arr.indexOf(0) != -1) {
    arr.splice(arr.indexOf(0), 1)
    zero_list.push(0)
  }
  arr = arr.concat(zero_list)
  return arr
}