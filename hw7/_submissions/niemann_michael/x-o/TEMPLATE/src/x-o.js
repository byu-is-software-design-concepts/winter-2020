export const isXAndOValid = str => {
  let arr = []
  arr = str.split('')
  let xCount = 0
  let oCount = 0
  for(let c of arr){
    if(c == 'x'){
      xCount++;
    }
    if(c == 'o'){
      oCount++;
    }
  }
  if(xCount == oCount){
    return true
  }
  else {
    return false
  }
}