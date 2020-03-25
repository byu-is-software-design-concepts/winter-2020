export const isXAndOValid = str => {

  let numX = 0;
  let numO = 0;
  let trueFalse


  // count the x & o in string and remove after each is counted
  while(str.includes('x') || str.includes('o')){
    if(str.indexOf('o') != -1){
      numO++;
      str = str.replace('o','')
    }
    if(str.indexOf('x') != -1){
      numX++;
      str = str.replace('x','')
    }
  }

  if (numO === numX){
    trueFalse = true
  }
  else{
    trueFalse = false
  }

  return trueFalse
}
