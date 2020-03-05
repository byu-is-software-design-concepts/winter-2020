export const isXAndOValid = str => {
  let strArr = str.split('')
  let xCount = 0
  let oCount = 0
  let result = false
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i] == 'x' || strArr[i] == 'X'){
      xCount++
    }
    else if(strArr[i] == 'o' || strArr[i] == 'O'){
      oCount++
    }
  }
  if(xCount === oCount){
    result = true
  }
  
  // TODO
  return result
}
