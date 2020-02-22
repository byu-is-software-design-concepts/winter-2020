export const scramble = (str1, str2) => {
  let check = true;
  if(check){
    for(let c of str2){
      if (str1.indexOf(c) !== -1){
        str1 = str1.replace(c, '');
      }
      else{
        check = false;
      }
    }
  }
  return check;
}
