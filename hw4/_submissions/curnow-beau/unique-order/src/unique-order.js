export const uniqueInOrder = str => {
  let arr = [];
  let holder = '';
  let i = 0;

  for(i; i < str.length; i++){
    if(holder === str[i]){

    }
    else{
      arr.push(str[i])
      holder = str[i]
    }
  }
  return arr
}
