export const moveZeroesToEnd = arr => {
  
  let zero = 0

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      arr.splice(i,1)
      zero = zero + 1
      i--
    }
  }

  for(let i = 0; i < zero; i++){
    arr.push(0)
  }

  return arr
}