export const moveZeroesToEnd = arr => {
  
  let numOfZeros = 0

  //remove and count the number of zeros in the original array
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0) {
      arr.splice(i,1)
      numOfZeros = numOfZeros + 1
    }
  }

  //add the number of zeros back to the end of the array
  for( let i = 0; i < numOfZeros; i++){
    arr.push(0)
  }
  return arr
}