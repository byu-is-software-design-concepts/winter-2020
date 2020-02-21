export const isXAndOValid = str => {
  let xCount = 0
  let oCount = 0

  for (let letter of str) {
    if (letter.toLowerCase() === 'x') {
      xCount++
    }
    if (letter.toLowerCase() === 'o') {
      oCount++
    }
  }
  return (xCount === oCount)
}
