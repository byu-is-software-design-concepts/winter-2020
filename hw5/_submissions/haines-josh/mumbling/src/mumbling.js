export const createMumble = str => {
  // TODO
  var length = str.length;
  var arr = [];
  var arr1 = [];
  var undefined;
  if(str === ''){
    undefined = ''
  }
  else{
    arr = str.split('')
    for(let i = 0; i < length; i++){
      arr1.push(arr[i].toUpperCase())
        for(let j = 0; j < i; j++){
          arr1.push(arr[i].toLowerCase());
        }
      arr1.push('-')
    }
    arr1.pop()
    undefined = arr1.join('')
  }
  return undefined
}
