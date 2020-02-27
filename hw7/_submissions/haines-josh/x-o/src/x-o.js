export const isXAndOValid = str => {
  // TODO
  var lowerCase = str.toLowerCase()
  var split = lowerCase.split('')
  var xCount = 0
  var oCount = 0

  for(let i = 0; i < split.length; i++){
    if(split[i] === 'x'){
      xCount++
    }
    else if(split[i] === 'o'){
      oCount++
    }
  }

  if(xCount === oCount){
    return true
  }
  else{
    return false
  }
}
