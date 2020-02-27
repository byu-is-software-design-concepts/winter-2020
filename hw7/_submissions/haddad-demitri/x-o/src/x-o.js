export const isXAndOValid = str => {
  
  let x = 0;
  let o = 0;
  let s = str.toLowerCase();

  for (var i = 0; i < s.length; i++){
    (s.charAt(i) === 'x') ? x++ : x;
    (s.charAt(i) === 'o') ? o++ : o;
  }

  return ( x == o ? true : false);

}
