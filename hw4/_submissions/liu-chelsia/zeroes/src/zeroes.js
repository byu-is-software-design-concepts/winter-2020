export const moveZeroesToEnd = arr => {
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == 0){
      arr.push(arr.splice(i, 1)[0]);
    }
  }

  return arr
}
