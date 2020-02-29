export const uniqueInOrder = str => {
  let result = []

  str.split('').forEach((letter, index, array) => {
    if (index < array.length - 1) {
      letter !== array[index + 1] && result.push(letter)
    } else {
      array[index - 1] !== letter && result.push(letter)
    }
  })

  return result
}
