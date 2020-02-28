export const isXAndOValid = str => {
  let tempArray = str.split('')
  let xCount = 0
  let yCount = 0
  for (let iCount = 0; iCount >= tempArray.length; iCount++){
    let x = tempArray[iCount]
    if( x=='x'||'X'){
      xCount++
    }
    if (x == 'y'||'Y'){
      yCount++
    }

  }

  if (xCount == yCount){
    return true
  }

  return false
}
