export const scramble = (str1, str2) => {
  str2 = str2.split('');
  while(str2.length > 0){
    if(str1.indexOf(str2[0]) != -1){
      str2.splice(0,1);
    }
    else{
      return false
    }
  }
  return true
}
