export const isXAndOValid = str => {
  let xCount = 0
  let oCount = 0
  let newStr = str.split("")
  for (let i = 0; i < newStr.length; i++) {
    if (str[i] === 'x' || str[i] === 'X'){
      xCount = xCount + 1
    }
    else if (str[i] === 'o' || str[i] === 'O'){
      oCount = oCount + 1
    }
  }
  if (xCount == oCount) {
    return true
  }
  return false
}
