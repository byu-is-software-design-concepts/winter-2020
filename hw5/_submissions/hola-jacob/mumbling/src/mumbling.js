export const createMumble = str => {
  let repCount = 1
  let iCount
  let newStr = ''
  let tempChar = ''
  let firstLetter = true
  if (str == ''){
    return ''
  }
  for(let temp of str){
    for(iCount=1; iCount <= repCount; iCount++){
      if(firstLetter){
        newStr += temp.toUpperCase()
        firstLetter=false
      }
      else{
        newStr += temp
      }
    }
    if(repCount !== str.length){
      newStr += '-'
    }
    repCount++
    iCount = 1
    firstLetter = true
  }
  return newStr
}
