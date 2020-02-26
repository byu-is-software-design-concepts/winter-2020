export const isXAndOValid = str => {
  // TODO
  let x_count = 0
  let o_count = 0
  
  for (let char of str) {
    if (char === 'x') {
      x_count++
    }
    else if (char === 'o') {
      o_count++
    }
  }

  if (x_count === o_count) {
    return true
  }
  else {
    return false
  }
}