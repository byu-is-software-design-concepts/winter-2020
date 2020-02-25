export const createMumble = str => {
  
  var newStr = '';
  let j = 0;
  for (let i = 0; i < str.length; i++) {
  	let first = str.charAt(i)
    newStr += first.toUpperCase();
    while (j < i) {
    	let next = first.toLowerCase();
      newStr += next;
      j++;
    }
    j=0;
    if (i+1 < str.length) {
    	newStr += '-'
    }
  }
  return newStr;
}
