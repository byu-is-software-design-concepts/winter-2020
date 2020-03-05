export const scramble = (str1, str2) => {
  // TODO
  var undefined;
  var res = 0;

  if (str1 === str2){
    undefined = true;
  }
  else if (str1.length === str2.length){
    for(let i = 0; i < str2.length; i++){
      var pos = str1.charAt(i);
      var pos2 = str2.search(pos)
      if(pos2 === -1){
        return false
      }
    }
    undefined = true
  }
  else{
    for(let i = 0; i < str2.length; i++){
      if(str1.indexOf(str2[i]) > -1)
      {
        str1 = str1.replace(str2[i], '');
      }
      else
      {
        undefined = false;
      }
    }
    undefined = true
  }
  return undefined
}
