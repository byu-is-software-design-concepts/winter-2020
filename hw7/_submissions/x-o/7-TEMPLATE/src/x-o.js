export const isXAndOValid = str => {
  let numXs = 0;
  let numOs = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i].toUpperCase() == 'X'){
      numXs ++;
    }
    if(str[i].toUpperCase() == 'O'){
      numOs ++;
    }
  }
  if (numXs == numOs){
    return true
  }

  return false
}
