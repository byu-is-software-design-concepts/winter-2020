export const isXAndOValid = str => {
  let iNumX = 0;
  let iNumO = 0;
  let bEqual;


  // count the x & o in string and remove after each is counted
  while(str.match('x') || str.match('o')){
    if(str.indexOf('x') != -1){
      iNumX++;
      str = str.replace('x','')
    }
    if(str.indexOf('o') != -1){
      iNumO++;
      str = str.replace('o','')
    }
    
  }

  if (iNumO === iNumX){
    trueFalse = true
  }
  else{
    trueFalse = false
  }
  let result = trueFalse
  return result
}
