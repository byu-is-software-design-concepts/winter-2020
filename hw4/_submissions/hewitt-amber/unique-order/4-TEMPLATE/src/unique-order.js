export const uniqueInOrder = str => {
  let arr = []
  // TODO
  str.split('').forEach((letter, index, array) => {
    if (index < array.length - 1) {
      letter !== array[index + 1] && arr.push(letter)
    } else {
      array[index - 1] !== letter && arr.push(letter)
    }
  })
  return arr
}
