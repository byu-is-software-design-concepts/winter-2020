export const moveZeroesToEnd = arr => {
  // TODO
  var uniqueArray = [];
        
    // Loop through array values
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arr.push(0);
            arr.splice(i, 1)
        }
    }
  return arr
}
