export const createMumble = str => {
  str = str.split('');
  let result = '';
  for(var i = 0; i < str.length; i++){
    result += str[i].toUpperCase();
    for(var j = 0; j < i; j++){
      result += str[i].toLowerCase();
    }
    if(i < str.length - 1){
      result += '-'
    }
  }
  return result
}

