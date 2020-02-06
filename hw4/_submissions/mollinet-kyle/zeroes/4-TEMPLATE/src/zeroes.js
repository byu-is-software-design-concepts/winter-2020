export const moveZeroesToEnd = arr => {
  let zeroCount = 0
  for(var i = 0; i < arr.length;){
    if(arr[i] === 0){
      if(i == arr.length - zeroCount){
        return arr
      }
      arr.splice(i,1)
      arr.push(0)
      zeroCount++
    }
    else{
      i++
    }
  }
}


