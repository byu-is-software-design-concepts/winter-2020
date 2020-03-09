export const scramble = (str1, str2) => {
  
  /*
  scramble('wrold', 'world') === true
  scramble('rkqodlw', 'world') === true
  */

  let scramble = false;
  let matches = 0;
  let s1 = str1;
  let s2 = str2;

  if (s1.length < 1 || s2.length < 1){
    scramble = true;
  } else {

    //if matches = length
    for (var i = 0; i < s1.length; i++){
      for (var z = 0; z < s2.length; z++){
        if (s2.charAt(z) == s1.charAt(i)){
          matches++;
        }
      }
    }

    if (matches = str2.length){
      scramble = true;
    }
}


  return scramble;
}
