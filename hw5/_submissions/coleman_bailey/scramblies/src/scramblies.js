export const scramble = (str1, str2) => {
  // function scramble(str1, str2){
    var same = true;
  
    for(var count = 0; str2.length > count; count++) 
    {
      if(str1.indexOf(str2[count]) > -1)
      {
        str1 = str1.replace(str2[count], '');
      }
      else
      {
        same = false;
      }
  
    }
    return same
  }