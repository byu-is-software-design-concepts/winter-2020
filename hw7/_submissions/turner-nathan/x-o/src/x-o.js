export const isXAndOValid = str => {
  let x = 0
  let o = 0

  for(let ch of str) {
    if (ch === 'x' || ch === 'X') {
      x++
    } else if (ch === 'o' || ch === 'O') {
      o++
    }
  }

  return x === o
}
