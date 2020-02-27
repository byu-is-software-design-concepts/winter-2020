  
export const isXAndOValid = str => {
  let splitStr = str.split('')
  let xCount = 0
  let oCount = 0
  let output

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === 'x') {
      xCount = xCount + 1
    }
    else if (splitStr[i] === 'o') {
      oCount = oCount + 1
    }
  }

  if (oCount === xCount) {
    output = true
  }
  else {
    output = false
  }

  return output
}
// Write the function isXAndOValid(str) to check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any letter.

// For example
// ooxx should return true
// xoxx should return false
// xxooplkarjaja should return true