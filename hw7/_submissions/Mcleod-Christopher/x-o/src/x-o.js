export const isXAndOValid = str => {
  // TODO
  let arr = str.split('')
  let xCount = 0
  let oCount = 0
  let answer

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      xCount = xCount + 1
    }
    else if (arr[i] === 'o') {
      oCount = oCount + 1
    }
  }

  if (oCount === xCount) {
    answer = true
  }
  else {
    answer = false
  }

  return answer
}
