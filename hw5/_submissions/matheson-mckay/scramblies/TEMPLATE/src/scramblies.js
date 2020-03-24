export const scramble = (str1, str2) => {
  let v = 0;
  for(let x in str1){
    let n = str2.charAt(x)
    if(str1.includes(n)){
      v = v;
    }
    else {v++;}
  }
  return (v > 0 ? false : true)
}
